/* let list = ''
for (let i = 0; i < 3; i++) {
  axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
      listElm = response.data.response
      console.log(listElm)

      list += ` <li> ${listElm} </li>`
      console.log(list)
      document.getElementById('list').innerHTML = list
    })
    
}
 */
///mcuh more complex code but modifyng the dom just once
let listP = []
let listString = ''
for (let i = 0; i < 3; i++) {
  listP.push(
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(response => {
        return response.data.response
      }),
  )
}
Promise.all(listP).then(results => {
  for (let i = 0; i < 3; i++) {
    listString += `<i>${results[i]}</i>`
  }
  document.getElementById("list").innerHTML=listString
})
