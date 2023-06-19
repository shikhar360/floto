import Image from 'next/image'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance , usePublicClient,useWalletClient } from "wagmi";
import { useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction  } from 'wagmi'
// import ethers from "ethers"
import {useEffect, useState} from "react"

export default function Home() {
  const [toCall , setTocall] = useState<string>('')
  const [call , setcall] = useState<number>()
  const abi = [
    {
      "inputs": [],
      "name": "numb",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "read",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_num",
          "type": "uint256"
        }
      ],
      "name": "setNum",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

   const contAddr = "0x3eF94f7053A0F2c4061EAdC5C966617D4a7fD2Ef"
  


    const { data :useContractReadData } = useContractRead({
    address: contAddr,
    abi: abi,
    functionName: toCall ,
    })
    
    useEffect(()=>{
      useContractReadData && setcall(parseInt(useContractReadData as string));
    },[call])

    // console.log( useContractReadData.toString());

    const {data : useContractWriteData , write } = useContractWrite({
      address: contAddr,
      abi: abi,
      functionName: 'setNum',
      args: [394798372],
  
     })
    const {data : useWaitForTransactionData, isSuccess} = useWaitForTransaction({
      hash: useContractWriteData?.hash
    })

    console.log(useWaitForTransactionData );
    console.log(useContractReadData);


  return (
    <div className=" w-full min-h-screen">
      <h1 className={`text-5xl`}>hello</h1>
      <ConnectButton/>
      <button onClick={()=>{setTocall("read") ; write?.()}}>click me to call</button>
      <div onClick={()=>setTocall("read")} >calling {call}</div>  
    </div>
  )
}
