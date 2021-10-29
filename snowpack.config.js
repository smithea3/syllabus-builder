/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: "/js",
    public: "/",
  },
  plugins: [
    [
      "@snowpack/plugin-build-script",
      {
        input: [".njk"],
        output: [".js"],
        cmd: 'TEMPFILE=$FILE && npx nunjucks-precompile $TEMPFILE --name="$(basename $TEMPFILE)"',
      },
    ],
    "@snowpack/plugin-typescript",
  ],
};
