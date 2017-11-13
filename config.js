module.exports = {
  port: process.env.PORT || 9000,
  files: ['./web/**/*.{html,htm,css,js, json, png, xml}'],
  server:{
      baseDir: "./web"
  }
};