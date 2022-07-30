import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useAxios = () => {
    const [response,setResponse]=useState([])
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        axios.get(`https://www.momentup.co/challange/ProductsWithFilter.json`)
        .then((res)=>setResponse(res.data))
        .catch((err)=>setError(err))
        .finally(()=>setLoading(false))
    },[])


  return {response,loading,error}
}

export default useAxios