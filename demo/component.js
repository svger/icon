import React from 'react';
import Icon from '../src/index';

class App extends React.Component {

  render() {
    return (
       <div>
         <h3>Icon Demo</h3>

         <ul>
           <li>
             <Icon type="loading" color="blue" size="sm" spining/>
           </li>
           <li>
             <Icon type="close" size="md" color="#6abf47"/>
           </li>
           <li>
             <Icon type="search" size="lg"/>
           </li>
           <li>
             <Icon type="setup" className="biggerIcon"/>
           </li>
           <li>
             <Icon type="empty" className="color-red"/>
           </li>
         </ul>
       </div>
    );
  }
}

export default App;
