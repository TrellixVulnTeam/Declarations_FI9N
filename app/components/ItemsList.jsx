var React = require('react');

 
class ItemsList extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
        };
      }

      componentDidMount() {
        fetch('http://127.0.0.1:8000/api/parties/')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }  
              
    
               
    render() {
    
        

        return(
            <div>         

             <h2>Hi</h2> 
             {JSON.stringify(this.data)}

            </div>);
    }
}
 
module.exports = ItemsList;