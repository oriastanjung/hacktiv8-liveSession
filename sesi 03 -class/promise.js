// function yang telah direncanakan pada waktu tertentu, tapi berdasarkan antrian memory
// jika diterima maka .then()  resolve
// jika reject maka .catch()    reject

// const axios = require('axios')
// import axios from "axios"
const buttonPromise = document.getElementById("promise")
const buttonAsync = document.getElementById("async")
const dataSet = document.getElementById("data")
const fetchUser = () => {
    fetch('https://randomuser.me/api/?results=10').then((res => {
        return res.json()
    })).then((data) =>{
        dataSet.innerHTML = JSON.stringify(data.results.title)
        console.log(data);
        return data
    }).catch((error) => {
        console.log(error)
    })
}

buttonPromise.addEventListener('click', fetchUser)

// const users  = fetchUser()

// async await

// const getUsers = async () => {
//     try {
//         const data = await axios.get("https://randomuser.me/api/?results=5")
//         console.log(data.data.results);
//         dataSet.innerHTML=  data
//     } catch (error) {
//         console.log(error)
//     }
// }


const getUsers = async() => {
    try {
        const res = await fetch('https://randomuser.me/api/?results=1');
        const data =  await res.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

buttonAsync.addEventListener('click', getUsers)
// // getUsers()


const orderFood = (food, money) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(money >= 5000){
                resolve('here is your order ' + food)
            }else{
                reject("not enough money")
            }
        }, 2000)
    })
}

// dengan promise biasa
orderFood("Burger" , 15000).then((responResolve) => {
    console.log(responResolve)
}).catch((err) => {
    console.log(err);
})

// orderFood
console.log("\n\n");
// dengan async await
const pesanMakanan = async () => {
    try {
        const data = await orderFood("Makanan", 200)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

pesanMakanan()