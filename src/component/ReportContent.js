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
    content: "",
    furtherDetails2: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input changed:", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Form state after input change:", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);

    // Add your form submission logic here

    // For simplicity, let's just console log a success message
    console.log("Form submitted successfully!");
  };

  const validateForm = () => {
    const errors = {};
    switch (currentStep) {
      case 1:
        if (!formData.firstName.trim()) {
          errors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
          errors.lastName = "Last name is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
          errors.email = "Email is required";
        } else if (!emailRegex.test(formData.email.trim())) {
          errors.email = "Invalid email address";
        }
        break;
      case 2:
        if (!formData.option1.trim()) {
          errors.option1 = "Any Option is required";
        }
        if (!formData.option2.trim()) {
          errors.option2 = "Any Option  is required";
        }
        if (!formData.input2.trim()) {
          errors.input2 = "  provide the URL of the content";
        }
        if (!formData.furtherDetails2.trim()) {
          errors.furtherDetails2 = " furtherDetails2 are required";
        }
        break;
      default:
        break;
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (validateForm()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full h-full">
        <div className="w-5/6 md:w-4/6 lg:w-3/6 h-full my-10 mx-auto">
          <div className="w-full h-full">
            <form onSubmit={handleSubmit}>
              {/* ... existing code ... */}
              {/* First section */}
              {currentStep === 1 && (
                <section>
                  <div>
                    <h1 className="font-bold text-5xl w-6/6 text-center font-bubblegum mx-auto my-5">
                      How to make a legal claim relating to content on Defo
                    </h1>
                    <h1 className="my-5 text-2xl font-medium text-center mx-auto w-full">
                      To notify Defo of an infringement or other legal claim
                      relating to content on the Defo app ,please complete the
                      form below.
                    </h1>
                  </div>
                  <div className="w-full h-full flex flex-col gap-y-1">
                    <label htmlFor="firstName" className="text-xl ">
                      First Name<span className="text-red-600 mx-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-2 border-black rounded-md w-full h-9 my-1 pl-3 form-input"
                    />
                    {errors.firstName && (
                      <div className="text-red-600 text-sm">
                        {errors.firstName}
                      </div>
                    )}

                    <label htmlFor="lastName" className="text-xl ">
                      Last Name<span className="text-red-600 mx-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-2 border-black rounded-md w-full h-9 my-1 pl-3 form-input"
                    />
                    {errors.lastName && (
                      <div className="text-red-600 text-sm">
                        {errors.lastName}
                      </div>
                    )}

                    <label className="text-xl ">Company Name</label>
                    <input
                      type="text"
                      name="username"
                      className="border-2 border-black rounded-md w-full h-9 my-1 pl-3"
                    />
                    <label className="text-xl ">Phone Number</label>
                    <input
                      type="text"
                      name="username"
                      className="border-2 border-black rounded-md w-full h-9 my-1 pl-3"
                    />
                    <label htmlFor="email" className="text-xl ">
                      Email<span className="text-red-600 mx-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 border-black rounded-md w-full h-9 my-1 pl-3"
                    />
                    {errors.email && (
                      <div className="text-red-600 text-sm">{errors.email}</div>
                    )}

                    <label className="text-xl ">Any further details</label>
                    <textarea
                      type="text"
                      name="username"
                      className="border-2 border-black rounded-md w-full h-20 my-1 pl-3"
                    />
                  </div>
                </section>
              )}
              {/* second section */}
              {currentStep === 2 && (
                <section>
                  <div>
                    <h1 className="font-bold text-4xl w-5/6 text-center   mx-auto my-5">
                      How to make a legal claim relating to content on Defo
                    </h1>
                    <h1 className="my-5 text-2xl font-medium text-center mx-auto w-full">
                      To notify Defo of an infringement or other legal claim
                      relating to content on the Defo app ,please complete the
                      form below.
                    </h1>
                  </div>
                  <div className="w-full h-full flex flex-col gap-y-1">
                    <label htmlFor="option1" className="text-xl">
                      Claim type<span className="text-red-600 mx-1">*</span>
                    </label>
                    <select
                      id="option1"
                      name="option1"
                      value={formData.option1}
                      onChange={handleInputChange}
                      className="border-2 border-black rounded-md font-medium w-full h-9 my-1 form-select"
                    >
                      <option className="font-medium">Select</option>
                      <option className="font-medium">Copyright</option>
                      <option className="font-medium">Trademark</option>
                      <option className="font-medium">
                        Personal image/identity
                      </option>
                      <option className="font-medium">Other legal claim</option>
                    </select>
                    {errors.option1 && (
                      <div className="text-red-600 text-sm">
                        {errors.option1}
                      </div>
                    )}

                    <label htmlFor="option2" className="text-xl">
                      Please select the content type you’d like to report
                      <span className="text-red-600 mx-1">*</span>
                    </label>
                    <select
                      className="border-2 border-black rounded-md font-medium w-full h-9 my-1 form-select"
                      id="option2"
                      name="option2"
                      value={formData.option2}
                      onChange={handleInputChange}
                    >
                      <option className="font-medium">Select</option>
                      <option className="font-medium">Music/Audio</option>
                      <option className="font-medium">Image</option>
                      <option className="font-medium">Video</option>
                      <option className="font-medium">
                        Title & description
                      </option>
                    </select>
                    {errors.option2 && (
                      <div className="text-red-600 text-sm">
                        {errors.option2}
                      </div>
                    )}

                    <label htmlFor="input2" className="text-xl ">
                      Please provide the URL of the content you’d like to report
                      <span className="text-red-600 mx-1">*</span>
                    </label>
                    <textarea
                      type="text"
                      id="input2"
                      name="input2"
                      value={formData.input2}
                      onChange={handleInputChange}
                      className="border-2 border-black rounded-md w-full h-20 my-1 pl-3 form-input"
                    />
                    {errors.input2 && (
                      <div className="text-red-600 text-sm">
                        {errors.input2}
                      </div>
                    )}
                    <label className="text-xl ">
                      Why are you reporting the content ?
                    </label>
                    <textarea
                      type="text"
                      className="border-2 border-black rounded-md w-full h-20 my-1 pl-3"
                    />

                    <label className="text-xl ">
                      Any further details
                      <span className="text-red-600 mx-1">*</span>
                    </label>
                    <textarea
                      type="text"
                      id="furtherDetails2"
                      name="furtherDetails2"
                      value={formData.furtherDetails2}
                      onChange={handleInputChange}
                      className="border-2 border-black rounded-md w-full h-20 my-2 pl-3"
                    />
                    {errors.furtherDetails2 && (
                      <div className="text-red-600 text-sm">
                        {errors.furtherDetails2}
                      </div>
                    )}
                  </div>
                </section>
              )}
              {/* final submission */}
              {currentStep === 3 && (
                <section>
                  <video src={tick} autoPlay className="w-2/6 mx-auto" />
                  <div className="bg-green-500 w-fit p-4 rounded-xl mx-auto">
                    <h6 className=" text-white font-bold text-2xl">
                      Submitted Successfully
                    </h6>
                  </div>
                </section>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-4">
                {currentStep === 2 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="border-2 border-black text-xl font-medium w-20 h-9 rounded-xl"
                  >
                    Back
                  </button>
                )}

                {currentStep === 1 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="border-2 bg-blue-950 text-xl font-medium text-white w-32 h-10 rounded-xl ml-auto "
                  >
                    Next
                  </button>
                )}
                {currentStep === 2 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="border-2 bg-green-600 text-xl font-medium text-white w-32 h-10 rounded-xl ml-auto "
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportContent;
