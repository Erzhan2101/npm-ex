// const chalk = require('chalk');
// const axios = require('axios')
//
// console.log(chalk.blue('Hello world!'));


// const log = console.log;
// //
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
//
// axios('https://jsonplaceholder.typicode.com/users/2')
//     .then(res => console.log(res.data))
//     .catch(() => console.log(chalk.red("ошибка!")));


// const newContact = {
//     name: "Edil",
//     phone: "0888-888-999"
// }
//
// axios.post("https://611675b81c592d0017bb7f0f.mockapi.io/users", newContact)
// .then(res => console.log(res.data))

//изменит что-то
// const updata = {phone: "0708-800-859"}
// axios.put("https://611675b81c592d0017bb7f0f.mockapi.io/users/2", updata)
// .then(res => console.log(res.data))

// axios.delete("https://611675b81c592d0017bb7f0f.mockapi.io/users/1")
//     .then(res => console.log(res.data))
//     .catch(() => console.log("err"))


// const getPeople = async (id) => {
//     let isLoading = true
//     try {
//         const example = await axios(`https://swapi.dev/api/people/${id}`)
//         console.log('УСПЕХ')
//         console.log(example.data)
//     } catch (error) {
//         console.log('ОШИБКА!')
//     }finally {
//         isLoading = false
//         console.log(isLoading)
//     }
// }
// getPeople(3)



// ====================================================================
// const axios = require("axios")
//
// const getPeople = async (id) => {
//     let isLoding = true
//     const {data: person} = await axios(`https://swapi.dev/api/people/${id}`)
//
//     const allFilm = await Promise.all(person.films.map(async (link) => {
//         const {data:title} = await axios(link)
//         return title.title
//     }))
// console.log({...person, films: allFilm})
//
// }
// getPeople(1)


//===== Модульность ================================================================

const greetingLang = {
    en: "Hello!",
    ru: "Привет!",
    kg: "Салам",
    uk: "Привiт!"
}

const sayGreeting = (lang) => {
    return greetingLang[lang]
}

export {sayGreeting}
