"use client"

import { useEffect, useState } from "react"
import { ListStudents } from "../question/methods/methods"

const Scoreboard=()=>{

    const [students, setStudents] = useState([])

    const init=async()=>{
        const result = await ListStudents()

        console.log(result)

        setStudents(result)
    }

    useEffect(()=>{
        init()
    }, [])

    return(
        <div className="p-[20px]">
            <p className="mb-[20px] font-[medium] text-[20px]">สรุปคะแนน (Summary Score)</p>
            {students && students.length > 0 ? students.map((item:any ,index:any)=>{
                return(
                    <div key={index} className="flex justify-between">
                        <p className="font-[light]">{item.username}</p>
                        <p className="font-[medium]">{item.score} คะแนน</p>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default Scoreboard