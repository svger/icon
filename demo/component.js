import React from 'react';
import Icon from '../src/index';

class App extends React.Component {

  render() {
    return (
       <div>
         <h2>Icon Demo</h2>

         <ul>
           <li>
             <Icon type="up" />
             <span>up</span>
           </li>
           <li>
             <Icon type="down" />
             <span>down</span>
           </li>
           <li>
             <Icon type="plus" />
             <span>plus</span>
           </li>
           <li>
             <Icon type="plus-circle-o" />
             <span>plus-circle-o</span>
           </li>
         </ul>
       </div>

    );
  }
}

export default App;
