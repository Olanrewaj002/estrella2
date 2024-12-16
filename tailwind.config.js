/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
      extend: {
        fontFamily: {
            body: ['roboto',],
            subbody:['nunito'],
        },
        backgroundImage: {
          'hero-pattern': "url('public/images/ai-image.jpeg')",
          'footer-texture': "url('/img/footer-texture.png')",
        },
      },
  },
  plugins: [],
};


