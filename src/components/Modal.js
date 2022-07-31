import { useState } from 'react';
import './Modal.css';



function Modal(props) {

    const ItemCountInCart=(items)=>{
      let c=0;
      for(let i of items){
       if(props.item.id===i.id){
        c+=1;
       }
      }

      return c;
    }

    return (
        <div>
           <div className='mode' onClick={()=>props.closeModal()}>
              <div className='item-mode' onClick={(e)=>e.stopPropagation()}>
                 <img src={props.item.image} alt={props.item.title}/>
                 <div className='item-details'>
                    <h3>{props.item.title}</h3>
                    <h4 className='price'>Price : ${props.item.price}</h4>
                    <p className='desc'>{props.item.description}</p>
                    <div className='itemStatus'>
                       <p>Item in Stock : {props.item.rating.count}</p>
                       <p>Item in cart <i className="fa fa-shopping-cart" aria-hidden="true"></i> : {ItemCountInCart(props.items)}</p>
                    </div>
                    <div className='modalbuttongroup'>
                        <button className='btn btn-success add'
                             disabled={props.item.rating.count===0?true:false}
                             onClick={()=>props.addItems(props.item)
                             }>Add to cart</button>
                        <button className='btn btn-danger remove'
                             disabled={!ItemCountInCart(props.items)?true:false}
                             onClick={()=>props.removeItems(props.item)}>Remove from cart</button>
                        <button className='btn btn-warning' 
                                onClick={()=>props.closeModal()}>Close</button>
                    </div>
                 </div>
              </div>
            </div>
            
        </div>
        
      
    );
  }
  
  export default Modal;