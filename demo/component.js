import React from 'react';
import Icon from '../src/index';

class App extends React.Component {

  render() {
    return (
       <div>
         <h3>Icon Demo</h3>

         <ul>
           <li>
             <Icon type="icon-add" />
             <span>add</span>
           </li>
           <li>
             <Icon type="icon-close" />
             <span>close</span>
           </li>
           <li>
             <Icon type="icon-search" />
             <span>search</span>
           </li>
         </ul>
         <ul>
           <li>
             <Icon type="icon-setup" className="biggerIcon"/>
             <span>setup</span>
           </li>
           <li>
             <Icon type="icon-empty" className="color-red"/>
             <span>empty</span>
           </li>
         </ul>
       </div>

    );
  }
}

export default App;
