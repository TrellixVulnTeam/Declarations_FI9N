var ReactDOM = require('react-dom');
var React = require('react');
var ItemsList = require('./components/ItemsList.jsx');
 

 

 
function status(response) {  
    if (response.status >= 200 && response.status < 300) {  
      return Promise.resolve(response)  
    } else {  
      return Promise.reject(new Error(response.statusText))  
    }  
  }
  
 function json(response) {  
    return response.json()  
  }
  
  fetch('/api/')  
    .then(status)  
    .then(json)  
    .then(function(data) {  
      console.log('Request succeeded with JSON response', data);  
    }).catch(function(error) {  
      console.log('Request failed', error);  
    });



//console.log(JSON.stringify(propsValues))

//ReactDOM.render(
//    <ItemsList data={propsValues} />,
//    document.getElementById("app")
//)