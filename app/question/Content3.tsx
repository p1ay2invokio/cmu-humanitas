import { useEffect, useState } from "react"
import Image from 'next/image'

interface Props{
    setCurrent: React.Dispatch<React.SetStateAction<any>>
}

const Content3 = ({setCurrent}:Props) => {

    let [edit, setEdit] = useState<string | any>('')

    useEffect(() => {
        window.scrollTo(0, 0)
        const currentStorage = localStorage.getItem("current")
        if (currentStorage) {
            setCurrent(Number(currentStorage))

            const ans3Storage = localStorage.getItem("ans3")
            setEdit(ans3Storage)
        } else {
            setCurrent(1)
        }
    }, [])

    return (
        <div className="h-[100vh]">
            <div>
                <p className="font-[regular] text-[18px] mb-[10px] mt-[10px]">3. ป้ายรถเมล์ที่รับส่งหน้าอาคาร HB7 มีสายอะไรบ้าง ?</p>

                <p className="font-[light] text-[16px] mt-[10px] text-red-500">*ตอบเป็น ตัวเลข และใช้ , เพื่อเว้นวรรคเช่น 1,2</p>
                <input autoFocus value={edit} onChange={(e) => {
                    setEdit(e.target.value)
                    localStorage.setItem("ans3", e.target.value)
                }} className="w-full h-[40px] indent-4 font-[medium] border-[1px] border-black outline-none rounded-[8px]" placeholder="สาย"></input>
            </div>

            {edit ? <p className="font-[light] mt-[10px]">คำตอบของคุณ : สาย {edit}</p> : null}
        </div>
    )
}


export default Content3