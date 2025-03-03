react installation
npx create-react-app my-portfolio
cd my-portfolio
npm start

vite installion 
npm create vite@latest my-portfolio --template react
cd my-portfolio
npm install


<!-- Installation dependencices-->

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion 


<!-- Configure Tailwind
create outside src a file named tailwind.config.js -->

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure this is correct
  theme: {
    extend: {},
  },
  plugins: [],
};

<!-- src/index.css -->

@tailwind base;
@tailwind components;
@tailwind utilities;
