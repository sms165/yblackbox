import '../../sass/style.scss';
import React from 'react';

import Preview from "./Preview";

export default function Previews(props) {
    const {tetrominoes} = props;
    const previewTetrominoes = tetrominoes.slice(1 - tetrominoes.length).reverse();
  return (
    <>
    {previewTetrominoes.map((tetromino, index) =>(
        <Preview tetromino={tetromino} index={index} key={index} />
    ))}
    </>
  )
}


