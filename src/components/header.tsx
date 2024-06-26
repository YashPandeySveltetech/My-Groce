import Image from 'next/image'
import React from 'react'
import ChatMessager from '@/components/chatMessagerAi'

function Header() {
  
  return (
    <>
    <div className=' h-[10vh]  flex justify w-full z-10 py-[3rem] px-[15rem] '>
      	<Image
					alt=''
          className='w-[153px] h-[44px] '
					width={144}
					height={14}
					src={'/logo-2024-05-22-01-30-23-2490.webp'}
				/>
        <input className='border border-green-300  h-5 p-5' placeholder='Search Product'/>
        <input/>
    </div>
    {/* <ChatMessager/> */}
    </>
  )
}

export default Header