import React from 'react';
import Icon from '../src/index';

class App extends React.Component {

  render() {
    return (
       <div>
         <h2>Icon Demo</h2>

         <Icon type="checked" inline />
         <Icon type="close" inline />
         <Icon type="close-circle" inline />
         <Icon type="down" inline />
         <Icon type="down-s" inline />
         <Icon type="exclamation-circle" inline />
         <Icon type="left-circle" inline />
         <Icon type="loading" inline />
         <Icon type="minus-circle" inline />
         <Icon type="plus-circle" inline />
         <Icon type="reload" inline />
         <Icon type="right" inline />
         <Icon type="search" inline />
         <Icon type="up" inline />
         <Icon type="up-s" inline />

       </div>

    );
  }
}

export default App;
