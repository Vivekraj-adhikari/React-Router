import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json()).then((res) => {
    //         // console.log(res);
    //         setData(res)});
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
    </div>
  )
}

export default Github

export const getGithubInfo = async() => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary');
    return res.json();
}
