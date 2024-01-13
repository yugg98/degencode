import React from 'react'

const Services = () => {
  const features = [
    {
      name:"Game Development",
      icon:'/icons/g.svg'
    },
    {
      name:"Web3.0 Advisory",
      icon:'/icons/draw/block.svg'
    },
    {
      name:"Metaverse Development",
      icon:'/icons/draw/distribution.svg'
    },{
      name:"NFT Creation",
      icon:'/icons/draw/ledger.svg'
    },
    {
      name:"Whitepaper Assistance",
      icon:'/icons/draw/ledger-2.svg'
    },
    {
      name:"Game Development",
      icon:'/icons/draw/network.svg'
    },{
      name:"Staking Platform",
      icon:'/icons/draw/proof-of-work.svg'
    },{
      name:"Token Development",
      icon:'/icons/draw/node.svg'
    },{
      name:"NFT Marketplace",
      icon:'/icons/draw/search.svg'
    },
    {
      name:"Exchange Development (CEX, DEX)",
      icon:'/icons/draw/transfer.svg'
    },
    {
      name:"Smart Contract development",
      icon:'/icons/draw/transaction-2.svg'
    },
  
    {
      name:"Crypto Wallet Development",
      icon:'/icons/draw/wallet.svg'
    },
    {
      name:"Smart Contract Audits",
      icon:'/icons/smart.svg'
    },
    {
      name:" Launchpad Development",
      icon:'/icons/g1.svg'
    },
    {
      name:"DeFi",
      icon:'/icons/cry.png'
    },
    {
      name:"Tokenomics",
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
      name:"DeFi",
      icon:'/icons/cry.png'
    },
    {
      name:"Tokenomics",
      icon:'/icons/draw/block-reward.svg'
    },
    {
      name:"Smart Contract development",
      icon:'/icons/draw/transaction-2.svg'
    },
    {
      name:"Metaverse Development",
      icon:'/icons/draw/distribution.svg'
    },{
      name:"NFT Creation",
      icon:'/icons/draw/ledger.svg'
    },
    {
      name:"Smart Contract Audits",
      icon:'/icons/smart.svg'
    },
    {
      name:"Staking Platform",
      icon:'/icons/draw/proof-of-work.svg'
    }
   
   
   
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