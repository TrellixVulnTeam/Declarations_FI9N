
var React = require('react');


   

 
class DeputyInfo extends React.Component {
    constructor(props) {
        super(props);
        
          
      }
      
   

      componentDidMount() {
        
        

          this.deputy = this.props.location.state

          console.log(this.deputy) // "bar"
          
          console.log(this.deputy.incomes)
          
      }


      

 
         
    render() {
        
    


        return(

            <div>
              
{this.props.location.state.incomes}
        
      </div>);
    }
}
 
module.exports = DeputyInfo;