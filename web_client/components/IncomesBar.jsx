
 
import React from 'react';
import BarChart from 'react-bar-chart';
 

const margin = {top: 20, right: 50, bottom: 30, left: 50};
 
 
class IncomesBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/api/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
 

   
  }




    handleBarClick(element, id){ 
      console.log(`The bin ${element.text} with id ${id} was clicked`);
    }
    


       
  render() {
    let arr = this.state.data.map((item) => ({text:item.name, value: item.incomes}));
    console.log(arr) 

      return(

        <div ref='root'>
        <div style={{width: '50%'}}> 
            <BarChart ylabel='Quantity'
              width={2000}
              height={2000}
              margin={margin}
              data={this.state.data.map((item) => ({text:item.name, value: item.incomes}))}
              onBarClick={this.handleBarClick}/>
        </div>
    </div>);
  }
}

module.exports = IncomesBar;