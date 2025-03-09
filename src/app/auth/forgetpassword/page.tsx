"use client";
import { Grid, InputAdornment, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import React, { useCallback } from "react";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { forgetPass } from "../auth";
import { useRouter } from "next/navigation";
import { email } from "../../../constants/validation";

interface FormForget{
  email: string;
}
export default function ForgetpasswordPage() {

   const router = useRouter();
   // validation
     const validationSchema = Yup.object({
       email
     });
  // inital values
  const initialValues: FormForget = {
    email: "",
  };
  // submittion
    const handelForget = useCallback(
      async (
        values: FormForget,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
      ) => {
        setSubmitting(true);
        const response = await forgetPass(values);
  
        if (response.success) {
          
          toast.success(response.message);
          setTimeout(() => {
            router.push("/auth/resetpassword");
          }, 2000);
        } else {
          toast.error(response.message);
        }
      },
      [router]
    );
  return (
     
      <Box sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 2
      }} >
       <ToastContainer />
      <Grid sx={{width: "100%", maxWidth: "500px" ,mx: "auto", pl: 3}}>
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
          Forget Password!!
        </Typography>
      </Grid>

      <Formik initialValues={initialValues} onSubmit={handelForget} validationSchema={validationSchema} >
          {({
            handleSubmit,
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            isValid,
            dirty,
          })=>(
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
                  mt:3,
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
                  
                  <button type="submit" disabled={!(isValid && dirty)} className="w-full mt-5 bg-primary p-3 text-white rounded-md">
                    Send
                  </button>  
            </div>
          </Box>
          )}
      
      </Formik>
    </Box>
  );
}

