import React, { useEffect } from 'react'
import { useContractRead } from 'wagmi';
import {contAddr , abi} from "./../constant";

const readContract = ({funcN} : any) => {
 console.log(funcN);
  const { data :useContractReadData } = useContractRead({
    address: contAddr,
    abi: abi,
    functionName: funcN ,
    })
    
   return parseInt(useContractReadData as string)
}

export default readContract