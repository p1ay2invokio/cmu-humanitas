import axios from "axios"
import {URI} from '@/config'

export const SubmitAnswer=(username: string | null, school: string | null, score: number):Promise<{duplicate: boolean, inserted: boolean}>=>{
    return new Promise((resolve)=>{
        axios.post(`${URI}/api/submit`,{
            username: username,
            school: school,
            score: score
        }).then((res)=>{
            resolve(res.data)  
        })
    })
}


export const ListStudents=():Promise<[]>=>{
    return new Promise((resolve)=>{
        axios.get(`${URI}/api/list-students`).then((res)=>{
            resolve(res.data)
        })
    })
}