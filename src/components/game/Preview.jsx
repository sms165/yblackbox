import '../../sass/style.scss';

import React from 'react'
import { buildBoard } from './business/board';
import { transferToBoard} from './business/tetrominoes'
import BoardCell from './BoardCell';

export default function Preview(props) {
    const {tetromino, index} = props;

    const {shape, className} = tetromino

    const board= buildBoard({rows: 4, columns: 4});

    const style = {top: `${index * 17}vh`};

    board.rows = transferToBoard({
        className,
        isOccupied: false,
        position: { row:0, column:0},
        rows: board.rows,
        shape
    });

  return (
   <div className="preview" style={style}>
    <div className="previewBoard">
        {board.rows.map((row, y) =>
        row.map((cell, x) =>(
            <BoardCell key={x * board.size.columns + x} cell={cell} />
        )))};
    </div>
   </div>
  )
}
