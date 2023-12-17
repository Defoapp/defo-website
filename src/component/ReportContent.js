import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";

const Max_Steps = 2;



const ReportContent = () => {
  const [formStep, setFormStep] = React.useState(0);
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };
  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="border-2 bg-blue-950 text-xl font-medium text-white w-32 h-10 rounded-xl ml-auto "
        >
          Finish
        </button>
      );
    } else {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="border-2 bg-blue-950 text-xl font-medium text-white w-32 h-10 rounded-xl ml-auto "
        >
          Next Step
        </button>
      );
    }
  };

  const goToPreviousStep = () => {
    setFormStep(cur => cur - 1)
  }




  return (
    <div>
      <Navbar />
      <div className="w-full h-full">
        <div className="w-5/6 md:w-4/6 lg:w-3/6 h-full my-10 mx-auto">
          <div>
            <h1 className="font-bold text-4xl w-5/6 text-center mx-auto my-5">
              How to make a legal claim relating to content on Defo
            </h1>
            <h1 className="my-5 text-2xl font-medium text-center mx-auto w-full">
              To notify Defo of an infringement or other legal claim relating to
              content on the Defo app ,please complete the form below.
            </h1>
          </div>
          <div className="w-full h-full">
            <form >
              {formStep < Max_Steps && (
                <div>
                  <p>
                    Step {formStep + 1} of {Max_Steps}
                  </p>
                </div>
              )}
              {/* First section */}
              {formStep === 0 && (
                <section>
                  <div className="w-full h-full flex flex-col gap-y-1">
                    <label className="text-xl ">
                      First Name<span className="text-red-600 mx-1">*</span>
                    </label>
                    <input 
                      type="text"
                      name="username"
                      className="border-2 border-black rounded-md w-full h-9 my-1 pl-3" 
                    />
                    <label className="text-xl ">
                      Last Name<span className="text-red-600 mx-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="border-2 border-black rounded-md w-full h-9 my-1 pl-3"
                    />
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
                    <label className="text-xl ">
                      Email<span className="text-red-600 mx-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="border-2 border-black rounded-md w-full h-9 my-1 pl-3"
                    />
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
              {formStep === 1 && (
                <section>
                  <div className="w-full h-full flex flex-col gap-y-1">
                    <label className="text-xl">
                      Claim type<span className="text-red-600 mx-1">*</span>
                    </label>
                    <select className="border-2 border-black rounded-md font-medium w-full h-9 my-1 ">
                      <option className="font-medium">Copyright</option>
                      <option className="font-medium">Trademark</option>
                      <option className="font-medium">
                        Personal image/identity
                      </option>
                      <option className="font-medium">Other legal claim</option>
                    </select>
                    <label className="text-xl">
                      Please select the content type you’d like to report
                      <span className="text-red-600 mx-1">*</span>
                    </label>
                    <select className="border-2 border-black rounded-md font-medium w-full h-9 my-1">
                      <option className="font-medium">Music/Audio</option>
                      <option className="font-medium">Image</option>
                      <option className="font-medium">Video</option>
                      <option className="font-medium">
                        Title & description
                      </option>
                    </select>
                    <label className="text-xl ">
                      Please provide the URL of the content you’d like to report
                      <span className="text-red-600 mx-1">*</span>
                    </label>
                    <textarea
                      type="text"
                      name="username"
                      className="border-2 border-black rounded-md w-full h-20 my-1 pl-3"
                    />
                    <label className="text-xl ">
                      Why are you reporting the content ?
                      <span className="text-red-600 mx-1">*</span>
                    </label>
                    <textarea
                      type="text"
                      name="username"
                      className="border-2 border-black rounded-md w-full h-20 my-1 pl-3"
                    />
                    <label className="text-xl ">Any further details</label>
                    <textarea
                      type="text"
                      name="username"
                      className="border-2 border-black rounded-md w-full h-20 my-2 pl-3"
                    />
                  </div>
                </section>
              )}
              {formStep === 2 && (
                <section>
                  <div className="bg-green-500 w-fit p-4 rounded-xl mx-auto">
                    <h6 className=" text-white font-bold text-2xl">
                      Submitted Successfully
                    </h6>
                  </div>
                </section>
              )}

              {/*  next & back buttons  */}
              <div className="flex my-5">
                {formStep > 0 && (
                <button onClick={goToPreviousStep} type="button" className="border-2 border-black text-xl font-medium w-20 h-9 rounded-xl">
                  Back
                </button>
                )}
                {renderButton()}
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
