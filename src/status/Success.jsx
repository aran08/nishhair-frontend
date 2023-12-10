import React from 'react'

const Success = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-100'>
        <div className='w-1/4 border rounded-lg bg-white'>
            <div className='flex py-3 border-b-2'>
              <div className='w-14 flex justify-center items-center border-r-2'>
                <img src="/images/trial1.webp" alt="" className='w-8 h-5' />
              </div>
              <div className='pl-3'>
                  <p className='font-semibold text-sm'>Nish Hair</p>
                  <p className='text-xs'>Txn ID: rzqwdfgnjoihgtghhcsU348gb</p>
              </div>
            </div>
            <div className='h-[400px] flex-col flex justify-center items-center'>
              <img src="/images/success.png" alt="" className='w-40 h-40'/>
              <p className='text-[20px] text-green-400 font-bold'>Success</p>
            </div>
        </div>
    </div>
  )
}

export default Success