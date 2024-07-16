'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import {motion} from 'framer-motion'

export default function Home() {

  const navigate = useRouter()

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <div className="w-full h-full bg-black/50 fixed left-0 top-0">

      </div>
      <Image className="w-full h-[100vh] object-cover" src={'/cover/humanitass.jpg'} width={1920} height={1080} alt="cover" />
      <motion.div animate={{top: ['50%', '45%', '50%']}} transition={{repeat: Infinity, duration: 4}} className="absolute left-[50%] top-[45%] translate-x-[-50%] flex justify-center flex-col items-center space-y-[-10px]">
        <motion.p animate={{rotate: ['-10deg', '10deg', '0deg']}} onClick={() => {
          navigate.push('/login')
        }} className="font-[medium] text-[40px] text-white hover:opacity-[0.5] cursor-pointer whitespace-nowrap">เริ่มตอบคำถาม</motion.p>
        <p className="font-[regular] text-[25px] text-white">ห้อง อ.กิตติ</p>
      </motion.div>
      {/* <button onClick={()=>{
        navigate.push('/login')
      }} className="absolute left-[50%] translate-x-[-50%] bottom-20 w-[200px] h-[50px] bg-purple-500 rounded-[18px] font-[medium] text-white text-[20px] focus:bg-purple-600 border-[2px] border-white">กดปุ่มเพื่อเริ่ม</button> */}
    </motion.div>
  );
}
