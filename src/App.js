import React, { Component } from 'react';
import { fetchBoroughs } from './API'
import BoroughPicker from './components/BoroughPicker/BoroughPicker';
import Chart from './components/Chart/Chart';


class App extends Component {
  state = {
    data: {},
    borough: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchBoroughs();
    this.setState({data: fetchedData});
  }

  handleBoroughChange = async (borough) => {
    this.setState({ borough: borough.trim() })
  }

  render() {
    return (
      <div className="container"> 
      <h1 className="text-center mt-3">NYC Population Tracker</h1>
      <div className="row justify-content-center mt-3 mb-3">
      <BoroughPicker boroughs={this.state.data} handleBoroughChange={this.handleBoroughChange}/>
      </div>
     
      <Chart data={this.state.data} borough={this.state.borough}/>
     
      </div>
    );
  }
}
export default App; 