import axios from "axios"
import { error } from "console"

const REALURL: string ="http://localhost:3030/api/v1/task"
const DONEURL = "http://localhost:3030.ljhuuh/api/v1/done"
const bbbbb = "http://localhost:3030.ljhuuh/api/v1/bbbbb"

export const createTask = async (data:any) =>{
    try {
        await axios.post(REALURL, data).then((res:any)=>{
            console.log(res.data)
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }

}

export const readTask = async()=>{
    try {
       return await axios.get(REALURL).then((res: any)=>{
        console.log(res.data.data)
       }) 
    } catch (error) {
        
    }console.log(error)
}

const updateTask = async(id: string)=>{
try {
    return await axios.patch(`${REALURL}/${id}`, { completed:true}).then((res:any)=>{
        return res.data.data
    })
} catch (error) {
    console.log(error)
}
}

export const deleteTask = async(id: string)=>{
try {
    return await axios.delete(`${REALURL}/${id}`,).then((res:any)=>{
        return res.data.data
    })
} catch (error) {
    console.log(error)
}
}

// DonePart

export const doneCreateTask = async(data: any)=>{
    try {
        await axios.post(DONEURL).then((res)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const doneReadTask = async()=>{
    try {
       await axios.get(DONEURL).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const doneUpdateTask = async(id: string)=>{
    try {
     return await axios.patch(`${DONEURL}/${id}`, {completed:false}).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const doneDEleteTask = async(id: string)=>{
    try {
        await axios.delete(`${DONEURL}/${id}`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}