import React from 'react'
import Avid from './avid.mp4'
import X from './x'
function Main() {
  return (
    <div className='main'>
      <div className='overlay'>      <X/>
</div>
      <video src={Avid} autoPlay loop muted />
      <div className='content'>
        <h1>WELCOME</h1>
      </div>
    </div>
  )
}

export default Main
