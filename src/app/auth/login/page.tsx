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
import { email, password } from "../../../constants/validation";
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
    email,
    password,
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
      const response: { success: boolean; message: string; token?: string; first_name?: string; last_name?: string; role?: string } = await loginAuth(values);

      if (response.success && response.token) {
        const userData = {
          first_name: response.first_name || "",
          last_name: response.last_name || "",
          role: response.role || "",
        };

        dispatch(login({ user: userData, token: response.token }));

        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(userData));

        toast.success(response.message);
        setTimeout(() => {
          router.push("/dashboard/home");
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
      <Grid sx={{ width: "100%", maxWidth: "500px", mx: "auto", pl: 3 }}>
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
