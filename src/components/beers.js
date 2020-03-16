import React from 'react';
import Likedbutton from './liked';
import '../src/'

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
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.results.map(beer => (
      {
        name: `${beer.name}`,
        tagline: `${beer.tagline}`,
        description: `${beer.description}`,
        abv: `${beer.abv}`,
        image: `${beer.image_url}`
      }
    )))
    // .then(beers => this.setState({
    //   beers,
    //   isLiked: false
    // }))
    .catch(error => console.log('There was an error', error))
  }



  render() {
    
    return (
      <div class= 'allBeers'>
        <div class = 'beer'>
          <h4>Beers on Tap</h4>
          <div>
          {this.state.beers.map((beer, index) => {
      return (
        <div class='bodyBeer' key={this.beer.name}>
          <h3>{this.name} </h3>
          <h5>{this.beer.tagline}  {beer.abv}</h5>
          <p>{this.beer.description}</p>
          <img src={this.beer.image} alt="No img"/>
          <Likedbutton/>
        
        </div>
        )
      })}
          </div>
        </div>
      </div>

    )
  }


}

export default Beers;