/** @type {import("prettier").Config} */
const config = {
  /* General Prettier Config */
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',

  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
