import React from 'react'
import '../../sass/style.scss';

import Board from "./Board";
import GameStats from "./GameStats.jsx";
import Previews from './Previews';
import GameController from './GameController';

import {useBoard} from "./hooks/useBoard";
import {useGameStats} from "./hooks/useGameStats";
import {usePlayer} from "./hooks/usePlayer";


export default function Tetris(props) {
    const {rows, columns, setGameOver} = props;
   
    const [gameStats, addLinesCleared] = useGameStats();

    const [player, setPlayer, resetPlayer] = usePlayer(); 
    const [board, setBoard] = useBoard({rows, columns, player, resetPlayer, addLinesCleared});

  return (
    <div className='tetris'>
        <Board board={board} />
        <GameStats gameStats={gameStats} />
        <Previews tetrominoes= {player.tetrominoes} />
        <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
       </div>
  )
}
