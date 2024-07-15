'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const Login = () => {

    const navigate = useRouter()

    const [username, setUsername] = useState<string>('')
    const [school, setSchool] = useState<string>('')

    useEffect(() => {
        const usernameStorage = localStorage.getItem('username')
        const schoolStorage = localStorage.getItem('school')

        if (usernameStorage && schoolStorage) {
            navigate.push("/question")
        }
    }, [])

    return (
        <div className="p-[100px] flex flex-col justify-center items-center">
            <div>
                <p className="font-[medium] text-[18px] mb-[5px]">ชื่อเล่น</p>
                <input onChange={(e) => {
                    setUsername(e.target.value)
                }} placeholder="เช่น ลาบูบู้" className="w-[200px] h-[40px] border-[1px] rounded-[8px] indent-[8px] font-[light]"></input>
            </div>
            <div className="mt-[20px] text-[18px]">
                <p className="font-[medium] mb-[5px]">โรงเรียน</p>
                <input onChange={(e) => {
                    setSchool(e.target.value)
                }} placeholder="เช่น สาธิต" className="w-[200px] h-[40px] border-[1px] rounded-[8px] indent-[8px] font-[light]"></input>
            </div>
            <button onClick={() => {
                if (username && school) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "เริ่มต้นการเดินทาง!",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    setTimeout(() => {
                        navigate.push('/question')
                        localStorage.setItem('username', username)
                        localStorage.setItem('school', school)
                    }, 1000)
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "อุ้ย!",
                        text: "กรอกข้อมูลให้ครบถ้วนก่อนน้าา",
                        footer: 'มีปัญหาปรึกษาพี่ staff ได้เลย',
                    });
                }
            }} className="w-[200px] h-[40px] mt-[20px] bg-purple-400 rounded-[8px] text-white font-[medium] text-[20px]">ยืนยัน</button>
        </div>
    )
}

export default Login