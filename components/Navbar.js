import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
   const router = useRouter()

    return (
    <div>
        <h2 onClick={() => router.push("/EOM")}>EOM</h2>
        <h2 onClick={() => router.push("/")}>HOME</h2>
        <h2 onClick={() => router.push("/eom")}>EOM</h2>
    </div>
  )
}

export default Navbar