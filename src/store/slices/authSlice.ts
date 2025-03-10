// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface User {
//   first_name: string;
//   last_name: string;
//   role: string;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
// }

// const initialState: AuthState = {
//   user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "null") : null,
//   token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action: PayloadAction<{ token: string; user: User }>) => {
//       state.token = action.payload.token;
//       state.user = action.payload.user;
//       localStorage.setItem("token", action.payload.token);
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//     },
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
// .......................

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {jwtDecode} from "jwt-decode";

// interface User {
//   first_name: string;
//   last_name: string;
//   role: string;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
// }

// const initialState: AuthState = {
//   user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "null") : null,
//   token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action: PayloadAction<{ user: { first_name: string; last_name: string; role: string }; token: string }>) => {
//       state.token = action.payload.token;
//       try {
//         // Decode the JWT to extract user info
//         interface DecodedToken {
//           first_name: string;
//           last_name: string;
//           role: string;
//         }
//         const decoded: DecodedToken = jwtDecode<DecodedToken>(action.payload.token);
//         state.user = {
//           first_name: decoded.first_name,
//           last_name: decoded.last_name,
//           role: decoded.role,
//         };

//         // Store in localStorage
//         localStorage.setItem("token", action.payload.token);
//         localStorage.setItem("user", JSON.stringify(state.user));
//       } catch (error) {
//         console.error("Invalid token:", error);
//       }
//     },
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { jwtDecode } from "jwt-decode";

// interface User {
//   first_name: string;
//   last_name: string;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
// }

// // ✅ Function to load initial state from localStorage (Client-Side Only)
// const getInitialAuthState = (): AuthState => {
//   if (typeof window === "undefined") {
//     return { user: null, token: null }; // ✅ Prevent SSR issues
//   }

//   const storedUser = localStorage.getItem("user");
//   const storedToken = localStorage.getItem("token");

//   if (storedUser && storedToken) {
//     return { user: JSON.parse(storedUser), token: storedToken };
//   }

//   return { user: null, token: null };
// };

// const initialState: AuthState = getInitialAuthState();

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action: PayloadAction<{ user: { first_name: string; last_name: string; role: string }; token: string }>) => {
//       state.token = action.payload.token;
//       state.user = action.payload.user;
//       try {
//         // ✅ Decode token to get user details
//         const decoded = jwtDecode<{ first_name: string; last_name: string }>(action.payload.token);
//         state.user = {
//           first_name: decoded.first_name,
//           last_name: decoded.last_name,
//         };

        
//         localStorage.setItem("token", action.payload.token);
//         localStorage.setItem("user", JSON.stringify(state.user));
//       } catch (error) {
//         console.error("Invalid token:", error);
//         state.user = null;
//         state.token = null;
//       }
//     },
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  first_name: string;
  last_name: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
