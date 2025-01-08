let list = ''
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


