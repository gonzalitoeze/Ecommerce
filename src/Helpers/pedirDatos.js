import { stock } from '../Data/Data'

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
    },1000)
       
    })
}