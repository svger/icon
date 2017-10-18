import React from 'react';
import Icon from '../src/Icon';

class App extends React.Component {

  render() {
    return (
       <div>
         <div>Icon Demo</div>

         <Icon type="reload" inline />
         <Icon type="header-search" inline />
         <Icon type="openInterest" inline />
         <Icon type="header-back" inline />

       </div>

    );
  }
}

export default App;
