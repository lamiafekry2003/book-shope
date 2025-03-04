"use client";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import Link from "next/link";
import React, { useCallback } from "react";
import * as Yup from "yup";
import { loginAuth } from "../auth";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/authSlice";
interface FormLogin {
  email: string;
  password: string;
}
export default function Loginpage() {
  // for redux to store the user and token
  const dispatch = useDispatch();

  const router = useRouter();
  // validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/\d/, "Must contain at least one number"),
  });
  // inital values
  const initialValues: FormLogin = {
    email: "",
    password: "",
  };
  // submittion
  const handelLogin = useCallback(
    async (
      values: FormLogin,
      { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
      setSubmitting(true);
      const response = await loginAuth(values);

      if (response.success && response.token) {
        dispatch(login({ user: response.first_name, token: response.token }));
        console.log(response.first_name);
        console.log(response.token);
        toast.success("Login successful!");
        setTimeout(() => {
          router.push("/auth/register");
        }, 2000);
      } else {
        toast.error(response.message);
      }
    },
    [router, dispatch]
  );
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}

    >
      <ToastContainer />
      <Grid sx={{width: "100%", maxWidth: "500px",mx: "auto", pl: 3}}>
        <Typography
          component="p"
          sx={{ color: "#090937", opacity: 0.6, borderRadius: 600 }}
          variant="subtitle1"
        >
          Welcome back!
        </Typography>

        <Typography
          component="h3"
          sx={{ color: "#090937", fontWeight: 600 }}
          variant="h4"
        >
          Login to your account
        </Typography>
      </Grid>

      <Formik
        initialValues={initialValues}
        onSubmit={handelLogin}
        validationSchema={validationSchema}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          isValid,
          dirty,
        }) => (
          <Box
            component="form"
            noValidate
            autoComplete="off"
            width="100%"
            className=" mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col max-w-sm  md:max-w-md mx-auto">
              <TextField
                label="Email"
                name="email"
                placeholder="John@gmail.com"
                variant="outlined"
                className="my-8"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.email) && touched.email}
                helperText={touched.email && errors.email}
                sx={{
                  mt: 3,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#6251DD",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6251DD",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "&:hover .MuiInputLabel-root": {
                    color: "#6251DD",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#6251DD",
                  },
                }}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fas fa-user"></i>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Password"
                type="password"
                name="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.password) && touched.password}
                helperText={touched.password && errors.password}
                sx={{
                  mt: 3,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#6251DD",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6251DD",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "&:hover .MuiInputLabel-root": {
                    color: "#6251DD",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#6251DD",
                  },
                }}
                placeholder="********"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fas fa-lock"></i>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="flex justify-between items-center">
                <FormControlLabel
                  control={<Checkbox />}
                  sx={{ color: "#6251DD" }}
                  label="Remember Me"
                />
                <Link href={"./forgetpassword"} className="text-third">
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={!(isValid && dirty)}
                className="w-full mt-5 bg-primary p-3 text-white rounded-md"
              >
                Login
              </button>
              <Link
                href={"./register"}
                className="w-full text-center mt-5  p-3 text-third border border-1  border-third rounded-md"
              >
                Register
              </Link>
            </div>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
