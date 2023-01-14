import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function SignUpModal() {
  const { modalState, toggleModals } = useContext(UserContext);

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
                  <form className="sign-up-form">
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Email address
                      </label>
                      <input
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
                        className="form-control"
                        type="password"
                        name="password"
                        id="confirmPwd"
                        required
                      />
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
