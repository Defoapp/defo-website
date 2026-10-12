import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  const prevPathRef = useRef(pathname);
  const isInitialMount = useRef(true);

  // 1. Maintain and restore scroll position on page refresh
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }

    const storageKey = `defo_scroll_${window.location.pathname}`;

    // Continuously record user's scroll position
    let scrollDebounce;
    const handleScroll = () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        try {
          if (window.scrollY > 0) {
            sessionStorage.setItem(storageKey, window.scrollY.toString());
          }
        } catch (e) {
          // ignore potential storage quota errors
        }
      }, 100);
    };

    const handleBeforeUnload = () => {
      try {
        if (window.scrollY > 0) {
          sessionStorage.setItem(storageKey, window.scrollY.toString());
        }
      } catch (e) {
        // ignore
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", handleBeforeUnload);

    // On refresh / reload: restore saved scroll position
    const saved = sessionStorage.getItem(storageKey);
    if (saved !== null) {
      const targetY = parseInt(saved, 10);
      if (!isNaN(targetY) && targetY > 0) {
        // Perform multiple phased attempts as images/dynamic content mount
        const attemptRestore = () => {
          if (Math.abs(window.scrollY - targetY) > 5) {
            window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
          }
        };

        requestAnimationFrame(attemptRestore);
        const t1 = setTimeout(attemptRestore, 60);
        const t2 = setTimeout(attemptRestore, 200);
        const t3 = setTimeout(attemptRestore, 500);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("beforeunload", handleBeforeUnload);
          clearTimeout(scrollDebounce);
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(scrollDebounce);
    };
  }, []);

  // 2. Only scroll to top when actively navigating to a NEW page route
  useEffect(() => {
    // If it's the initial load or page refresh, NEVER scroll to top!
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // If browser back/forward was used, preserve browser's restored position
    if (navType === "POP") {
      return;
    }

    // If navigating to a hash anchor (e.g. #price), scroll to that element
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Only when user clicked a link to a DIFFERENT page, scroll to top
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      try {
        sessionStorage.removeItem(`defo_scroll_${pathname}`);
      } catch (e) {}
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash, navType]);

  return null;
}
