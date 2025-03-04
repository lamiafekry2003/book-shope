
// register
interface FormValues {
    first_name: string;
    last_name: string;
    password: string;
    email: string;
    role: string;
  }
export async function registerAuth(values:FormValues){
    try {
        const auth = await fetch('https://upskilling-egypt.com:3007/api/auth/register',{
            method:'Post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        
        const data = await auth.json();

        if (!auth.ok) {
            throw new Error(data.message || "Registration failed");
        }

        return { success: true, message: data.message };
    } catch (error) {
        return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
    }
 }
//  ----------------------------------------------------
// login

interface Formlogin {
    email: string;
    password: string;
  }
export async function loginAuth(values:Formlogin){
    try {
        const auth = await fetch('https://upskilling-egypt.com:3007/api/auth/login',{
            method:'Post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        
        const data = await auth.json();

        if (!auth.ok) {
            throw new Error(data.message || "Login failed");
        }
        return { success: true, message: data.message ,token: data?.data?.accessToken || null, first_name: data?.data?.profile?.first_name || null};
    } catch (error) {
        return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
    }
 }
//  -----------------------------------------------------------------------------------------------------
// forget password

interface FormForgetPassword {
    email: string;
  }
export async function forgetPass(values:FormForgetPassword){
    try {
        const auth = await fetch('https://upskilling-egypt.com:3007/api/auth/forgot-password',{
            method:'Post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        
        const data = await auth.json();
        console.log(data);
        if (!auth.ok) {
            throw new Error(data.message || "Email not found");
        }
        return { success: true, message: data.message};
    } catch (error) {
        return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
    }
 }
//  --------------------------------------------------------------------
// reset password
interface Restpass {
    email: string;
    password: string;
    otp: string;
  }
export async function restPass(values:Restpass){
    try {
        const auth = await fetch('https://upskilling-egypt.com:3007/api/auth/reset-password',{
            method:'Post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        
        const data = await auth.json();
        console.log(data);
        if (!auth.ok) {
            throw new Error(data.message || "OTP not correct");
        }
        return { success: true, message: data.message};
    } catch (error) {
        return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
    }
 }