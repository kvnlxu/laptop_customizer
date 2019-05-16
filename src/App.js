import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import FeatureList from './Components/FeatureList';
import Summary from './Components/Summary';
import SummaryTotal from './Components/SummaryTotal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    

    return (
      <div className="App">
        <Banner/>
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <FeatureList 
              updateFeature={this.updateFeature} 
              features={this.props.features}
              appState={this.state}
            />
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <Summary appState={this.state}/>
            <SummaryTotal total={total}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
