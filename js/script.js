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
/**
 * functions that use boolean api to generate 10 random emails
 * and get them trough axios, then uses promises to wait to receive the emails
 * and inserts them in the HTML
 */
const promiseFunction = () => {
  let listP = []
  let listString = ''
  for (let i = 0; i < 10; i++) {
    listP.push(
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
          return response.data.response
        }),
    )
  }
  Promise.all(listP).then(results => {
    for (let i = 0; i < 10; i++) {
      listString += `<i class="list-group-item">${results[i]}</i>`
    }
    document.getElementById('list').innerHTML = listString
  })
}
document.getElementById('buttone').addEventListener('click',promiseFunction)
