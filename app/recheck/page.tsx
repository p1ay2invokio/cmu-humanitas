'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { IoMdArrowRoundBack } from "react-icons/io";
import { SubmitAnswer } from "../question/methods/methods";
import Swal from "sweetalert2";

const Recheck = () => {

    const navigate = useRouter()

    // const all = [1,2,3,4,5,6,7,8,9,10]

    let [ans1, setAns1] = useState<any>('')
    let [ans2, setAns2] = useState<any>('')
    let [ans3, setAns3] = useState<any>('')
    let [ans4, setAns4] = useState<any>('')
    let [ans5, setAns5] = useState<any>('')
    let [ans6, setAns6] = useState<any>('')
    let [ans7, setAns7] = useState<any>('')
    let [ans8, setAns8] = useState<any>('')
    let [ans9, setAns9] = useState<any>('')
    let [ans10, setAns10] = useState<any>('')

    useEffect(() => {

        let userStorage = localStorage.getItem('username')
        let schoolStorage = localStorage.getItem("school")

        if (userStorage && schoolStorage) {
            setAns1(localStorage.getItem("ans1"))
            setAns2(localStorage.getItem("ans2"))
            setAns3(localStorage.getItem("ans3"))
            setAns4(localStorage.getItem("ans4"))
            setAns5(localStorage.getItem("ans5"))
            setAns6(localStorage.getItem("ans6"))
            setAns7(localStorage.getItem("ans7"))
            setAns8(localStorage.getItem("ans8"))
            setAns9(localStorage.getItem("ans9"))
            setAns10(localStorage.getItem("ans10"))
        } else {
            navigate.push("/")
        }

    }, [])

    const summary = () => {
        let count = 0
        if (ans1 == "ค้อน") {
            count = count + 1
        }

        if (ans2 == "3" || ans2 == 3) {
            count = count + 1
        }

        if (ans3 == "5,7" || ans3 == "7,5") {
            count = count + 1
        }

        if (ans4 == "HB5" || ans4 == "HB 5") {
            count = count + 1
        }

        if (ans5 == "ต้นโพธิ์" || ans5 == "ต้นโพ") {
            count = count + 1
        }

        if (ans6 == "7" || ans6 == 7) {
            count = count + 1
        }

        if (ans7 == "3" || ans7 == 3) {
            count = count + 1
        }

        if (ans8 == "AIS" || ans8 == "Ais") {
            count = count + 1
        }

        if (ans9 == 24 || ans9 == "24") {
            count = count + 1
        }

        if (ans10 == "20" || ans10 == 20) {
            count = count + 1
        }

        return count
    }

    return (
        <div>
            <IoMdArrowRoundBack onClick={() => {
                navigate.back()
            }} size={25} className="text-[20px] absolute left-2 top-3" />
            <div className="w-full flex justify-center items-center h-[50px]">
                <p className="font-[medium]">Recheck (ก่อนส่งคำตอบน้าา!)</p>
            </div>
            <div className="p-[20px] font-[light]">
                <p>1. ถือ{ans1}</p>
                <p>2. {ans2} ฟอง</p>
                <p>3. สาย {ans3}</p>
                <p>4. ตึก {ans4}</p>
                <p>5. {ans5}</p>
                <p>6. สูงสุด {ans6} ชั้น</p>
                <p>7. {ans7} อัน</p>
                <p>8. สนับสนุนโดย {ans8}</p>
                <p>9. {ans9} ตัว</p>
                <p>10. {ans10} ขั้น</p>
            </div>

            <div className="flex w-full justify-center items-center">
                <div onClick={async () => {
                    let username = localStorage.getItem("username")
                    let school = localStorage.getItem("school")
                    let score = summary()

                    const data = await SubmitAnswer(username, school, score)

                    if (data && data.server_close) {
                        Swal.fire({ icon: 'error', text: 'เซิฟเวอร์ปิดทำการในขณะนี้...' })
                    }

                    if (data && data.duplicate) {
                        Swal.fire({ icon: 'error', text: 'น้องส่งไปแล้วไม่สามารถส่งได้เเล้วน้าา' })
                        // Reset All Storage And Data
                        localStorage.removeItem('username')
                        localStorage.removeItem('school')
                        localStorage.removeItem('current')
                        for (let i = 1; i <= 10; i++) {
                            localStorage.removeItem(`ans${i}`)
                        }
                        navigate.push('/login')
                    } else {
                        if (data && data.inserted) {
                            Swal.fire({ icon: 'success', text: 'ส่งคำตอบสำเร็จแล้วรอลุ้นคะแนนที่หน้ากิจกรรมน้าา' })
                            for (let i = 1; i <= 10; i++) {
                                localStorage.removeItem(`ans${i}`)
                            }
                            localStorage.removeItem("username")
                            localStorage.removeItem("school")
                            localStorage.removeItem("current")
                            navigate.push("/finish")
                        }
                    }
                }} className="flex justify-center items-center w-[100px] h-[40px] bg-purple-400 rounded-[8px] cursor-pointer">
                    <p className="font-[medium] text-white">ส่งคำตอบ</p>
                </div>
            </div>
        </div>
    )
}

export default Recheck