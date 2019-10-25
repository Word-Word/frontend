// export const gettest = () => {
//   fetch("https://randomuser.me/api/?results=10")
//     .then((response) => response.json())
//     .then((json) => console.log(`?`, json))
//     .catch((err) => console.log(err))
// }
// export const signUphihi = (userinfo) => {
//   console.log(
//     `이거머지
//   `,
//     userinfo,
//   )

//   fetch(`./post`, userinfo)
//     .then((res) => (res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err))
// }

export const test = (item) => {
  console.log(`여기는 auth api 받은 item을 찌거보까용 `, item)
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => {
      console.log(response)

      return response.json()
    })
    .then((json) => console.log(`?`, json))
    .catch((err) => console.log(err))
  return { auth: true }
}

export const login = (item) => {
  

}