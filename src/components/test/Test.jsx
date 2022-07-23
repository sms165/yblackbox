import React from 'react';
import '../../sass/style.scss';
import { useSpring } from 'react-spring';
import { animated } from 'react-spring';
import Deck from '../deck/Deck';




export default function Test() {
    const styles = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 180 },
      })
    
      return (<>
         <Deck />
        
        </>
      )
    }