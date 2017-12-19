import React from 'react';
import Icon from '../src/index';

class App extends React.Component {

  render() {
    return (
       <div>
         <h3>Icon Demo</h3>

         <ul>
           <li>
             <Icon type="add" color="blue" size="lg" />
             <span>add</span>
           </li>
           <li>
             <Icon type="close" size="md"/>
             <span>close</span>
           </li>
           <li>
             <Icon type="search" size="sm"/>
             <span>search</span>
           </li>
         </ul>
         <ul>
           <li>
             <Icon type="setup" className="biggerIcon" color="blue"/>
             <span>setup</span>
           </li>
           <li>
             <Icon type="empty" className="color-red"/>
             <span>empty</span>
           </li>
         </ul>
       </div>

    );
  }
}

export default App;
