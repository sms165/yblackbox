import React from 'react'
import '../../sass/style.scss';

export default function GameStats(props) {
    const {gameStats} = props;
    const {level, points, linesCompleted, linesPerLevel} = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;
  return (
   <ul className="gameStats gameStats__right">
    <li>Level</li>
    <li className="value">{level}</li>
    <li>Lines to level</li>
    <li className="value">{linesToLevel}</li>
    <li>Points</li>
    <li className='value'>{points}</li>
   </ul>
  )
}
