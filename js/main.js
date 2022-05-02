console.log('Hello Parcel!')

//async 함수선언 그 안에 변수 선언 후 await
// async function test() {
//   const promise = Promise.resolve(123)
//   console.log(await promise)
// }
// test()

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()

// babel에서는 async await 문법을 제공하고 있지 않기때문에 Uncaught ReferenceError: regeneratorRuntime is not defined