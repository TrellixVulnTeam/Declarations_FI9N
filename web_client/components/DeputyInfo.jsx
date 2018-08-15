
var React = require('react');


   

 
class DeputyInfo extends React.Component {
    constructor(props) {
        super(props);
                  
      }


     
         
    render() {
        
    
        return(

            <div>
              
<p> Name:{this.props.location.state.name} </p>
<p>Political party: {this.props.location.state.party_name} </p>
<p> Declaration id: {this.props.location.state.declaration_id} </p>
<p> Workplace: {this.props.location.state.workplace} </p>
<p> Incomes: {this.props.location.state.incomes} </p>
        
      </div>);
    }
}
 
module.exports = DeputyInfo;