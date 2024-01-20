import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../graphql/query";
import { useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const [loginUser] = useMutation(LOGIN_MUTATION);
  const dispatch = useDispatch();
  const register = () => {
    navigate("/register");
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        console.log("values is", values);
        let data = {
         
        };
        console.log('input is',data)
        let info = await loginUser({
            variables: {
                username: "user@gmail.com",
                password: "password"
            },
          });
        let token=info.data.login.token
        dispatch({ type: "SET_AUTH", payload: token});

        console.log("value of data is", info.data.login.token);

        // let info = await registerUser({
        //   variables: data,
        // });
        // dispatch({ type: "SET_USER", payload: info.data.register });
        // //const user = useSelector((state) => state.user);
        // login();
      } catch (err) {
        console.log("err irs", err);
      }
    },
  });
  return (
    <>
      <section
        className="gradient-form section"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="gql.png"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">Login with Graph Ql</h4>
                      </div>

                      <form onSubmit={formik.handleSubmit}>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {formik.touched.email && formik.errors.email && (
                            <div class="error">
                              <span>{formik.errors.email}</span>
                            </div>
                          )}{" "}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                          />
                          {formik.touched.password &&
                            formik.errors.password && (
                              <div class="error">
                                <span>{formik.errors.password}</span>
                              </div>
                            )}{" "}
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 loginButton"
                            type="submit"
                          >
                            Log in
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="loginbtn"
                            onClick={register}
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2 cardRight">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">
                        It is the Example of MERN App using GraphQl
                      </h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
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
