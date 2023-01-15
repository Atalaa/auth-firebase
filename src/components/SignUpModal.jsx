import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function SignUpModal() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);
  const inputs = useRef([]);
  const [validation, setValidation] = useState("");
  const formRef = useRef();

  const addInputs = (el) => {
    /*trick: this function allows me to add all elements I want in that array, instead of addin multiple inputs variables.
    If el exists but he's not in my array, then I add it in it */

    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 characters minimum");
      return;
    }

    if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match");
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      console.log(cred);
    } catch (err) {}
  };

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
            onClick={() => toggleModals("close")}
          ></div>

          <div
            className="bg-light position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content ps-3 pe-3">
                <div className="modal-header border-bottom">
                  <h5 className="modal-title mb-3 mt-3">Sign Up</h5>
                  <button
                    className="btn-close"
                    onClick={() => toggleModals("close")}
                  ></button>
                </div>

                <div className="modal-body mt-3">
                  <form
                    onSubmit={handleForm}
                    className="sign-up-form"
                    ref={formRef}
                  >
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Email address
                      </label>
                      <input
                        ref={addInputs}
                        className="form-control"
                        type="email"
                        name="email"
                        id="signUpEmail"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpEmailPwd" className="form-label">
                        Password
                      </label>
                      <input
                        ref={addInputs}
                        className="form-control"
                        type="password"
                        name="password"
                        id="signUpEmailPwd"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="confirmPwd" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        ref={addInputs}
                        className="form-control"
                        type="password"
                        name="password"
                        id="confirmPwd"
                        required
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
