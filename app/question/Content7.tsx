import { useEffect, useState } from "react"
import Image from 'next/image'

interface Props{
    setCurrent: React.Dispatch<React.SetStateAction<any>>
    setAnswer: React.Dispatch<React.SetStateAction<any>>
}

const Content7 = ({setCurrent, setAnswer}:Props) => {

    let [edit, setEdit] = useState<string | any>('')

    useEffect(() => {
        window.scrollTo(0, 0)
        const currentStorage = localStorage.getItem("current")
        if (currentStorage) {
            setCurrent(Number(currentStorage))

            const ans7Storage = localStorage.getItem("ans7")
            setEdit(ans7Storage)
        } else {
            setCurrent(1)
        }
    }, [])

    return (
        <div className="h-[100vh]">
            <div>
                <p className="font-[regular] text-[18px] mb-[10px] mt-[10px]">7. กังหันน้ำของคณะมนุษย์ศาสตร์มีกี่อัน ?</p>
                <input autoFocus value={edit} onChange={(e) => {
                    setEdit(e.target.value)
                    localStorage.setItem("ans7", e.target.value)
                }} className="w-full h-[40px] mt-[20px] indent-4 font-[medium] border-[1px] border-black outline-none rounded-[8px]" placeholder="อัน"></input>
            </div>
        </div>
    )
}


export default Content7