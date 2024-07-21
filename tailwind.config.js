/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-1': '#E8EDF2',
                'secondary-text': '#4F7396',
                'btn-1': '#308CE8',
            },
            fontFamily: {
                beVietnamPro: ["Be Vietnam Pro", "sans-serif"],
            },
            fontSize: {
                xxs: '10px'
            }
        }
    },
    plugins: [],
  }
  
  