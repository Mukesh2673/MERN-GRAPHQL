import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../graphql/query";
import { useDispatch } from "react-redux";

export default function Register() {
  const [registerUser] = useMutation(REGISTER);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = () => {
    navigate("/");
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm Password is required"),
    bio: Yup.string().required("Bio  is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      bio: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        let data = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          password: values.password,
          bio: values.bio,
        };

        let info = await registerUser({
          variables: data,
        });
        dispatch({ type: "SET_USER", payload: info.data.register });
        //const user = useSelector((state) => state.user);
        login();
      } catch (err) {
        console.log("err irs", err);
      }
    },
  });

  return (
    <>
      <section
        class="gradient-form section"
        style={{ backgroundColor: "#eee" }}
      >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="text-center mt-4">
                    <img src="gql.png" style={{ width: "185px" }} alt="logo" />
                    <h4 class="mt-1 mb-5 pb-1">Register</h4>
                  </div>
                </div>
                <div class="row g-0">
                  <div class="col-lg-12">
                    <div class="card-body p-md-12 mx-md-4 ">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row g-0">
                          <div className="col-md-6">
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                class="form-control"
                                id="firstName"
                                placeholder="First Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                              />
                              {formik.touched.firstName &&
                                formik.errors.firstName && (
                                  <div class="error">
                                    <span>{formik.errors.firstName}</span>
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div
                              class="form-outline mb-4 ms-3"
                              controlId="lastName"
                            >
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Last Name"
                                id="lastName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                              />
                              {formik.touched.lastName &&
                                formik.errors.lastName && (
                                  <div class="error">
                                    <span>{formik.errors.lastName}</span>
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                        <div className="row g-0">
                          <div className="col-md-6">
                            <div class="form-outline mb-4">
                              <input
                                type="email"
                                class="form-control"
                                placeholder="Email"
                                id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                              />
                              {formik.touched.email && formik.errors.email && (
                                <div class="error">
                                  <span>{formik.errors.email}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-outline mb-4 ms-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Phone"
                                id="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                              />
                              {formik.touched.phone && formik.errors.phone && (
                                <div class="error">
                                  <span>{formik.errors.phone}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row g-0">
                          <div className="col-md-6">
                            <div class="form-outline mb-4">
                              <input
                                type="password"
                                id="password"
                                class="form-control"
                                placeholder="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                              />
                              {formik.touched.password &&
                                formik.errors.password && (
                                  <div class="error">
                                    <span>{formik.errors.password}</span>
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-outline mb-4 ms-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Confirm Password"
                                id="confirmPassword"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                              />
                              {formik.touched.confirmPassword &&
                                formik.errors.confirmPassword && (
                                  <div class="error">
                                    <span>{formik.errors.confirmPassword}</span>
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                        <div className="row g-0">
                          <div className="col-md-12">
                            <div class="mb-3">
                              <textarea
                                class="text-area"
                                id="bio"
                                rows="3"
                                placeholder="Bio"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.bio}
                              ></textarea>
                              {formik.touched.bio && formik.errors.bio && (
                                <div class="error">
                                  <span>{formik.errors.bio}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 loginButton"
                            type="submit"
                          >
                            Register
                          </button>
                          <a class="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Already have an account?</p>
                          <button
                            type="button"
                            class="loginbtn"
                            onClick={login}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
