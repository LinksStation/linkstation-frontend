    import Link from 'next/link'
import React from 'react'
    
    const index = () => {
      return (
        <div>
            <h1>Login Page</h1>
            <p>New user?</p>
            <Link href="/auth/signup">Signup</Link>
        </div>
      )
    }
    
    export default index