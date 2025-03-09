// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#EF6B4A",
//         secondaryText: "#090937",
//         third: "#6251DD",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF6B4A",
        secondaryText: "#090937",
        third: "#6251DD",
        headtext:'#ED553B',
        nexttext:'#393280'
      },
    },
  },
  plugins: [],
} satisfies Config;
