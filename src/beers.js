import React from 'react';
import Likedbutton from './liked';
import './beerBody.css';

class Beers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: []
    };
  }

componentDidMount() {
  this.fetchData();
}

  fetchData() {

    fetch('https://api.punkapi.com/v2/beers')
    .then((response) => {
      return response.json();
    })
    // .then(parsedJSON => parsedJSON.results.map(beer => (
    //   {
    //     name: `${beer.name}`,
    //     tagline: `${beer.tagline}`,
    //     description: `${beer.description}`,
    //     abv: `${beer.abv}`,
    //     image: `${beer.image_url}`
    //   }
    // )))
    .then((data) => {
      this.setState({
      beers: data
      })
    })
    .catch(error => console.log('There was an error', error))
  }

  render() {
    
    return (
        <div class="body">
          <h2>Beers on Tap</h2>
          <div class="container">
          {this.state.beers.map((beer, index) => {
             return (

              <div class="card" key={beer.name}>
                <h3>{beer.name}    <Likedbutton/></h3>
                  <div class="cardMain">
                  <div class="info">
                    
                    <h5>{beer.tagline}  -   ABV: {beer.abv}</h5>
                    <p class="text">{beer.description}</p>
                  </div>
                  <div class="media">
                    <img src={beer.image_url} alt="No img"/>
                  </div>
                  </div>
                </div>
        )
      })}
        </div>    
    </div>
    )}
}

export default Beers;