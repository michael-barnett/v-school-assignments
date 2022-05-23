// function sum(x, y){
//     if (typeof x !== 'number' || typeof y !== 'number') {
//             throw new Error('User did not input an integer for an argument.')
//         }
//     return x + y;
// }

// try {
//     sum('1', '2')
// }
// catch(err) {
//     console.log(err)
// }

function login(username, password){
    if (username !== user.username || password !== user.password){
        throw new Error('Incorrect username or password')
    }
    else console.log('Login Successful!')
}
const user = {username: "sam", password: "123abc"}

try {
    login('sam', '123ac')
}

catch(err){
    console.log(err)
}