/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1312px',
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
            primary: '#574EFA',
            neutral: {
                700: '#DAE0E6',
            },
            success: {
                100: '#F0FAF0',
                700: '#2D8A39',
            },
        },
        extend: {},
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};
