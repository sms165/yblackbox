import React, { useState } from "react";
import { useSprings } from "react-spring";
import { useGesture, useDrag } from "react-use-gesture";
// import { useGesture } from "react-with-gesture";
import Card from "../card/Card";

import '../../sass/style.scss';

import myflix1 from "../../assets/myflix-1.png";
import myflix2 from "../../assets/myflix-2.png";
import myflixApi1 from "../../assets/myflix-api-1.png";
import myflixApi2 from "../../assets/myflix-api-2.png";
import meet1 from "../../assets/meet1.jpg";
import meet2 from "../../assets/meet2.jpg";
import meet3 from "../../assets/meet3.jpg";
import yblackbox1 from "../../assets/yblackbox1.png"


const cards = [1, 2, 3, 4];

const objs = [
  {
    pics: [
      myflix1,
      myflix2
     
    ],
    name: "myFLIX",
    keywords: [
      "React",
      "Netlify",
      "Node.js"


    ],
    
    
    webpage: "https://projects.yblackbox.com/myFlixProject/myflix.html"
  },
  {
    pics: [
      myflixApi1,
      myflixApi2
    ],
    name: "myFlix API",
    
    keywords: [
      "Authentication",
      "MongoDB",
      "Express",
      "Postman",
      "Heroku"

    ],

    webpage:"https://projects.yblackbox.com/myFlixApi/myflixapi.html"
    
  },
  {
    pics: [
      meet3,
      meet2,
      meet1
    ],
    name: "Meet App",
    
    keywords: [
      "React",
      "AWS",
      "GoogleCalendar API",
      "Outh2",
      "Jest",
      "Enzyme",
      "Puppeteer",
      "PWA"

    ],
    webpage: "https://projects.yblackbox.com/meetApp/meet.html"
  },
  {
    pics: [
      yblackbox1
    ],
    name: "YBlackBox",
   
    keywords: [
      "React",
      "SCSS",
      "Illustrator",
      "Procreate"


    ],

    webpage:"https://projects.yblackbox.com/yblackbox/yblackbox.html"
   
  }
];

const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());

  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i)
  }));

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    <Card
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      cards={cards}
      objs={objs}
      bind={bind}
    />
  ));
}

export default Deck;

// import { render } from 'react-dom'
// import React, { useState } from 'react'
// import { useSprings, animated, to as interpolate } from 'react-spring'
//  //import { useDrag } from '@use-gesture/react'
// import { useDrag } from 'react-use-gesture'
// import '../../sass/style.scss';
// import myflix1 from "../../assets/myflix-1.png";
// import myflix2 from "../../assets/myflix-2.png";


// const cards = [
//   myflix1,
//   myflix2,
//   // 'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
//   // 'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
//   // 'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  
// ]

// const card =[
//   {images:[
//     myflix1,
//     myflix2
//   ],
//   name: 'myFlix',
//   keywords:[
//     'react',
//     'html',
//     'scss',

//   ]

// },
// {images:[
//   myflix1,
//   myflix2
// ],
// name: 'myFlix database',
// keywords:[
//   'react',
//   'html',
//   'scss',

// ]

// },

// ]

// // These two are just helpers, they curate spring data, values that are later being interpolated into css
// const to = (i) => ({ x: 80, y: i*-4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
// const from = (i) => ({ x: 80, rot: 0, scale: 1.5, y: -1000 })
// // This is being used down there in the view, it interpolates rotation and scale into a css transform
// const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

// function Deck() {
//   const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
//   const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
//   // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//   const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
//     const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
//     const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//     if (trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//     set((i) => {
//       if (index !== i) return // We're only interested in changing spring-data for the current spring
//       const isGone = gone.has(index)
//       const x = isGone ? (100 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
//       const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//       const scale = down ? 1.1 : 1 // Active cards lift up a bit
//       return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//     })
//     if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
//   })
//   // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
//   return  <div className="ex">
//       {console.log(window.innerWidth)}
//       {props.map(({ x, y, rot, scale }, i) => (
   
//     <animated.div key={i} style={{ x, y }}>
     
//       {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
//       <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }} >
//        <p>hello</p>
//        <p>{card.name}</p>
       
        
//        {card.map((item, key)=>
//        { <>
//        <h2>hello</h2>
//        {console.log('hello')}
//        {console.log(item.name)}
//         <p>{item.name}</p>
        
      
//         </>
//         })}
//         <p>goodbye</p>
//          </animated.div>
//     </animated.div>
    
//   ))}</div>
// }

// export default Deck;
// // render(<Deck />, document.getElementById('root'))

