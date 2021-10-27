/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: "/js",
    public: "/",
  },
  plugins: ["@snowpack/plugin-typescript"],
};
