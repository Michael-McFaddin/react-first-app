import React, {Component} from 'react';

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImgUrl: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        console.log(memes[3])
        this.setState({ allMemeImgs: memes })
      })
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input 
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input 
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <h1>{this.state.topText} {this.state.bottomText}</h1>
          <button>Gen</button>
        </form>
      </div>
      )
  }
}

export default MemeGenerator;