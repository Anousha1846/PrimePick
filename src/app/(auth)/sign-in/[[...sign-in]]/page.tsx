import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex items-center justify-center h-full w-full '>
      <SignIn/>
    </div>
  )
}

export default SignInPage
