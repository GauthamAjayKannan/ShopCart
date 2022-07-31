import './ShopSec.css';


import CardSec from './CardSec';

function ShopSec(props) {
    
    
    
    return (
      <div className='ShopSec'>
         {!props.dresses.length?<h1>Loading...Please wait</h1>:
           props.dresses.map(dress=><CardSec dress={dress} 
                                       key={dress.id} 
                                       toSetModalItem={props.toSetModalItem}
                                       items={props.items}
                                       />)}
      </div>
    );
  }
  
  export default ShopSec;