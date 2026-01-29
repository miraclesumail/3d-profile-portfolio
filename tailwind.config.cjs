/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2024-10-29 17:21:28
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2026-01-29 17:32:12
 * @FilePath: /project_3D_developer_portfolio-main/tailwind.config.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "react-icon": "url('/src/assets/tech/reactjs.png')",
        
      },
    },
  },
  plugins: [],
};
