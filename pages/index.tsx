import Image from 'next/image'
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useAccount, useBalance , usePublicClient,useWalletClient } from "wagmi";
// import { useContractRead,
//   useContractWrite,
//   usePrepareContractWrite,
//   useWaitForTransaction  } from 'wagmi'
// // import ethers from "ethers"
import {useEffect, useState} from "react"
// import readContract from '@/utils/read';
import { contAddr , abi } from '@/constant';
import { getContract, getPublicClient, getWalletClient  } from '@wagmi/core';
// import { createPublicClient, http } from 'viem';
// import { mainnet } from 'viem/chains';
// import { publicClient } from './_app';


// import {getContract} from "viem"
import { publicclient , walletclient } from './_app';




export default function Home() {
  const [toCall , setTocall] = useState<string>('')
  const [call , setcall] = useState<number>()
  
  // function calling (){
  //   const val = readContract("read");

  // }



//  let walletClient;

//   useEffect(()=>{

//     async function getclients(){

//       walletClient =  await getWalletClient()
//     }
//     getclients()
//   },[])

  // const publicClient =  getPublicClient()
  // const { address, isConnected } = useAccount();

  // const provider = getProvider()

  const contract = getContract({
    address: contAddr,
    abi: abi,
    // walletclient
  });

  // async function getval (){
  // const val = await contract?.write.setNum({
  //   account : "0x26f52740670Ef678b254aa3559d823C29122E9c2",
  //   args : [97494837]
  // })
  //  console.log(val);
  // }
  async function getval1 (){
  const val = await contract?.read.read()
   console.log(val);
  }
    // useEffect(()=>{
    //   useContractReadData && setcall(parseInt(useContractReadData as string));
    // },[call])

    // console.log( useContractReadData.toString());

    // const {data : useContractWriteData , write } = useContractWrite({
    //   address: contAddr,
    //   abi: abi,
    //   functionName: 'setNum',
    //   args: [394798372],
  
    //  })
    // const {data : useWaitForTransactionData, isSuccess} = useWaitForTransaction({
    //   hash: useContractWriteData?.hash
    // })

    // console.log(useWaitForTransactionData );
    // console.log(val);


  return (
    <div className=" w-full min-h-screen">
      <h1 className={`text-5xl`}>hello</h1>
      <ConnectButton/>
      {/* <button onClick={()=>{setTocall("read") ; write?.()}}>click me to call</button> */}
      {/* <div onClick={()=>setTocall("read")} >calling {call}</div>   */}
      {/* <button onClick={getval}>aajaa</button> */}
      <button onClick={getval1}>jdgsfjkgsdgfajhskj</button>
    </div>
  )
}
