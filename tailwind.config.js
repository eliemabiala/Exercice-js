// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class", // Enable dark mode using a CSS class
    theme: { 
        fontFamily: {
            "myFont": ['Roboto', 'sans-serif', 'medium']
        },
        extend: {
            colors: {
                "myColor": {
                    "50": "#f7f8fb",
                    "100": "#f0f0f6",
                    "200": "#e1e1ed",
                    "300": "#d1d2e5",
                    "400": "#c2c3dc",
                    "500": "#b3b4d3",
                    "600": "#8f90a9",
                    "700": "#6b6c7f",
                    "800": "#484854",
                    "900": "#24242a"
                }
            }
        },
    },
    plugins: [],
}
