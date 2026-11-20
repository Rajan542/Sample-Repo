import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        async function fetchData(){
          try{
          const result=await axios.get(url);
          setData(result.data)
          }
          catch(err){
             setError(err.message)
          }
          finally{
            setLoading(false)
          }
        }
        fetchData()
    },[url])
  return {data,loading,error}
}

export default useFetch