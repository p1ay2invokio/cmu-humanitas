"use client"

import { useEffect, useState } from "react"
import { ListStudents } from "../question/methods/methods"

const Scoreboard=()=>{

    const [students, setStudents] = useState([])

    const init=async()=>{
        const result = await ListStudents()

        setStudents(result)
    }

    useEffect(()=>{
        init()
    }, [])

    return(
        <div className="p-[20px]">
            <p className="mb-[30px] font-[medium]">Scoreboard</p>
            {students && students.length > 0 ? students.map((item:any)=>{
                return(
                    <div className="flex justify-between">
                        <p className="font-[medium]">{item.username}</p>
                        <p className="font-[medium]">{item.score} คะแนน</p>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default Scoreboard