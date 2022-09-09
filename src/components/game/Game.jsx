import '../../sass/style.scss';

import React from 'react'
import { useParams } from 'react-router-dom';
import {useGameOver} from "./hooks/useGameOver"
import Tetris from "./Tetris"
import Menu from "./Menu"

export default function Game(props) {
    const {rows, columns} = props;

    const [gameOver, setGameOver, resetGameOver]= useGameOver();
   
    start = () => {
        resetGameOver();
        console.log(`start gameover is ${gameOver}`)}
   
  return (
    <div className='game'>
        {gameOver ?(
        <Menu onClick={start} />
        ) : (
            <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
        )}

        </div>
  )
}


