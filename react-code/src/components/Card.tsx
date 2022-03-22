import React from 'react';

class CardObject {
  img = '';
  cardName = '';
  createBy = '';
}

export default function Card(props: CardObject) {
  return (
    <div className="card">
      <img src={props.img} width="100px" />
      <div className="cardName">{props.cardName}</div>
      <div className="createBy">by {props.createBy}</div>
    </div>
  );
}
