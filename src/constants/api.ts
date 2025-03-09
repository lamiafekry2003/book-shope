const BASE_URL = `https://upskilling-egypt.com:3007`;

const BASE_AUTH =`${BASE_URL}/api/auth`;

export const API_AUTH = {
    login: `${BASE_AUTH}/login`,
    register: `${BASE_AUTH}/register`,
    forgetPassword: `${BASE_AUTH}/forgot-password`,
    resetPassword: `${BASE_AUTH}/reset-password`,
}