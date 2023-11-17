const random = (min = 1000, max = 3000) => {
  const numero = Math.random() * (max - min) + min
  return Math.floor(numero)
}
const f1 = (callback) => {
  setTimeout(() => {
    console.log('f1')
    if (callback) callback()
  }, random())
}
const f2 = (callback) => {
  setTimeout(() => {
    console.log('f2')
    if (callback) callback()
  }, random())
}
const f3 = (callback) => {
  setTimeout(() => {
    console.log('f3')
    if (callback) callback()
  }, random())
}
f1(() => {
  f2(() => {
    f3(() => {
      console.log('olá mundo!')
    })
  })
})
