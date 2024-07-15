import { useEffect, useState } from "react"
import Image from 'next/image'

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<any>>
}

const Content2 = ({ setCurrent }: Props) => {

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
                <p className="font-[regular] text-[18px] mb-[10px] mt-[10px]">2. ไดโนเสาร์จอมฉกไข่ มีไข่ที่ยังไม่ได้ฝักกี่ฟอง ?</p>
                <input autoFocus value={edit} onChange={(e) => {
                    setEdit(e.target.value)
                    localStorage.setItem("ans2", e.target.value)
                }} className="w-full h-[40px] mt-[20px] indent-4 font-[medium] border-[1px] border-black outline-none rounded-[8px]" placeholder="กี่ฟอง"></input>
            </div>
        </div>
    )
}


export default Content2