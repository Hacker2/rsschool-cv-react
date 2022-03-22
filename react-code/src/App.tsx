import React, { ChangeEvent } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Card from './components/Card';

const cards = [
  {
    img: 'img/HSBCLondon.jpg',
    cardName: 'HSBC London',
    createBy: 'Steve Simpson',
  },
  {
    img: 'img/HelfendeHand2016.jpg',
    cardName: 'HELFENDE HAND',
    createBy: 'Sehgucht Gmbh',
  },
  {
    img: 'img/TokioDownTown.jpg',
    cardName: 'Tokyo Downtown',
    createBy: 'Multiple owners',
  },
  {
    img: 'img/ForestFolks.jpg',
    cardName: 'Forest folks',
    createBy: 'Zim & Zou',
  },
  {
    img: 'img/FolkloriousIdentity.jpg',
    cardName: 'Folklorious',
    createBy: 'Multiple owners',
  },
  {
    img: 'img/InFuelWeTrust.jpg',
    cardName: 'In fuel we trust',
    createBy: 'Quim Marine',
  },
  {
    img: 'img/LobbyMagazine.jpg',
    cardName: 'Lobby magazine',
    createBy: 'Thomas Hedger',
  },
  {
    img: 'img/RecardoBrey.jpg',
    cardName: 'Recardo brey',
    createBy: 'Jellie Marechal',
  },
  {
    img: 'img/Collectors.jpg',
    cardName: 'Collectors',
    createBy: 'Pasha Bumashniy',
  },
  {
    img: 'img/11Street.jpg',
    cardName: '11 Street',
    createBy: 'Multiple owners',
  },
];

const cardList = cards.map((card) => (
  <Card key={card.cardName} cardName={card.cardName} createBy={card.createBy} img={card.img} />
));

class App extends React.Component<unknown> {
  search = '';

  constructor(props: unknown) {
    super(props);
    this.search = '';

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ search: JSON.parse(localStorage.getItem('search') + '') });
    this.search = JSON.parse(localStorage.getItem('search') + '');
  }

  componentWillUnmount() {
    localStorage.setItem('search', JSON.stringify(this.search));
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ search: event.target.value });
    this.search = event.target.value;
  }

  render() {
    return (
      <div className="App">
        <Link to="/about-us">About Us</Link>
        <h1>Search</h1>
        <input type="text" value={this.search} onChange={this.handleChange} placeholder="search" />
        <div className="card-container">{cardList}</div>
      </div>
    );
  }
}

export default App;
