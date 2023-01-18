import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function LogInModal() {
  const { modalState, toggleModals, logIn } = useContext(UserContext);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();
  const inputs = useRef([]);
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

    try {
      await logIn(inputs.current[0].value, inputs.current[1].value);
      // formRef.current.reset();
      setValidation("");
      toggleModals("close");
      navigate("/private/private-home");
    } catch {
      setValidation("Oops, email or password invalid.");
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.logInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
            onClick={closeModal}
          ></div>

          <div
            className="bg-light position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content ps-3 pe-3">
                <div className="modal-header border-bottom">
                  <h5 className="modal-title mb-3 mt-3">Sign Up</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>

                <div className="modal-body mt-3">
                  <form
                    onSubmit={handleForm}
                    className="sign-up-form"
                    ref={formRef}
                  >
                    <div className="mb-3">
                      <label htmlFor="logInEmail" className="form-label">
                        Email address
                      </label>
                      <input
                        ref={addInputs}
                        className="form-control"
                        type="email"
                        name="email"
                        id="logInEmail"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="logInPwd" className="form-label">
                        Password
                      </label>
                      <input
                        ref={addInputs}
                        className="form-control"
                        type="password"
                        name="password"
                        id="logInPwd"
                        required
                      />
                    </div>

                    <p className="text-danger mt-1">{validation}</p>

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
