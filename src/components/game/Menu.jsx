import '../../sass/style.scss';

import React from 'react'

export default function Menu(props) {
    const {onClick} =props
  return (
    <div className='menu'>
        <button className='gameBtn' onClick={onClick}>
            Play Tetris
        </button>
    </div>
  )
}


// const Menu =({onClick}) =>{
//     return(<h1>Rendering</h1>)
// }

// export default Menu;