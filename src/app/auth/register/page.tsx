"use client";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import React, { useCallback } from "react";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { registerAuth } from "../auth";
import { email, first_name, last_name, password, role} from "../../../constants/validation";

interface FormValues {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  role: string;
}
export default function RegisterPage() {
  const router = useRouter();
  // validation
  const validationSchema = Yup.object({
     first_name,
     last_name,
     email,
     password,
     role,
  })
  // initial values
  const initialValues: FormValues = {
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    role: "",
  };


  // dealing with the form submission
  
  const handleRegister = useCallback(
    async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
      setSubmitting(true);
      const response = await registerAuth(values);
  
      if (response.success) {
          toast.success("Registration successful!");
          setTimeout(()=>{
              router.push("/auth/login");
          },2000)
      } else {
          toast.error(response.message);
      }
      
      setSubmitting(false);
  },[router])
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        px:2
      }}
    >
      <ToastContainer />
      <Grid sx={{width: "100%", maxWidth: "500px" ,mx: "auto", pl: 3}}>
     
        <Typography
          component="p"
          sx={{ color: "#090937", opacity: 0.6, borderRadius: 600 }}
          variant="subtitle1"
        >
          Create new acccount
        </Typography>

        <Typography
          component="h3"
          sx={{ color: "#090937", fontWeight: 600 }}
          variant="h4"
        >
          Register Now
        </Typography>
      </Grid>

      <Formik
        initialValues={initialValues}
        onSubmit={handleRegister}
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
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{
              width: "100%",
            }}
          >
            <div className="flex flex-col max-w-sm  md:max-w-md  justify-center items-center mx-auto"> 
              <div className="flex justify-between gap-2">
                <TextField
                  label="First Name"
                  name="first_name"
                  placeholder="John"
                  variant="outlined"
                  className="my-8"
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
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.first_name) && touched.first_name}
                  helperText={touched.first_name && errors.first_name}
                />
                <TextField
                  label="Last Name"
                  name="last_name"
                  placeholder="Doe"
                  variant="outlined"
                  className="my-8"
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
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.last_name) && touched.last_name}
                  helperText={touched.last_name && errors.last_name}
                />
              </div>
              <TextField
                label="Email"
                name="email"
                type="email"
                placeholder="John@gmail.com"
                variant="outlined"
                className="my-8"
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
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.email) && touched.email}
                helperText={touched.email && errors.email}
              />

              <TextField
                label="Password"
                name="password"
                variant="outlined"
                type="password"
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
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.password) && touched.password}
                helperText={touched.password && errors.password}
              />
              <Box sx={{ width: "100%", mt: 3 }}>
                <FormControl
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "gray" },
                      "&:hover fieldset": { borderColor: "#6251DD" },
                      "&.Mui-focused fieldset": { borderColor: "#6251DD" },
                    },
                    "& .MuiInputLabel-root": { color: "gray" },
                    "&:hover .MuiInputLabel-root": { color: "#6251DD" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#6251DD" },
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="role"
                    defaultValue=""
                    label="Age"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(errors.role) && touched.role}
                  >
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"Customer"}>Customer</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <button
                disabled={!(isValid && dirty)}
                type="submit"
                className="w-full text-center mt-5 bg-primary p-3 text-white rounded-md"
              >
                Register
              </button>
              <Link
                href={"./login"}
                className="w-full mt-5 text-center  p-3 text-third border border-1  border-third rounded-md"
              >
                Login
              </Link>
            </div>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
