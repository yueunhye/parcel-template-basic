// ESM 에크마스크립트는 자바스크립트의 표준명칭에서 사용하는 모듈
// export
// export-from
// import
// Module Type



// CommonJS node.js환경에서는 import,export을 사용하지 않음
// module.exports 내보내기
// exports
// require

// import autoprefixer from 'autoprefixer' 와 같음
// const autoprefixer = require('autoprefixer') //require()함수

// export { 와 같음
//   plugins: [
//     autoprefixer
//   ]
// }

// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

//변수선언을 하지 않고 직접대입
module.exports = {
  plugins: [require('autoprefixer')]
}