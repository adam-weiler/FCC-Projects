import React, { Component } from 'react';
import ButtonList from './ButtonList.js';
import { drums } from './drums';
import './App.css';

class App extends Component {
	constructor(props) {
			super(props);
			this.state = {
				justHereForASecond: "Nothing"
			};
			this.playSound = this.playSound.bind(this);
			this.handleKeyPress = this.handleKeyPress.bind(this);
			this.handleClick = this.handleClick.bind(this);
		}
		

		componentDidMount() {
			const fCCscript = document.createElement("script");
			fCCscript.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
			fCCscript.async = true;
			document.body.appendChild(fCCscript)
			document.addEventListener('keydown', this.handleKeyPress);
		}

		playSound(e) {
			console.log(e);
			console.log(document.getElementById(this.props.keyTrigger))
			//sound.play();

		}

		handleClick(name) {
			console.log(name)
			//console.log("Mouse click " + e.keyCode + " " + e)
		}

		handleKeyPress(e) {
			console.log("Keypress " + e.keyCode + " " + e)

			if (e.keyCode === this.props.keyCode) {
				console.log ("Success!")
			}

		}

  render() {
    return (
      <div className="App">
      	<div id="drum-machine">
      		<div id="display"></div>
			<ButtonList buttons={drums} clicker={this.handleClick} />
		ButtonList file		value@buttons			drums file





			{/* */} 
      	</div>
      </div>
    );
  }
}

export default App;