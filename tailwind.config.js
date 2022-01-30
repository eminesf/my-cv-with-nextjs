module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        "umber": "#5F5449",
        "rose": "#9B6A6C",
        "tuscany": "#B09398",
        "opal": "#CEDFD9",
        "azure": "#EBFCFB"
      })
    },
  },
  plugins: [],
}
