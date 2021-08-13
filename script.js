const chalk = require('chalk');
const axios = require('axios')
//
// console.log(chalk.blue('Hello world!'));


// const log = console.log;
// //
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
//
// axios('https://jsonplaceholder.typicode.com/users/2')
//     .then(res => console.log(res.data))
//     .catch(() => console.log(chalk.red("ошибка!")));


const newContact = {
    name: "Edil",
    phone: "0888-888-999"
}
//
// axios.post("https://611675b81c592d0017bb7f0f.mockapi.io/users", newContact)
// .then(res => console.log(res.data))

//изменит что-то
// const updata = {phone: "0708-800-859"}
// axios.put("https://611675b81c592d0017bb7f0f.mockapi.io/users/2", updata)
// .then(res => console.log(res.data))

axios.delete("https://611675b81c592d0017bb7f0f.mockapi.io/users/1")
    .then(res => console.log(res.data))
    .catch(() => console.log("err"))
