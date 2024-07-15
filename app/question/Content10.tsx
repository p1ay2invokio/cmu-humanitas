import { useEffect, useState } from "react"
import Image from 'next/image'
import { useRouter } from "next/navigation"
import {motion} from 'framer-motion'
import { SubmitAnswer } from "./methods/methods"

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<any>>
}

const Content10 = ({ setCurrent }: Props) => {

    const navigate = useRouter()

    let [edit, setEdit] = useState<string | any>('')

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
        window.scrollTo(0, 0)
        const currentStorage = localStorage.getItem("current")
        if (currentStorage) {
            setCurrent(Number(currentStorage))

            const ans10Storage = localStorage.getItem("ans10")
            setEdit(ans10Storage)

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
            setCurrent(1)
        }
    }, [])

    return (
        <div className="h-[100vh]">
            <div>
                <p className="font-[regular] text-[18px] mb-[10px] mt-[10px]">10. อาคารเรือนเดิมตั้งอยู่ที่ไหน ?</p>
                <input autoFocus value={edit} onChange={(e) => {
                    setEdit(e.target.value)
                    localStorage.setItem("ans10", e.target.value)
                }} className="w-full h-[40px] mt-[20px] indent-4 font-[medium] border-[1px] border-black outline-none rounded-[8px]" placeholder="หน้า"></input>
            </div>

            <motion.div initial={{opacity: 0}} animate={ans1 && ans2 && ans3 && ans4 && ans5 && ans6 && ans7 && ans8 && ans9 && ans10 || edit ? {opacity: 1} : {opacity: 0}} className="bg-purple-400 w-[100px] h-[40px] fixed bottom-[120px] rounded-full right-5 flex justify-center items-center font-[medium] text-white">
                <p onClick={() => {
                    navigate.push('/recheck')
                }}>ตรวจคำตอบ</p>
            </motion.div>
        </div>
    )
}


export default Content10