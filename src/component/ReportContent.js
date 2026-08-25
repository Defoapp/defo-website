import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import tick from "../image/report_content/verified.mp4";

const ReportContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    furtherDetails: "",
    option1: "",
    option2: "",
    input2: "",
    contentReason: "",
    furtherDetails2: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Invalid email address";
      }
    } else if (currentStep === 2) {
      if (!formData.option1.trim()) {
        newErrors.option1 = "Claim type is required";
      }
      if (!formData.option2.trim()) {
        newErrors.option2 = "Content type is required";
      }
      if (!formData.input2.trim()) {
        newErrors.input2 = "Content URL is required";
      }
      if (!formData.furtherDetails2.trim()) {
        newErrors.furtherDetails2 = "Further details are required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateForm()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 2) {
      if (validateForm()) {
        setCurrentStep(3);
      }
    }
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="w-11/12 md:w-4/6 lg:w-3/6 my-8 md:my-12 mx-auto px-2">
          <form onSubmit={handleSubmit}>
            {/* First section */}
            {currentStep === 1 && (
              <section className="space-y-4">
                <div className="text-center mb-6">
                  <h1 className="font-bold text-3xl md:text-4xl font-bubblegum mx-auto my-3">
                    How to make a legal claim relating to content on Defo
                  </h1>
                  <p className="text-base md:text-xl font-medium text-gray-700 mx-auto">
                    To notify Defo of an infringement or other legal claim relating to content on the Defo app, please complete the form below.
                  </p>
                </div>
                <div className="w-full flex flex-col gap-y-3">
                  <div>
                    <label htmlFor="firstName" className="text-lg font-medium block mb-1">
                      First Name<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-2 border-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-black"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="text-lg font-medium block mb-1">
                      Last Name<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-2 border-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-black"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="companyName" className="text-lg font-medium block mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="border-2 border-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="text-lg font-medium block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="border-2 border-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-lg font-medium block mb-1">
                      Email<span className="text-red-600 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 border-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-black"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="furtherDetails" className="text-lg font-medium block mb-1">
                      Any further details
                    </label>
                    <textarea
                      id="furtherDetails"
                      name="furtherDetails"
                      value={formData.furtherDetails}
                      onChange={handleInputChange}
                      rows={3}
                      className="border-2 border-gray-400 rounded-lg w-full p-3 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </section>
            )}

            {/* Second section */}
            {currentStep === 2 && (
              <section className="space-y-4">
                <div className="text-center mb-6">
                  <h1 className="font-bold text-3xl md:text-4xl font-bubblegum mx-auto my-3">
                    Claim Details
                  </h1>
                  <p className="text-base md:text-lg font-medium text-gray-700">
                    Provide details about the content you wish to report.
                  </p>
                </div>
                <div className="w-full flex flex-col gap-y-3">
                  <div>
                    <label htmlFor="option1" className="text-lg font-medium block mb-1">
                      Claim type<span className="text-red-600 ml-1">*</span>
                    </label>
                    <select
                      id="option1"
                      name="option1"
                      value={formData.option1}
                      onChange={handleInputChange}
                      className="border-2 border-gray-400 rounded-lg font-medium w-full py-2 px-3 focus:outline-none focus:border-black bg-white"
                    >
                      <option value="">Select claim type</option>
                      <option value="Copyright">Copyright</option>
                      <option value="Trademark">Trademark</option>
                      <option value="Personal image/identity">Personal image/identity</option>
                      <option value="Other legal claim">Other legal claim</option>
                    </select>
                    {errors.option1 && (
                      <p className="text-red-600 text-sm mt-1">{errors.option1}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="option2" className="text-lg font-medium block mb-1">
                      Content type<span className="text-red-600 ml-1">*</span>
                    </label>
                    <select
                      id="option2"
                      name="option2"
                      value={formData.option2}
                      onChange={handleInputChange}
                      className="border-2 border-gray-400 rounded-lg font-medium w-full py-2 px-3 focus:outline-none focus:border-black bg-white"
                    >
                      <option value="">Select content type</option>
                      <option value="Music/Audio">Music/Audio</option>
                      <option value="Image">Image</option>
                      <option value="Video">Video</option>
                      <option value="Title & description">Title & description</option>
                    </select>
                    {errors.option2 && (
                      <p className="text-red-600 text-sm mt-1">{errors.option2}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="input2" className="text-lg font-medium block mb-1">
                      URL of the content<span className="text-red-600 ml-1">*</span>
                    </label>
                    <textarea
                      id="input2"
                      name="input2"
                      value={formData.input2}
                      onChange={handleInputChange}
                      rows={2}
                      placeholder="https://..."
                      className="border-2 border-gray-400 rounded-lg w-full p-3 focus:outline-none focus:border-black"
                    />
                    {errors.input2 && (
                      <p className="text-red-600 text-sm mt-1">{errors.input2}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contentReason" className="text-lg font-medium block mb-1">
                      Why are you reporting this content?
                    </label>
                    <textarea
                      id="contentReason"
                      name="contentReason"
                      value={formData.contentReason}
                      onChange={handleInputChange}
                      rows={2}
                      className="border-2 border-gray-400 rounded-lg w-full p-3 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="furtherDetails2" className="text-lg font-medium block mb-1">
                      Any further details<span className="text-red-600 ml-1">*</span>
                    </label>
                    <textarea
                      id="furtherDetails2"
                      name="furtherDetails2"
                      value={formData.furtherDetails2}
                      onChange={handleInputChange}
                      rows={3}
                      className="border-2 border-gray-400 rounded-lg w-full p-3 focus:outline-none focus:border-black"
                    />
                    {errors.furtherDetails2 && (
                      <p className="text-red-600 text-sm mt-1">{errors.furtherDetails2}</p>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Final submission */}
            {currentStep === 3 && (
              <section className="text-center py-12 space-y-6">
                <video src={tick} autoPlay muted className="w-32 md:w-44 mx-auto rounded-full" />
                <div className="bg-green-500 w-fit px-8 py-4 rounded-xl mx-auto shadow-lg">
                  <h2 className="text-white font-bold text-xl md:text-2xl">
                    Submitted Successfully
                  </h2>
                </div>
                <p className="text-gray-600 text-base md:text-lg">
                  Thank you for bringing this to our attention. Our team will review your report shortly.
                </p>
              </section>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              {currentStep === 2 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="border-2 border-black text-lg font-medium px-6 py-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Back
                </button>
              )}

              {currentStep === 1 && (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-950 hover:bg-blue-900 text-lg font-medium text-white px-8 py-2 rounded-xl ml-auto transition-colors"
                >
                  Next
                </button>
              )}

              {currentStep === 2 && (
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-lg font-medium text-white px-8 py-2 rounded-xl ml-auto transition-colors"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportContent;
