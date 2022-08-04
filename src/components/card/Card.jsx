import React from "react";
import { animated, to  } from "react-spring";
import Carousel from "nuka-carousel";

import '../../sass/style.scss';

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, distance, text, pics, keywords } = objs[i];

    return (
        <div className="ex">
      <animated.div
        key={i}
        style={{
          transform: to(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: to([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel>
              {pics.map(pic => (
                <img className="imgCard" src={pic} alt="profilePicture" />
              ))}
            </Carousel>
            <h2>{name}</h2>
            
            <div className="keywordsContainer">
            {keywords.map(word =>(
              <h5 className="keyword">{word}</h5>
            ))}
            </div>
          </div>
        </animated.div>
      </animated.div>
      </div>
    );
  }
}

export default Card;
