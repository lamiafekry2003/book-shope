
import * as Yup from "yup";

export const first_name = Yup.string()
         .required("First Name is required")
         .min(3, "First Name must be at least 3 characters");

  export const last_name =Yup.string()
           .required("Last Name is required")
           .min(3, "Last Name must be at least 3 characters")

export const email = Yup.string()
         .email("Invalid email address")
         .required("Email is required");

export const password = Yup.string()
         .required("Password is required")
         .matches(/[A-Z]/, "Must contain at least one uppercase letter")
         .matches(/[a-z]/, "Must contain at least one lowercase letter")
         .matches(/\d/, "Must contain at least one number");
export const  role = Yup.string().required("Role is required");
export const otp = Yup.string().required("OTP is required");
