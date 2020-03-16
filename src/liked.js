import React from 'react';

class Likedbutton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLiked: false
    };
  }

  handleLike = index => {
    let newLike = !this.state.isLiked
    this.setState({isLiked: newLike})
  }

  render() {
    let likedStatus = this.state.isLiked ? 'liked' : 'notLiked';
    let likedButton = this.state.isLiked ? 'I dig it!' : 'Like';

    return (
      <div>
  <button class= {likedStatus} onClick={ () => this.handleLike(this)}>{likedButton}</button>
      </div>
    )
  }

}

export default Likedbutton