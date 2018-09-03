import React from "react";
import './Map.css';
import backgroundImage from './map_home.jpg';

try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  // $('.no-browser-support').show();
  // $('.app').hide();
}



/*-----------------------------
      Voice Recognition
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses.
recognition.continuous = true;

// This block is called every time the Speech APi captures a line.
recognition.onresult = function(event, state) {

  console.log(event);
  console.log(state);

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far.
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;
  console.log(transcript);

  if (transcript.toLowerCase().includes('mischief managed')) {
    console.log('Yay');
    // console.log(Map)
    // Map.prototype.backToHome();
  }

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
};

recognition.onstart = function() {
  // instructions.text('Voice recognition activated. Try speaking into the microphone.');
  console.log('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
  // instructions.text('You were quiet for a while so voice recognition turned itself off.');
  console.log('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    // instructions.text('No speech was detected. Try again.');
    console.log('No speech was detected. Try again.');
  };
}

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.startVoiceRecognition = this.startVoiceRecognition.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }

  backToHome(){
    console.log(this);
    this.props.setCurrent('home');
  }

  startVoiceRecognition() {
    console.log(this);
    recognition.start();
  }

  render(){
    return(
      <div className="container map-bg2">
        <img src={backgroundImage} alt="bg" className="bg" />
        <div className="row">
          <div className="col s12">
            <h1 className="center-align">Welcome Nikhat</h1>
            <div className="center-align">
              <a className="waves-effect waves-light btn-large center-align" onClick={this.startVoiceRecognition.bind(this)} >Go Back</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;