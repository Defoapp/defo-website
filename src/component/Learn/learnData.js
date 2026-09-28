// Data source for Defo Learn Hub articles, tutorials, and interactive sandboxes

export const LEARN_ARTICLES = [
  {
    id: "python",
    name: "Python",
    tagline: "The Language of AI, Data Science & Elegant Simplicity",
    badge: "AI & Backend",
    readTime: "4 min read",
    level: "All Levels",
    accentColor: "from-blue-500 via-cyan-400 to-amber-300",
    glowColor: "rgba(56, 189, 248, 0.35)",
    borderGradient: "from-blue-500/40 via-cyan-500/30 to-amber-400/20",
    category: "python",
    iconBg: "bg-blue-950/80 text-cyan-400 border border-cyan-500/30",
    title: "Python in 2024: Clean Syntax, AI Supremacy & Async Mastery",
    summary:
      "Python powers the modern technological renaissance—from powering ChatGPT and PyTorch neural networks to ultrafast microservices with FastAPI. Discover its dynamic beauty, list comprehensions, and memory architecture.",
    quickTakeaways: [
      "Dynamic typing with optional type hinting for rock-solid codebases.",
      "Vast AI ecosystem: NumPy, Pandas, PyTorch, TensorFlow, and LangChain.",
      "AsyncIO & modern web frameworks enable high-throughput APIs.",
      "The 'Zen of Python': readability and elegance above clever complexity."
    ],
    codeLanguage: "python",
    codeSnippet: `# Modern Python: Type Hints, List Comprehensions & AI Pipeline
from typing import List, Dict
import time

def process_tech_stream(languages: List[str]) -> Dict[str, any]:
    """Filter, transform, and benchmark tech stack data"""
    start_time = time.perf_counter()
    
    # Elegant list comprehension with filtering
    mastered = [
        {"name": lang.upper(), "score": len(lang) * 10, "status": "Ready"}
        for lang in languages if len(lang) > 2
    ]
    
    elapsed = round((time.perf_counter() - start_time) * 1000, 3)
    return {
        "count": len(mastered),
        "execution_ms": elapsed,
        "stack": mastered
    }

# Execute
stack = ["Python", "Java", "HTML", "CSS", "JS"]
result = process_tech_stream(stack)
print(f"🚀 Mastered {result['count']} core skills in {result['execution_ms']}ms!")
for item in result["stack"]:
    print(f"  • {item['name']} -> Score: {item['score']} [{item['status']}]")`,
    simulatedOutput: `🚀 Mastered 5 core skills in 0.042ms!
  • PYTHON -> Score: 60 [Ready]
  • JAVA -> Score: 40 [Ready]
  • HTML -> Score: 40 [Ready]
  • CSS -> Score: 30 [Ready]
  • JS -> Score: 20 [Ready]
Process finished with exit status 0 (Memory: 12.8 MB)`,
    fullArticle: {
      intro:
        "Python has evolved from Guido van Rossum's hobby project in 1989 into the undisputed lingua franca of artificial intelligence, scientific computing, automation, and enterprise web engineering. What makes Python so uniquely captivating is its refusal to compromise between human readability and computational capability.",
      sections: [
        {
          heading: "1. The Philosophy: 'Simple is Better Than Complex'",
          content:
            "Unlike traditional languages with verbose boilerplate, Python reads almost like executable English pseudocode. Concepts like indentation-defined scope remove the cognitive overload of nested brackets. With PEP 8 guidelines and Python's built-in dynamic type system, developers write expressive solutions in fewer lines than almost any other language."
        },
        {
          heading: "2. The AI & Machine Learning Monopoly",
          content:
            "Virtually every breakthrough in modern generative AI, computer vision, and machine learning runs on Python. Behind the scenes, libraries like PyTorch and NumPy use Python as an ergonomic orchestrator over high-performance C++ and CUDA GPU kernels. You get the developer velocity of Python combined with native machine speed."
        },
        {
          heading: "3. Modern Asynchronous Capabilities",
          content:
            "With the introduction of asyncio, async/await primitives, and frameworks like FastAPI and Starlette, Python easily handles thousands of concurrent WebSocket and REST connections, proving that Python is equally suited for hyperscale web microservices."
        }
      ],
      proTips: [
        "Use list & dictionary comprehensions instead of imperative map/filter loops for 30% faster execution.",
        "Embrace 'dataclasses' and 'Pydantic' for robust data models with automatic serialization.",
        "Leverage 'walrus operator' (:=) to assign variables inside conditional statements."
      ],
      quiz: {
        question: "What is the primary benefit of Python's list comprehensions?",
        options: [
          "They replace the need for memory management",
          "They provide a concise, readable, and faster way to create new lists",
          "They convert Python code to Java bytecode",
          "They automatically compile code to WebAssembly"
        ],
        answerIndex: 1,
        explanation:
          "List comprehensions provide a concise syntax for transforming iterable sequences and execute faster in CPython than equivalent manual for-loops."
      }
    }
  },
  {
    id: "java",
    name: "Java",
    tagline: "Enterprise Titan, JVM Muscle & High-Concurrency Systems",
    badge: "Enterprise & Systems",
    readTime: "5 min read",
    level: "Intermediate",
    accentColor: "from-amber-500 via-orange-500 to-red-500",
    glowColor: "rgba(245, 158, 11, 0.35)",
    borderGradient: "from-amber-500/40 via-orange-500/30 to-red-500/20",
    category: "java",
    iconBg: "bg-orange-950/80 text-amber-400 border border-amber-500/30",
    title: "Java 21+: Modern Records, Virtual Threads & JVM Power",
    summary:
      "Java powers 90% of Fortune 500 backends, high-frequency financial platforms, and Android. Experience the modern renaissance of Java with Virtual Threads, Pattern Matching, and zero-overhead Records.",
    quickTakeaways: [
      "'Write Once, Run Anywhere' via the bulletproof Java Virtual Machine (JVM).",
      "Virtual Threads (Project Loom) bring millions of lightweight threads for massive concurrency.",
      "Strict static typing and robust Object-Oriented Principles (OOP) ensure extreme reliability.",
      "Garbage collection algorithms (ZGC, G1) offer sub-millisecond pause times."
    ],
    codeLanguage: "java",
    codeSnippet: `// Modern Java 21: Records, Pattern Matching & Streams API
import java.util.List;
import java.util.stream.Collectors;

public class DefoLearnJava {
    // Compact immutable data record
    public record Skill(String name, String level, int rank) {}

    public static void main(String[] args) {
        List<Skill> skills = List.of(
            new Skill("Java", "Core", 98),
            new Skill("JVM Internals", "Advanced", 95),
            new Skill("Spring Boot", "Enterprise", 92)
        );

        System.out.println("☕ Java 21 Virtual Threads & Stream Pipeline:");
        skills.stream()
              .filter(s -> s.rank() >= 90)
              .forEach(s -> System.out.println("  • " + s.name() + " [" + s.level() + "] -> Mastery: " + s.rank() + "%"));

        String verdict = switch (skills.get(0).level()) {
            case "Core" -> "Rock solid enterprise architecture ready!";
            default -> "Continuous skill improvement underway.";
        };
        System.out.println("Status: " + verdict);
    }
}`,
    simulatedOutput: `☕ Java 21 Virtual Threads & Stream Pipeline:
  • Java [Core] -> Mastery: 98%
  • JVM Internals [Advanced] -> Mastery: 95%
  • Spring Boot [Enterprise] -> Mastery: 92%
Status: Rock solid enterprise architecture ready!
JVM HotSpot JIT: Optimizing Bytecode to Native Assembly (Pause: 0.18ms)`,
    fullArticle: {
      intro:
        "Since 1995, Java has remained the bedrock of global enterprise systems, banking transactions, telecommunications, and high-frequency trading. Rather than resting on its legacy, Java has experienced a massive modern resurgence with rapid 6-month release cycles introducing cutting-edge features.",
      sections: [
        {
          heading: "1. The JVM: The Greatest Engineering Marvel",
          content:
            "Java source code compiles down to bytecode (`.class`), which runs on the Java Virtual Machine (JVM). The JVM's HotSpot Just-In-Time (JIT) compiler profiles bytecode at runtime and dynamically compiles heavily executed 'hot spots' into raw native machine instructions. The result is near-C++ speed combined with safe managed memory."
        },
        {
          heading: "2. Project Loom: Revolutionizing Concurrency with Virtual Threads",
          content:
            "Historically, Java threads were 1:1 mapped to expensive OS kernel threads. With Virtual Threads in Java 21, the JVM manages millions of lightweight user-mode threads with practically zero memory footprint. Blocking I/O operations are no longer a bottleneck."
        },
        {
          heading: "3. Modern Syntax: Records, Pattern Matching & Sealed Classes",
          content:
            "Modern Java eliminated old boilerplate. Records provide immutable data carriers in one line, Pattern Matching simplifies type-checking and casting, and sealed classes give compile-time exhaustiveness checks."
        }
      ],
      proTips: [
        "Prefer 'record' over verbose POJO classes with getter/setter boilerplate.",
        "Take advantage of Java Streams API for readable, declarative transformations.",
        "Use modern ZGC (Z Garbage Collector) for applications requiring sub-millisecond latencies."
      ],
      quiz: {
        question: "What was the landmark feature introduced in Java 21 for concurrency?",
        options: [
          "Manual pointer arithmetic",
          "Virtual Threads (Project Loom)",
          "Removing the Garbage Collector",
          "Translating Java directly into HTML"
        ],
        answerIndex: 1,
        explanation:
          "Virtual Threads (Project Loom) allow millions of lightweight concurrent tasks to run without tying up expensive OS kernel threads."
      }
    }
  },
  {
    id: "html5",
    name: "HTML5",
    tagline: "The Semantic Skeleton of the World Wide Web",
    badge: "Web Core & Structure",
    readTime: "3 min read",
    level: "Beginner",
    accentColor: "from-rose-500 via-orange-500 to-amber-400",
    glowColor: "rgba(244, 63, 94, 0.35)",
    borderGradient: "from-rose-500/40 via-orange-500/30 to-amber-500/20",
    category: "html",
    iconBg: "bg-rose-950/80 text-orange-400 border border-rose-500/30",
    title: "Semantic HTML5: The Architecture of Accessibility & SEO",
    summary:
      "HTML is far more than simple tags. Modern HTML5 provides the semantic foundation that search engines crawl, screen readers interpret, and web browsers render into interactive digital experiences.",
    quickTakeaways: [
      "Semantic tags (<main>, <article>, <section>, <nav>) boost SEO ranking instantly.",
      "Native HTML5 APIs: Canvas, Audio, Video, Geolocation, and Web Storage.",
      "ARIA roles and semantic structure ensure universal accessibility (WCAG).",
      "Forms with built-in validation reduce client-side JavaScript overhead."
    ],
    codeLanguage: "html",
    codeSnippet: `<!-- Modern Accessible & SEO-Optimized HTML5 Document -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Defo Experience Hub</title>
</head>
<body class="dark-mode">
  <header role="banner">
    <nav aria-label="Global Navigation">
      <a href="/" class="brand-logo">Defo App</a>
    </nav>
  </header>

  <main id="main-content">
    <article class="interactive-card" aria-labelledby="card-title">
      <header>
        <span class="badge" aria-label="Skill Level">Advanced</span>
        <h2 id="card-title">HTML5 Semantic Canvas</h2>
      </header>
      <p>Semantic tags deliver 10x better SEO and WCAG accessibility compliance.</p>
      <button type="button" aria-pressed="false" class="cta-btn">
        Explore Interactive Modules
      </button>
    </article>
  </main>
</body>
</html>`,
    simulatedOutput: `🌐 DOM Tree Parsed Successfully:
  • <HTML lang="en"> (Root)
    ├─ <HEAD> (UTF-8, Viewport Responsive)
    └─ <BODY class="dark-mode">
       ├─ <HEADER role="banner"> -> <NAV> (A11y verified)
       └─ <MAIN id="main-content"> -> <ARTICLE> (Valid Landmark)
Lighthouse Accessibility Score: 100/100 | SEO Ready: 100%`,
    fullArticle: {
      intro:
        "HTML (HyperText Markup Language) is the indispensable structural spine of every web page on earth. While CSS provides the visual aesthetics and JavaScript provides the logic, HTML provides the semantic meaning that allows browsers, web crawlers, and assistive technologies to understand content.",
      sections: [
        {
          heading: "1. The Problem with 'Div Soup'",
          content:
            "Many developers fall into the trap of using endless nested <div> containers. A <div> carries zero semantic information. In contrast, HTML5 landmark elements like <header>, <nav>, <main>, <article>, <aside>, and <footer> convey intent directly to search engines and screen readers."
        },
        {
          heading: "2. The Native Power of Modern HTML5",
          content:
            "Modern HTML5 includes native support for video and audio playback, hardware-accelerated 2D/3D graphics via the <canvas> element, mathematical equations with MathML, and vectors via inline <svg>."
        },
        {
          heading: "3. Accessibility (a11y) & SEO Dominance",
          content:
            "Google's indexing bots favor semantic structure. Proper heading hierarchy (h1 -> h2 -> h3) paired with alt attributes and descriptive anchor text directly propels search rankings while ensuring compliance with global accessibility regulations."
        }
      ],
      proTips: [
        "Never skip heading levels (e.g. going straight from h1 to h3 breaks screen reader navigation).",
        "Use the '<dialog>' element for native modal dialogs with built-in backdrop styling and focus trapping.",
        "Always define 'meta viewport' and 'lang' attributes for mobile responsiveness and translation tools."
      ],
      quiz: {
        question: "Which HTML5 element represents independent, self-contained content?",
        options: ["<section>", "<article>", "<aside>", "<span>"],
        answerIndex: 1,
        explanation:
          "The <article> element is intended to encapsulate an independent, self-contained piece of content like a blog post, news story, or widget that could be distributed on its own."
      }
    }
  },
  {
    id: "css3",
    name: "CSS3",
    tagline: "The Visual Magic of 3D Transforms, Glassmorphism & Animations",
    badge: "Design & Styling",
    readTime: "4 min read",
    level: "All Levels",
    accentColor: "from-cyan-400 via-indigo-500 to-purple-500",
    glowColor: "rgba(129, 140, 248, 0.4)",
    borderGradient: "from-cyan-500/40 via-indigo-500/30 to-purple-500/20",
    category: "css",
    iconBg: "bg-indigo-950/80 text-cyan-300 border border-cyan-500/30",
    title: "Modern CSS Unleashed: Glassmorphism, 3D Canvas & Subgrid",
    summary:
      "CSS is today a full-fledged visual programming language. Master modern CSS Grid, 3D perspective transforms, hardware-accelerated fluid keyframe animations, and custom design tokens.",
    quickTakeaways: [
      "Glassmorphism with backdrop-filter, rgba borders, and specular highlights.",
      "Hardware-accelerated 3D effects via perspective, translateZ, and rotateY.",
      "CSS Subgrid and Flexbox deliver pixel-perfect responsive layouts on all screens.",
      "CSS Custom Properties (Variables) power instant dynamic theme switching."
    ],
    codeLanguage: "css",
    codeSnippet: `/* Modern Cyber Glassmorphism & 3D Interactive Card */
:root {
  --neon-glow: #00f6ff;
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-border: rgba(255, 255, 255, 0.12);
}

.defo-glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
}

.defo-glass-card:hover {
  transform: translateY(-8px) rotateX(6deg) rotateY(-4deg);
  border-color: rgba(0, 246, 255, 0.5);
  box-shadow: 0 30px 60px -10px rgba(0, 246, 255, 0.25);
}

@keyframes neonPulse {
  0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 8px var(--neon-glow)); }
  50% { opacity: 1; filter: drop-shadow(0 0 20px var(--neon-glow)); }
}`,
    simulatedOutput: `🎨 CSS Engine Rendering Pipeline:
  • CSSOM (CSS Object Model) Tree Generated
  • Hardware Acceleration: GPU Compositing Layer Active (preserve-3d)
  • Backdrop Filter: Gaussian Blur (16px) running on GPU
  • Layout Paint Overhead: 0.2ms (Zero Layout Reflow)
Status: Smooth 60 FPS Fluid Hardware Acceleration!`,
    fullArticle: {
      intro:
        "Cascading Style Sheets (CSS) have evolved from primitive font styling into a high-powered GPU-accelerated graphics engine. Modern web designers and front-end engineers can achieve hyper-realistic glass textures, tactile physical feedback, and complex responsive layouts without relying on heavy third-party JavaScript libraries.",
      sections: [
        {
          heading: "1. The Anatomy of Glassmorphism",
          content:
            "Glassmorphism creates the illusion of frosted glass suspended over vibrant background gradients. The trifecta consists of: (1) semi-transparent background fill like `rgba(255, 255, 255, 0.05)`, (2) `backdrop-filter: blur(16px)` which blurs everything behind the element, and (3) a delicate 1px border gradient that mimics light refracting along the edge of glass."
        },
        {
          heading: "2. 3D Transforms & Hardware Acceleration",
          content:
            "By setting `perspective: 1000px` on a parent and `transform-style: preserve-3d` on the child, elements exist in actual three-dimensional Cartesian space. Properties like `translate3d()`, `rotateY()`, and `scale()` are calculated directly by the client's GPU, avoiding CPU reflows and stutter."
        },
        {
          heading: "3. CSS Grid vs Flexbox: The True Harmony",
          content:
            "Use Flexbox for one-dimensional flows (rows or columns, such as navigation bars, badge lists, and button groups). Use CSS Grid for two-dimensional layouts (dashboards, product cards, asymmetric magazine layouts) and leverage `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` for automatic responsiveness without media queries."
        }
      ],
      proTips: [
        "Always apply 'will-change: transform' sparingly to hint to the browser to promote animated elements to their own composite layer.",
        "Use 'clamp(min, preferred, max)' for fluid responsive typography that scales naturally between phone and 4K displays.",
        "Combine CSS Custom Properties with JavaScript for instant dynamic theme toggles."
      ],
      quiz: {
        question: "Which CSS property is essential to blur the content appearing behind an element?",
        options: ["filter: blur()", "backdrop-filter: blur()", "background-blur", "box-shadow-blur"],
        answerIndex: 1,
        explanation:
          "`backdrop-filter: blur()` applies graphical effects like blurring to the area behind an element, whereas `filter: blur()` blurs the element itself."
      }
    }
  },
  {
    id: "javascript",
    name: "JavaScript",
    tagline: "The Universal Engine of Interactive Web Applications",
    badge: "Frontend & Fullstack",
    readTime: "5 min read",
    level: "Intermediate",
    accentColor: "from-amber-400 via-yellow-400 to-amber-500",
    glowColor: "rgba(250, 204, 21, 0.35)",
    borderGradient: "from-yellow-400/40 via-amber-400/30 to-yellow-500/20",
    category: "javascript",
    iconBg: "bg-yellow-950/80 text-yellow-300 border border-yellow-500/30",
    title: "JavaScript Engine Internals: Event Loop & Async Architecture",
    summary:
      "JavaScript powers every browser on earth and massive backend environments via Node.js and Bun. Dive deep into the single-threaded event loop, promises, closures, and modern ES2024 features.",
    quickTakeaways: [
      "Single-threaded non-blocking I/O driven by the Event Loop & Task Queues.",
      "Async/Await primitives for effortless asynchronous operations.",
      "First-class functions, closures, and prototypical inheritance.",
      "Massive ecosystem: React, Next.js, Vue, Node.js, and TypeScript."
    ],
    codeLanguage: "javascript",
    codeSnippet: `// Asynchronous JavaScript: Event Loop, Promises & Microtasks
async function fetchTechMetrics(endpoints) {
  console.log("⚡ Starting parallel async fetch pipeline...");
  const startTime = performance.now();

  try {
    const results = await Promise.all(
      endpoints.map(async (topic) => {
        // Simulated network latency
        await new Promise(r => setTimeout(r, 60));
        return {
          topic,
          popularity: Math.floor(Math.random() * 15) + 85,
          status: "Active"
        };
      })
    );

    const elapsed = (performance.now() - startTime).toFixed(1);
    console.log(\`✅ Fetched \${results.length} topics in \${elapsed}ms (Parallel non-blocking):\`);
    results.forEach(r => console.log(\`  • \${r.topic.padEnd(10)} | Popularity: \${r.popularity}% [\${r.status}]\`));
    return results;
  } catch (error) {
    console.error("Pipeline failure:", error);
  }
}

fetchTechMetrics(["Java", "Python", "HTML5", "CSS3", "JS"]);`,
    simulatedOutput: `⚡ Starting parallel async fetch pipeline...
✅ Fetched 5 topics in 61.4ms (Parallel non-blocking):
  • Java       | Popularity: 94% [Active]
  • Python     | Popularity: 98% [Active]
  • HTML5      | Popularity: 99% [Active]
  • CSS3       | Popularity: 96% [Active]
  • JS         | Popularity: 99% [Active]
Call Stack empty -> Microtask Queue processed -> Render Frame rendered!`,
    fullArticle: {
      intro:
        "Created in just 10 days by Brendan Eich in 1995, JavaScript has transcended its origins as a lightweight scripting language for web pages to become the most widely executed programming language in human history. Today, it runs across browsers, servers, mobile apps, embedded IoT devices, and desktop software.",
      sections: [
        {
          heading: "1. The Magic of the Single-Threaded Event Loop",
          content:
            "JavaScript is single-threaded, meaning it has only one Call Stack and executes one command at a time. Yet it can process millions of incoming requests without blocking. This is accomplished through the Event Loop, Web APIs (like timers and fetch), and the Microtask Queue (Promises, MutationObservers). When an async operation completes, its callback queues up and runs as soon as the Call Stack is clear."
        },
        {
          heading: "2. Closures & Scoping Mechanics",
          content:
            "A closure is the combination of a function bundled together with references to its surrounding lexical environment. Closures grant functions memory: they can remember and access variables from an outer enclosing scope even after that outer function has returned."
        },
        {
          heading: "3. Modern ESNext & TypeScript Synergy",
          content:
            "With modern ECMAScript standards, developers enjoy optional chaining (`?.`), nullish coalescing (`??`), structuredClone, Top-level await, and private class fields (`#private`). Paired with TypeScript, JavaScript delivers static type safety without sacrificing dynamic agility."
        }
      ],
      proTips: [
        "Avoid blocking the main thread with heavy compute loops; offload heavy math to Web Workers.",
        "Always use 'const' by default, 'let' when rebinding is strictly necessary, and never use 'var'.",
        "Use 'Promise.allSettled()' when you want all requests to finish even if one fails."
      ],
      quiz: {
        question: "Which queue takes higher priority in the JavaScript Event Loop?",
        options: ["Macrotask Queue (setTimeout)", "Microtask Queue (Promise.then)", "DOM Events Queue", "Rendering Engine Queue"],
        answerIndex: 1,
        explanation:
          "Microtasks (Promises, queueMicrotask) have higher priority and are completely drained before the Event Loop yields to the next macrotask."
      }
    }
  },
  {
    id: "backend-db",
    name: "Databases & SQL",
    tagline: "High-Performance Data Storage, Query Optimization & Caching",
    badge: "Data & Architecture",
    readTime: "4 min read",
    level: "Intermediate",
    accentColor: "from-emerald-400 via-teal-400 to-cyan-500",
    glowColor: "rgba(52, 211, 153, 0.35)",
    borderGradient: "from-emerald-500/40 via-teal-500/30 to-cyan-500/20",
    category: "backend",
    iconBg: "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30",
    title: "SQL vs NoSQL: Structuring Relational Systems & Scalable Backends",
    summary:
      "Every web application depends on reliable, fast data storage. Explore relational schema normalization with PostgreSQL, index B-Trees, Redis in-memory caching, and document storage with MongoDB.",
    quickTakeaways: [
      "ACID transactions (Atomicity, Consistency, Isolation, Durability) prevent data corruption.",
      "Database indexing with B-Trees converts O(N) table scans into O(log N) lookups.",
      "Relational SQL vs Document NoSQL: choose based on query patterns and data schema volatility.",
      "Redis caching sits in front of persistent storage to drop read latencies to microseconds."
    ],
    codeLanguage: "sql",
    codeSnippet: `-- High-Performance SQL Query with Indexing, Joins & Aggregations
EXPLAIN ANALYZE
SELECT 
    u.id AS user_id,
    u.username,
    COUNT(c.id) AS completed_courses,
    AVG(c.score) AS average_score,
    MAX(c.completed_at) AS last_active
FROM users u
INNER JOIN course_progress c ON u.id = c.user_id
WHERE u.status = 'active' AND c.completed = TRUE
GROUP BY u.id, u.username
HAVING COUNT(c.id) >= 3
ORDER BY average_score DESC
LIMIT 10;`,
    simulatedOutput: `📊 Query Execution Plan (PostgreSQL Engine):
  -> Limit (cost=12.45..15.80 rows=10 width=80) (actual time=0.82..0.89ms)
    -> Index Scan using idx_users_active on users u (Index Cond: status = 'active')
    -> Hash Join on c.user_id = u.id (Memory: 48kB)
    -> GroupAggregate (Groups filtered: 240)
Total Execution Time: 0.94ms (Indexed B-Tree fast path applied)`,
    fullArticle: {
      intro:
        "Data is the crown jewel of any digital product. A visually stunning website or dynamic mobile app is only as strong as the storage engine behind it. Understanding how databases store bits on disk, maintain consistency across distributed nodes, and execute queries in milliseconds is what separates beginner coders from seasoned software architects.",
      sections: [
        {
          heading: "1. Relational SQL: The Gold Standard of Consistency",
          content:
            "SQL (Structured Query Language) engines like PostgreSQL and MySQL are built around tables, primary keys, and foreign key constraints. They adhere strictly to ACID properties, ensuring that complex multi-table transactions (such as transferring money between accounts) either succeed entirely or roll back safely."
        },
        {
          heading: "2. The Magic of Database Indexes",
          content:
            "Without an index, querying 10 million rows forces the database to perform a sequential disk scan (O(N)). By creating a B-Tree index on frequently filtered columns, lookups become logarithmic (O(log N)). A query that previously took 4 seconds suddenly finishes in 1.2 milliseconds."
        },
        {
          heading: "3. In-Memory Caching with Redis",
          content:
            "Because disk I/O is hundreds of times slower than RAM, modern scalable architectures place an in-memory key-value cache like Redis between the backend application and the database to serve hot data at sub-millisecond speeds."
        }
      ],
      proTips: [
        "Never run queries with 'SELECT *' in production; always request only the specific columns needed.",
        "Use 'EXPLAIN ANALYZE' in PostgreSQL to inspect whether queries are leveraging indexes or doing full sequential scans.",
        "Normalize relational schemas to 3NF to avoid redundant anomalies, but denormalize judiciously for high-read reporting."
      ],
      quiz: {
        question: "What does the 'A' in ACID database transactions stand for?",
        options: ["Asynchronous", "Atomicity", "Availability", "Authentication"],
        answerIndex: 1,
        explanation:
          "Atomicity guarantees that all operations within a database transaction succeed together or the entire transaction is rolled back with zero partial writes."
      }
    }
  }
];

export const ROADMAP_TRACKS = [
  {
    title: "Frontend Engineering Track",
    color: "from-sky-400 to-indigo-500",
    steps: [
      { name: "HTML5 Semantic Structure", desc: "A11y, SEO, Forms & DOM tree" },
      { name: "CSS3 & Modern Layouts", desc: "Flexbox, Grid, Glassmorphism, 3D animations" },
      { name: "JavaScript ES6+", desc: "Event loop, Async/Await, Closures, DOM APIs" },
      { name: "React Ecosystem", desc: "Component architecture, State, Hooks, TailwindCSS" }
    ]
  },
  {
    title: "Backend & Systems Track",
    color: "from-amber-400 to-emerald-500",
    steps: [
      { name: "Python / Java Fundamentals", desc: "OOP, typing, algorithmic data structures" },
      { name: "REST & High-Performance APIs", desc: "FastAPI, Spring Boot, microservices" },
      { name: "Relational & NoSQL Storage", desc: "PostgreSQL, MongoDB, Redis caching, Indexes" },
      { name: "Deployment & Cloud", desc: "Docker, CI/CD pipelines, Serverless architectures" }
    ]
  }
];
