var React = require('react');
var SearchPlugin = require('./SearchPlugin.jsx');
 
class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};
                           
        this.filterList = this.filterList.bind(this);
    }
              
    filterList(text){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(text.toLowerCase())!== -1;
        }); 
        this.setState({items: filteredList});
    }
               
    render() {
        return(
            <div>         
                <h2>{JSON.stringify(this.props.data)}</h2>
                
            </div>);
    }
}
 
module.exports = ItemsList;