import React, { useEffect } from "react";
import policy from "../image/illustrations/privacy_policy_hero 1.svg";
import Footer from "../component/footer/Footer";
import Navbar from "../component/Navbar/Navbar";

function Privacy() {
  useEffect(() => {
    document.title = "Defo - Privacy Policy";
  }, []);

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="mx-auto pb-10 mt-8 md:mt-12 w-11/12 max-w-4xl px-4">
          <div className="w-full mb-8 flex items-center justify-center">
            <img src={policy} alt="Privacy Policy illustration" className="w-full max-w-md mx-auto" />
          </div>
          <h1 className="font-bold pt-2 text-2xl md:text-4xl text-gray-900 mb-4">Privacy Policy</h1>
          <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              LowPow built the Defo app as a Commercial app. This SERVICE is
              provided by LowPow and is intended for use as is.
            </p>
            <p>
              This page is used to inform visitors regarding our policies with the
              collection, use, and disclosure of Personal Information if anyone
              decided to use our Service.
            </p>
            <p>
              If you choose to use our Service, then you agree to the collection and
              use of information in relation to this policy. The Personal
              Information that we collect is used for providing and improving the
              Service. We will not use or share your information with anyone except
              as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in our
              Terms and Conditions, which are accessible at Defo unless otherwise
              defined in this Privacy Policy.
            </p>
            <h2 className="font-bold pt-6 text-xl md:text-3xl text-gray-900">
              Information Collection and Use
            </h2>
            <p>
              For a better experience, while using our Service, we may require you
              to provide us with certain personally identifiable information,
              including but not limited to Name, Mail ID, and Mobile Number. The
              information that we request will be retained by us and used as
              described in this privacy policy.
            </p>
            <p>
              The app does use third-party services that may collect information
              used to identify you.
            </p>
            <p className="font-semibold">
              Link to the privacy policy of third-party service providers used by
              the app:
            </p>

            <ul className="my-6 list-disc ml-6 space-y-2 text-blue-600">
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="hover:underline">
                  Google Play Services
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noreferrer" className="hover:underline">
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noreferrer" className="hover:underline">
                  Firebase Crashlytics
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/about/privacy/update/printable" target="_blank" rel="noreferrer" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>

            <h2 className="font-bold pt-6 text-xl md:text-3xl text-gray-900">Log Data</h2>
            <p>
              We want to inform you that whenever you use our Service, in a case of
              an error in the app we collect data and information (through
              third-party products) on your phone called Log Data. This Log Data may
              include information such as your device Internet Protocol (“IP”)
              address, device name, operating system version, the configuration of
              the app when utilizing our Service, the time and date of your use of
              the Service, and other statistics.
            </p>

            <h2 className="font-bold pt-6 text-xl md:text-3xl text-gray-900">Cookies</h2>
            <p>
              Cookies are files with a small amount of data that are commonly used
              as anonymous unique identifiers. These are sent to your browser from
              the websites that you visit and are stored on your device's internal
              memory. This Service does not use these “cookies” explicitly. However,
              the app may use third-party code and libraries that use “cookies” to
              collect information and improve their services. You have the option to
              either accept or refuse these cookies and know when a cookie is being
              sent to your device.
            </p>

            <h2 className="font-bold pt-6 text-xl md:text-3xl text-gray-900">Service Providers</h2>
            <p>
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul className="my-4 list-disc ml-6 space-y-1">
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>

            <h2 className="font-bold pt-6 text-xl md:text-3xl text-gray-900">Security</h2>
            <p>
              We value your trust in providing us your Personal Information, thus we
              are striving to use commercially acceptable means of protecting it.
              But remember that no method of transmission over the internet, or
              method of electronic storage is 100% secure and reliable, and we
              cannot guarantee its absolute security.
            </p>

            <h2 className="font-bold pt-6 text-xl md:text-3xl text-gray-900">Links to Other Sites</h2>
            <p>
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that these
              external sites are not operated by us. Therefore, we strongly advise
              you to review the Privacy Policy of these websites.
            </p>

            <h2 className="font-bold pt-6 text-xl md:text-3xl text-gray-900">Children's Privacy</h2>
            <p>
              These Services do not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from children
              under 13 years of age.
            </p>

            <h2 className="font-bold pt-6 text-xl md:text-3xl text-gray-900">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes.
            </p>
            <p className="font-medium text-gray-900 pt-2">
              This policy is effective as of 2023-01-16
            </p>

            <h2 className="font-bold pt-6 text-xl md:text-2xl text-gray-900">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do
              not hesitate to contact us at{" "}
              <a href="mailto:support@yesdefo.com" className="text-blue-600 hover:underline font-medium">
                support@yesdefo.com
              </a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
