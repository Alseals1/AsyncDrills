//Timing Out
let myMessage = 'Hello !'

let gretting = (message) => {
    console.log(message)
}
gretting(myMessage)

gretting(
        setTimeout(() => {
            console.log(`${myMessage} Alandis`)
        }, 2000)
    )
    // Callbacks and Recursion
let getWords = () => {
    setTimeout(() => {
        console.log('Correct')
    }, 3000)
    setTimeout(() => {
        console.log('this')
    }, 2000)
    setTimeout(() => {
        console.log('Is')
    }, 1000)
}
getWords()



// Callbacks and Recursion
let countdown = (num, callback) => {
    setTimeout(() => {
        if (num > 0) {
            console.log(num)
            countdown(num - 1, callback)
        } else {
            callback()
        }
    }, 1000)
}
const isDone = () => (
    console.log('This Is Done !')
)
countdown(5, isDone)

//Promises Promises ;)
let lunchTime = false;

let orderSomeFood = () => {
    return new Promise((res, rej) => {
        if (lunchTime) {
            let order = {
                lunch: 'burger',
                drink: 'water'
            }
            res(order);
        } else {
            let err = new Error('It not Lunch yet !')
            rej(err)
        }
    })

}

orderSomeFood()
    .then(res => console.log(res))
    .catch(rej => console.log(rej))