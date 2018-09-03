import React from "react";

class HomePage extends React.Component {

  backToHome(){
    this.props.setCurrent('home');
  }

  beginMap(){
    this.props.setCurrent('map');
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1 className="center-align">Welcome Nikhat</h1>
            <div className="center-align">
              <a className="waves-effect waves-light btn-large center-align" onClick={this.beginMap.bind(this)} >Let's Begin</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;