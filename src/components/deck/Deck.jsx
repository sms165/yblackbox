import React, { useState } from "react";
import { useSprings } from "react-spring";
import { useGesture, useDrag } from "react-use-gesture";

import Card from "../card/Card";

import "../../sass/style.scss";

import myflix1 from "../../assets/myflix-1.png";
import myflix2 from "../../assets/myflix-2.png";
import myflixApi1 from "../../assets/myflix-api-1.png";
import myflixApi2 from "../../assets/myflix-api-2.png";
import meet1 from "../../assets/meet1.jpg";
import meet2 from "../../assets/meet2.jpg";
import meet3 from "../../assets/meet3.jpg";
import yblackbox1 from "../../assets/yblackbox1.png";

const cards = [1, 2, 3, 4];

const objs = [
  {
    pics: [myflix1, myflix2],
    name: "myFLIX",
    keywords: ["React", "Netlify", "Node.js"],

    webpage: "https://projects.yblackbox.com/myFlixProject/myflix.html",
  },
  {
    pics: [myflixApi1, myflixApi2],
    name: "myFlix API",

    keywords: ["Authentication", "MongoDB", "Express", "Postman", "Heroku"],

    webpage: "https://projects.yblackbox.com/myFlixApi/myflixapi.html",
  },
  {
    pics: [meet3, meet2, meet1],
    name: "Meet App",

    keywords: [
      "React",
      "AWS",
      "GoogleCalendar API",
      "Outh2",
      "Jest",
      "Enzyme",
      "Puppeteer",
      "PWA",
    ],
    webpage: "https://projects.yblackbox.com/meetApp/meet.html",
  },
  {
    pics: [yblackbox1],
    name: "YBlackBox",

    keywords: ["React", "SCSS", "Illustrator", "Procreate"],

    webpage: "https://projects.yblackbox.com/yblackbox/yblackbox.html",
  },
];

const to = (i) => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());

  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      set((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
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
