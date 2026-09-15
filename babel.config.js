module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel", // <-- Move it here
    ],
    plugins: [
      // Remove 'nativewind/babel' from here if it was present
      "react-native-reanimated/plugin", // Keep other actual plugins here if needed
    ],
  };
};