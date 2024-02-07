import { client } from "./client";


export function petLoader(){
    const result = client.fetch('*[_type == "pet"]')
    return result
}

export function sasuageLoader(){
    const result = client.fetch('*[_type == "sausage"]')
    return result
}