import './CardSec.css';
import StarsComponent from './StarsComponent';



function CardSec(props) {

    const ItemCountInCart=(items)=>{
        let c=0;
        for(let i of items){
         if(props.dress.id===i.id){
          c+=1;
         }
        }
        return c;
      }


    return (
      <div className='card'>
        <img src={props.dress.image} alt={props.dress.title}/>
        <div className='dressDetails'>
                <h3>{props.dress.title}</h3>
                <h4>${props.dress.price}</h4>
                <span>{
                     <StarsComponent rating={props.dress.rating.rate}/>
                    }
                </span>
        </div>
        <span className='buttongroup'>
           <div>Item in Cart : {ItemCountInCart(props.items)}</div>
           <div>Item in Stock : {props.dress.rating.count}</div>
           <div className='btn btn-primary'
                onClick={()=>props.toSetModalItem(props.dress)}>Detailed View
           </div>
        </span>
      </div>
    );
  }
  
  export default CardSec;