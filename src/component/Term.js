import React, { useEffect } from "react";
import Footer from "../component/footer/Footer";
import term from "../image/illustrations/terms and condition.svg";
import Navbar from "../component/Navbar/Navbar";

const Term = () => {
  useEffect(() => {
    document.title = "Defo - Terms of use";
  }, []);

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="mx-auto pb-10 mt-8 md:mt-12 w-11/12 max-w-4xl px-4">
          <div className="w-full mb-8 flex items-center justify-center">
            <img src={term} alt="Terms and Conditions illustration" className="w-full max-w-md mx-auto" />
          </div>
          <h1 className="font-bold pt-2 text-2xl md:text-4xl text-gray-900 mb-4">Terms & Conditions</h1>
          <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              By downloading or using the app, these terms will automatically apply
              to you – you should make sure therefore that you read them carefully
              before using the app. You’re not allowed to copy or modify the app,
              any part of the app, or our trademarks in any way. You’re not allowed
              to attempt to extract the source code of the app, and you also
              shouldn’t try to translate the app into other languages or make
              derivative versions. The app itself, and all the trademarks,
              copyright, database rights, and other intellectual property rights
              related to it, still belong to LowPow.
            </p>
            <p>
              LowPow is committed to ensuring that the app is as useful and
              efficient as possible. For that reason, we reserve the right to make
              changes to the app or to charge for its services, at any time and for
              any reason. We will never charge you for the app or its services
              without making it very clear to you exactly what you’re paying for.
            </p>
            <p>
              The Defo app stores and processes personal data that you have provided
              to us, to provide our Service. It’s your responsibility to keep your
              phone and access to the app secure. We therefore recommend that you do
              not jailbreak or root your phone, which is the process of removing
              software restrictions and limitations imposed by the official
              operating system of your device.
            </p>
            <p className="font-semibold">
              Link to Terms and Conditions of third-party service providers used by
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

            <p>
              You should be aware that there are certain things that LowPow will not
              take responsibility for. Certain functions of the app will require the
              app to have an active internet connection. The connection can be Wi-Fi
              or provided by your mobile network provider.
            </p>
            <p>
              If you’re using the app outside of an area with Wi-Fi, you should
              remember that the terms of the agreement with your mobile network
              provider will still apply. As a result, you may be charged by your
              mobile provider for the cost of data for the duration of the
              connection while accessing the app, or other third-party charges.
            </p>
            <p>
              Along the same lines, LowPow cannot always take responsibility for the
              way you use the app. You need to make sure that your device stays
              charged – if it runs out of battery and you can’t turn it on to avail
              the Service, LowPow cannot accept responsibility.
            </p>
            <p>
              With respect to LowPow’s responsibility for your use of the app, when
              you’re using the app, it’s important to bear in mind that although we
              endeavor to ensure that it is updated and correct at all times, we do
              rely on third parties to provide information to us so that we can make
              it available to you.
            </p>

            <h2 className="font-bold pt-6 text-xl md:text-3xl text-gray-900">
              Changes to Terms and Conditions
            </h2>
            <p>
              We may update our Terms and Conditions from time to time. Thus, you
              are advised to review this page periodically for any changes.
            </p>
            <p className="font-medium text-gray-900 pt-2">
              These terms and conditions are effective as of 2023-01-16
            </p>

            <h2 className="font-bold pt-6 text-xl md:text-2xl text-gray-900">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Terms and
              Conditions, do not hesitate to contact us at{" "}
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
};

export default Term;
