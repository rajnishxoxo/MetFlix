import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between w-4/5 mx-auto'>
        <img className='w-40' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>
        <button className='bg-red-700 w-20 h-10 rounded text-center hover:bg-red-600 text-white font-bold'>Sign in</button>
    </div>
  )
}

export default Header