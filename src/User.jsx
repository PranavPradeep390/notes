import React from 'react'

function User({Share}) {
    const showUser=(data)=>{
        alert(`${data} message is ${Share}`)
    }
  return (
    <div>User Component
    <button onClick={()=>showUser('Hello')} className='btn btn-primary'>Click Here</button>
    </div>

  )
}

export default User