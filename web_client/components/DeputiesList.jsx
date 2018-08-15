
var React = require('react');
import { Link, Switch, Route } from 'react-router-dom';

 
class DeputiesList extends React.Component {
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


         
    render() {
        return(
            <div>
      
         <ul>
      {this.state.data.map((item) => (
                
            <li>

          <Link to={{ pathname:`/deputies/${item.id}`, state: item }}>{item.name}</Link>
               
            </li>
                     
        ))}
        </ul>

      </div>);
    }
}
 
module.exports = DeputiesList;