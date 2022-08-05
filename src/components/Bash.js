import React from 'react'
import { useEffect, useState } from 'react'



const bash = () => {

  return (
    <>
        <label htmlFor="command">creature@drewDaly.com~$ </label>
        <input type='text' id='command' name='command'></input>
        <input type='submit' style={{display: 'none'}} />
    </>
  )
}

export default bash