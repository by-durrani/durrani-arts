module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["!src/**", "!templates/**"],
  overrides: [
    {
      files: ["src/**/*.{js,jsx,ts,tsx}", "templates/**/*.{js,jsx,ts,tsx}"],
      rules: {},
    },
  ],
};
