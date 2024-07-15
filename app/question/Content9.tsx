import { useEffect, useState } from "react"
import Image from 'next/image'

interface Props{
    setCurrent: React.Dispatch<React.SetStateAction<any>>
}

const Content9 = ({setCurrent}:Props) => {

    let [edit, setEdit] = useState<string | any>('')

    useEffect(() => {
        window.scrollTo(0, 0)
        const currentStorage = localStorage.getItem("current")
        if (currentStorage) {
            setCurrent(Number(currentStorage))

            const ans9Storage = localStorage.getItem("ans9")
            setEdit(ans9Storage)
        } else {
            setCurrent(1)
        }
    }, [])

    return (
        <div className="h-[100vh]">
            <div>
                <p className="font-[regular] text-[18px] mb-[10px] mt-[10px]">9. ใต้ตึกHB6 มีศูนย์ภาษาของภาษาอะไรบ้าง ?</p>
                <input autoFocus value={edit} onChange={(e) => {
                    setEdit(e.target.value)
                    localStorage.setItem("ans9", e.target.value)
                }} className="w-full h-[40px] mt-[20px] indent-4 font-[medium] border-[1px] border-black outline-none rounded-[8px]" placeholder="ภาษา"></input>
            </div>
        </div>
    )
}


export default Content9