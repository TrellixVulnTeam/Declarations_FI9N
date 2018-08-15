import React from 'react';
import BarChart from 'react-bar-chart';
 

const margin = {top: 100, right: 100, bottom: 100, left: 100};
 
 
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
      alert(`The bin ${element.text} with incomes ${element.value} was clicked`);
    }
        
  render() {
  
      return(

        <div ref='root'>
        
        <div style={{width: '50%'}}> 
            <BarChart 
              width={400}
              height={400}
              margin={margin}
              data={this.state.data.map((item) => ({text:item.name, value: item.incomes}))}
              onBarClick={this.handleBarClick}/>
        </div>
    </div>);
  }
}

module.exports = IncomesBar;