'use client'

import { useEffect, useState } from "react"
import Content1 from "./Content1"
import Content2 from "./Content2"
import Content3 from "./Content3"
import Content4 from "./Content4"
import Content5 from "./Content5"
import Content6 from "./Content6"
import Content7 from "./Content7"
import Content8 from "./Content8"
import Content9 from "./Content9"
import Content10 from "./Content10"
import { useRouter } from "next/navigation"
import {motion} from 'framer-motion'


const Question = () => {

    const navigate = useRouter()

    const [username, setUsername] = useState<string | null>('')
    const [school, setSchool] = useState<string | null>('')

    const [current, setCurrent] = useState<number>(1)

    const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [answer, setAnswer] = useState('')

    useEffect(() => {
        const usernameStorage = localStorage.getItem("username")
        const schoolStorage = localStorage.getItem("school")

        if(usernameStorage && schoolStorage){
        setUsername(usernameStorage)
        setSchool(schoolStorage)
        }else{
            navigate.push('/login')
        }
    }, [])

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="p-[20px]">
            <div className="flex justify-between">
                <p className="font-[light]">คำถาม (Question)</p>
                <div className="flex flex-col items-end">

                    <div className="flex flex-row items-end gap-[5px]">
                        <p className="font-[medium]">{username}</p>
                        <p className="font-[light]"> ({school})</p>
                    </div>
                    <p onClick={()=>{
                        localStorage.removeItem('username')
                        localStorage.removeItem('school')
                        localStorage.removeItem('current')
                        navigate.push("/login")
                    }} className="font-[medium] text-red-500">(เปลี่ยนชื่อใหม่)</p>
                </div>
            </div>

            {/* <Content/> */}

            {current == 1 ? <Content1 current={current} setAnswer={setAnswer} setCurrent={setCurrent} /> : current == 2 ? <Content2 setCurrent={setCurrent} /> : current == 3 ? <Content3 setCurrent={setCurrent} /> : current == 4 ? <Content4 setCurrent={setCurrent} /> : current == 5 ? <Content5 setCurrent={setCurrent} /> : current == 6 ? <Content6 setCurrent={setCurrent} /> : current == 7 ? <Content7 setAnswer={setAnswer} setCurrent={setCurrent} /> : current == 8 ? <Content8 setCurrent={setCurrent} /> : current == 9 ? <Content9 setCurrent={setCurrent} /> : current == 10 ? <Content10 setCurrent={setCurrent} /> : null}

            <div className="fixed bottom-20 w-[calc(100%-40px)] flex justify-between">
                <button className="font-[light]" onClick={() => {
                    if (current > 1) {
                        localStorage.setItem('current', (current - 1).toString())
                        setCurrent(current - 1)
                    }
                }}>ถอยกลับ</button>

                <button className="font-[light]" onClick={() => {
                    if (current < 10) {
                        localStorage.setItem('current', (current + 1).toString())
                        setCurrent(current + 1)
                    }
                }}>ถัดไป</button>
            </div>

            <div className="w-[calc(100%-40px)] fixed bottom-5 h-[40px] bg-white/40 shadow-xl grid-cols-10 grid rounded-full backdrop-blur-[2px]">
                {page && page.length > 0 ? page.map((item: any) => {
                    return (
                        <div onClick={() => {
                            setCurrent(item)
                            localStorage.setItem('current', item.toString())
                        }} className={`flex justify-center items-center ${item == current ? 'bg-black text-white rounded-[12px]' : ''}`}>
                            <p className="font-[medium]">{item}</p>
                        </div>
                    )
                }) : null}
            </div>
        </motion.div>
    )
}

export default Question