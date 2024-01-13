import React from 'react'

const Services = () => {
  const features = [
    {
      name:"Game Development",
      icon:'/icons/g.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/block.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/distribution.svg'
    },{
      name:"Game Development",
      icon:'/icons/draw/ledger.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/ledger-2.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/network.svg'
    },{
      name:"Game Development",
      icon:'/icons/draw/proof-of-work.svg'
    },{
      name:"Game Development",
      icon:'/icons/draw/node.svg'
    },{
      name:"Game Development",
      icon:'/icons/draw/search.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/transfer.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/transaction-2.svg'
    },
  
    {
      name:"Game Development",
      icon:'/icons/draw/wallet.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/smart.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/g1.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/cry.png'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/block-reward.svg'
    },
  ]
  return (
    <div className='grid md:grid-cols-4 px-4 grid-cols-2 gap-10 max-w-5xl mx-auto '>
      {features.map((item,index)=>(
        <div key={index}>
            <img src={item.icon} className='w-8 h-8' alt="" srcset="" />
            <p className='md:text-xl text-lg mt-2 text-white font-silkscreen'>{item.name}</p>
          </div>
      ))}
    </div>
  )
}

export const OtherSerices = () => {
  const features = [
    {
      name:"Game Development",
      icon:'/icons/g.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/block.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/distribution.svg'
    },{
      name:"Game Development",
      icon:'/icons/draw/ledger.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/ledger-2.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/network.svg'
    },{
      name:"Game Development",
      icon:'/icons/draw/proof-of-work.svg'
    },{
      name:"Game Development",
      icon:'/icons/draw/node.svg'
    },{
      name:"Game Development",
      icon:'/icons/draw/search.svg'
    },
   
  ]
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-10 max-w-5xl mx-auto '>
      {features.map((item,index)=>(
         <div key={index}>
         <img src={item.icon} className='w-8 h-8' alt="" srcset="" />
         <p className='md:text-xl text-lg mt-2 text-white font-silkscreen'>{item.name}</p>
       </div>
      ))}
    </div>
  )
}


export default Services