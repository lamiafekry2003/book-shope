// import { API_AUTH } from "../../constants/api";

// // register
// interface FormValues {
//     first_name: string;
//     last_name: string;
//     password: string;
//     email: string;
//     role: string;
//   }
// export async function registerAuth(values:FormValues){
//     try {
//         const auth = await fetch(API_AUTH.register,{
//             method:'Post',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values)
//         })
        
//         const data = await auth.json();

//         if (!auth.ok) {
//             throw new Error(data.message || "Registration failed");
//         }

//         return { success: true, message: data.message };
//     } catch (error) {
//         return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
//     }
//  }
// //  ----------------------------------------------------
// // login

// interface Formlogin {
//     email: string;
//     password: string;
//   }
// export async function loginAuth(values:Formlogin){
//     try {
//         const auth = await fetch(API_AUTH.login,{
//             method:'Post',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values)
//         })
        
//         const data = await auth.json();

//         if (!auth.ok) {
//             throw new Error(data.message || "Login failed");
//         }
//         return { success: true, message: data.message ,token: data?.data?.accessToken || null, first_name: data?.data?.profile?.first_name || null};
//     } catch (error) {
//         return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
//     }
//  }
// //  -----------------------------------------------------------------------------------------------------
// // forget password

// interface FormForgetPassword {
//     email: string;
//   }
// export async function forgetPass(values:FormForgetPassword){
//     try {
//         const auth = await fetch(API_AUTH.forgetPassword,{
//             method:'Post',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values)
//         })
        
//         const data = await auth.json();
//         console.log(data);
//         if (!auth.ok) {
//             throw new Error(data.message || "Email not found");
//         }
//         return { success: true, message: data.message};
//     } catch (error) {
//         return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
//     }
//  }
// //  --------------------------------------------------------------------
// // reset password
// interface Restpass {
//     email: string;
//     password: string;
//     otp: string;
//   }
// export async function restPass(values:Restpass){
//     try {
//         const auth = await fetch(API_AUTH.resetPassword,{
//             method:'Post',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values)
//         })
        
//         const data = await auth.json();
//         console.log(data);
//         if (!auth.ok) {
//             throw new Error(data.message || "OTP not correct");
//         }
//         return { success: true, message: data.message};
//     } catch (error) {
//         return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
//     }
//  }
import { API_AUTH } from "@/constants/api";
import { apiRequest } from "../../constants/authapiRequest";

interface FormValues {
    first_name: string;
    last_name: string;
    password: string;
    email: string;
    role: string;
}

export async function registerAuth(values: FormValues) {
    return apiRequest(API_AUTH.register, "POST", values);
}
// --------------------------------------------------------
interface FormLogin {
    email: string;
    password: string;
}

export async function loginAuth(values: FormLogin) {
    const response = await apiRequest(API_AUTH.login, "POST", values);
    if (response.success) {
        return {
            ...response,
            token: response.data?.accessToken || null,
            first_name: response.data?.profile?.first_name || null,
            last_name: response.data?.profile?.last_name || null,
            role: response.data?.profile?.role || null, // Ensure role is included
            data: response.data
        };
    }
    return response;
}
// ---------------------------------------------------------------
//     const response = await apiRequest(API_AUTH.login, "POST", values);
//     console.log("Backend Response:", response); // ✅ Debugging
    
//     if (response.success) {
//         return { 
//             ...response, 
//             token: response.data?.accessToken || null, 
//             first_name: response.data?.profile?.first_name || null,
//             last_name: response.data?.profile?.last_name || null,
//             data: response.data 
//         };
//     }
//     return response;
// }
// export async function loginAuth(values: FormLogin) {
//     const response = await apiRequest(API_AUTH.login, "POST", values);
//     console.log("Backend Response:", response); // ✅ Check if first_name and last_name exist

//     if (response.success) {
//         console.log("User Data:", response.data?.profile); // ✅ Debugging
//         return { 
//             ...response, 
//             token: response.data?.accessToken || null, 
//             first_name: response.data?.profile?.first_name || null, 
//             last_name: response.data?.profile?.last_name || null, 
//             data: response.data
//         };
//     }
//     return response;
// }


// ---------------------------------------------------------------
interface FormForgetPassword {
    email: string;
}

export async function forgetPass(values: FormForgetPassword) {
    return apiRequest(API_AUTH.forgetPassword, "POST", values);
}
// ---------------------------------------------------------------
interface ResetPass {
    email: string;
    password: string;
    otp: string;
}

export async function restPass(values: ResetPass) {
    return apiRequest(API_AUTH.resetPassword, "POST", values);
}
// ----------------------------------------------------------------
