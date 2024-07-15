import { useEffect, useState } from "react"
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Props {
    current: number,
    setCurrent: React.Dispatch<React.SetStateAction<any>>
    setAnswer: React.Dispatch<React.SetStateAction<any>>
}

const Content1 = ({ current, setCurrent, setAnswer }: Props) => {

    let [edit, setEdit] = useState<string | any>('')

    useEffect(() => {

        window.scrollTo(0, 0)

        const currentStorage = localStorage.getItem("current")
        if (currentStorage) {
            setCurrent(Number(currentStorage))

            const ans1Storage = localStorage.getItem("ans1")
            setEdit(ans1Storage)

        } else {
            setCurrent(1)
        }
    }, [])

    return (
        <div className="h-[100vh]">
            <div>
                <p className="font-[regular] text-[18px] mb-[10px] mt-[10px]">1. ช้างที่อยู่ในรูปอยู่ที่ไหนและกำลังถืออะไรอยู่ ?</p>
                <div className="w-full h-[400px] bg-black rounded-[8px]">
                    <Image className="w-full h-full object-cover object-top rounded-[8px]" alt={'img'} width={1000} height={1000} src={'/img-question/1.png'}></Image>
                </div>
                <input autoFocus value={edit} onChange={(e) => {
                    setEdit(e.target.value)
                    localStorage.setItem("ans1", e.target.value)
                }} className="w-full h-[40px] mt-[20px] indent-4 font-[medium] border-[1px] border-black outline-none rounded-[8px]" placeholder="ถืออะไร"></input>
            </div>

            {/* <p className="font-[light]">คำตอบของฉัน : {where}</p> */}
        </div>
    )
}


export default Content1