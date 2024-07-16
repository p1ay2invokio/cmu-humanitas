import { useEffect, useState } from "react"
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Props {
    current: number
    setCurrent: React.Dispatch<React.SetStateAction<any>>
}

const Content2 = ({ current, setCurrent }: Props) => {

    let [edit, setEdit] = useState<string | any>('')

    useEffect(() => {
        window.scrollTo(0, 0)
        const currentStorage = localStorage.getItem("current")
        if (currentStorage) {
            setCurrent(Number(currentStorage))

            const ans2Storage = localStorage.getItem("ans2")
            setEdit(ans2Storage)
        } else {
            setCurrent(1)
        }
    }, [])

    return (
        <div className="h-[100vh]">
            <div>
                <p className="font-[regular] text-[18px] mb-[10px] mt-[10px]">2. ไดโนเสาร์จอมฉกไข่ มีไข่ที่ยังไม่ได้ฟักกี่ฟอง ?</p>
                <input autoFocus value={edit} onChange={(e) => {
                    setEdit(e.target.value)
                    localStorage.setItem("ans2", e.target.value)
                }} className="w-full h-[40px] mt-[20px] indent-4 font-[medium] border-[1px] border-black outline-none rounded-[8px]" placeholder="กี่ฟอง"></input>
            </div>



            {edit ? <p className="font-[light] mt-[10px]">คำตอบของคุณ : {edit} ฟอง</p> : null}
            {/* <motion.div initial={{ opacity: 0 }} animate={edit ? { opacity: 1 } : { opacity: 0 }}>
                
                {edit ? <div onClick={() => {
                    localStorage.setItem('current', (current + 1).toString())
                    setCurrent(current + 1)
                }} className="w-[80px] h-[35px] bg-purple-400 flex justify-center items-center rounded-[12px]">
                    <p className="text-white font-[medium] text-[16px]">ต่อไป</p>
                </div> : null}
            </motion.div> */}
        </div>
    )
}


export default Content2