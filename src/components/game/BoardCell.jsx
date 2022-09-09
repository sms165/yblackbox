import React from 'react';

import '../../sass/style.scss';




export default function BoardCell({cell}) {
  

  return (
    <div className={`boardCell ${cell.className}`}>
       <div className="sparkle"></div>
    </div>
  )
}