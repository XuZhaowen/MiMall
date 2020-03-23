module.exports = {
  "presets": [
    '@vue/cli-plugin-babel/preset'
  ],
  "presets": [
    [
      // "es2015",
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
