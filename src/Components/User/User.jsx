import React from 'react'
import { useParams } from 'react-router';

function User() {
  const { id } = useParams();
  return (
    <div className=' text-center p-4 bg-amber-500 text-gray-700 font-bold text-2xl'>User:{id}</div>
  )
}

export default User