module.exports = {
  plugins: [
    require("tailwindcss")(),
    process.env.NODE_ENV === "production"
      ? require("@fullhuman/postcss-purgecss")({
          content: ["./src/**/*.{js,jsx,ts,tsx}"],
          defaultExtractor: content => content.match(/[w-/:]+(?<!:)/g) || []
        })
      : undefined,
    require("autoprefixer")()
  ]
};
