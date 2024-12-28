import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div>
        <div className='flex items-center justify-center h-full w-full '>
            <SignUp/>
          </div>
    </div>
  )
}

export default SignUpPage
