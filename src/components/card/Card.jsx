import React from "react";
import { animated, to  } from "react-spring";
import Carousel from "nuka-carousel";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, distance, text, pics } = objs[i];

    return (
        <div className="classComp">
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
            {/* <Carousel> */}
              {pics.map(pic => (
                <img className="imgCard" src={pic} alt="profilePicture" />
              ))}
            {/* </Carousel> */}
            <h2>{name},</h2>
            <h2>{age}</h2>
            <h5>{distance}</h5>
            <h5>{text}</h5>
          </div>
        </animated.div>
      </animated.div>
      </div>
    );
  }
}

export default Card;
