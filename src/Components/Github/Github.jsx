import React, { useEffect, useState } from 'react'



function Github() {
  const [apiData,setApiData] = useState([])
  useEffect(()=>{
     fetch('https://api.github.com/users/rahat-ah').
      then(response=>response.json()).
      then(data=>setApiData(data))
  },[])
  console.log(apiData)

console.log(apiData)
  return (
    <div className='bg-gray-700 text-white flex items-center justify-between flex-col'>
    <div>Github UserName:{apiData.name}</div>
    <div>Github ProfileName:{apiData.login}</div>
    <img src={apiData.avatar_url} alt="git-profile-img" width={300} />
    </div>
  )
}

export default Github
