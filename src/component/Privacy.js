import React, { useEffect } from "react";
import "../component/privacy.css";
import policy from "../image/illustrations/privacy_policy_hero 1.svg";
import Footer from "../component/footer/Footer";
import { Navbar } from "../component/Navbar/Navbar";

function Privacy() {
  useEffect(() => {
    document.title = " Defo - Privacy Policy";
  });
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="priv">
          <div className="header-container">
            <div className="head">
              <h1>Privacy Policy</h1>
            </div>
            <div className="parent">
              <div className="items">
                LowPow built the Defo app as a Commercial app. This SERVICE is
                provided by LowPow and is intended for use as is.
                <br />
                <br />
                This page is used to inform visitors regarding our policies with
                the collection, use, and disclosure of Personal Information if
                anyone decided to use our Service
              </div>
              <div className="policy">
                <img src={policy} alt="privacy" />{" "}
              </div>
            </div>
          </div>
          <div className="second-container">
            <p>
              If you choose to use our Service, then you agree to the collection
              and use of information in relation to this policy. The Personal
              Information that we collect is used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>
            <br />
            <p>
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which are accessible at Defo unless
              otherwise defined in this Privacy Policy.
            </p>
          </div>
          <div className="third-container">
            <h1>Information Collection and Use</h1>
            <p>
              For a better experience, while using our Service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to Name, Mail ID, Mobile
              Number, . The information that we request will be retained by us
              and used as described in this privacy policy.
            </p>
            <br />
            <p>
              The app does use third-party services that may collect information
              used to identify you.
            </p>
            <p>
              Link to the privacy policy of third-party service providers used
              by the app
            </p>
            <br />
            <ul>
              <a href="https://policies.google.com/privacy">
                <li>Google Play Services</li>
              </a>
              <a href="https://firebase.google.com/policies/analytics">
                <li>Google Analytics for Firebase</li>
              </a>
              <a href="https://firebase.google.com/support/privacy/">
                <li>Firebase Crashlytics</li>
              </a>
              <a href="https://www.facebook.com/about/privacy/update/printable">
                <li>Facebook</li>
              </a>
            </ul>
            <br />
          </div>
          <div className="log">
            <h1>Log Data</h1>
            <p>
              We want to inform you that whenever you use our Service, in a case
              of an error in the app we collect data and information (through
              third-party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing our Service, the time and
              date of your use of the Service, and other statistics.
            </p>
          </div>
          <br />
          <div className="cookies">
            <h1>Cookies</h1>
            <p>
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device's internal memory. This Service does not use these
              “cookies” explicitly. However, the app may use third-party code
              and libraries that use “cookies” to collect information and
              improve their services. You have the option to either accept or
              refuse these cookies and know when a cookie is being sent to your
              device. If you choose to refuse our cookies, you may not be able
              to use some portions of this Service.
            </p>
          </div>
          <br />
          <div className="service">
            <h1>Service Providers</h1>
            <p>
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <br />
            <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used. </li>
            </ul>
            <p>
              We want to inform users of this Service that these third parties
              have access to their Personal Information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose
            </p>
          </div>
          <br />
          <div className="security">
            <h1>Security</h1>
            <p>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>
          </div>
          <br />
          <div className="link">
            <h1>Links to Other Sites</h1>
            <p>
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party
              sites or services.
            </p>
          </div>
          <br />
          <div className="childrens">
            <h1>Childrens Privacy</h1>
            <p>
              These Services do not address anyone under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13 years of age. In the case we discover that a
              child under 13 has provided us with personal information, we
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact us so that we will be able to
              do the necessary actions.
            </p>
          </div>
          <br />
          <div className="changes">
            <h1>Changes to This Privacy Policy</h1>
            <br />
            <p>
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <br />
            <p>This policy is effective as of 2023-01-16</p>
            <br />
            <h3>Contact Us</h3>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at support@yesdefo.com.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Privacy;
