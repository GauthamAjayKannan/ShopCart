import { useState ,useEffect} from 'react';
import './MainSec.css';
import axios from 'axios';
import ShopSec from './ShopSec';



function MainSec(props) {

    const [category,setCategory]=useState([]);
    const [dresses,setDresses]=useState([]);
    const [filterDresses,setFilterDresses]=useState([]);
    
    let categoryList=[];
    
    useEffect(()=>{
        
        axios.get('https://fakestoreapi.com/products')
             .then(res=>{
                let data=[];
                data = res.data;
                setDresses(data);
                setFilterDresses(data);
                for (let i of data){
                     if (categoryList.indexOf(i.category)===-1){
                        categoryList.push(i.category);
                     }
                }
                console.log(category);
                setCategory(["all",...categoryList]);
             })
             .catch(err=>{
                console.log(err);
             })
            
    },[]);

    const filterByCategory =(category)=>{
        let tempDresses=dresses;
        if(category!=="all"){
            tempDresses = dresses.filter(dress=>dress.category===category);
            setFilterDresses(tempDresses)
        }
        else{
           setFilterDresses(dresses)
        }
    }


    return (
      <div >
        <div className='mainSec'>
           <h1>Your favourite site for exploring fashion and Electronics</h1>
           <h4>Click to pick your favourites</h4>
           <select id="category" name="category" onClick={(e)=>filterByCategory(e.target.value)} >
                 {category.map((c,index)=><option
                                                  key={index} 
                                                  value={c}>{c}</option>)}
           </select>
           
        </div>
        <ShopSec
                 toSetModalItem={props.onUpdateModalItem}
                 items={props.items}
                 dresses={filterDresses}/>
      </div>
    );
  }
  
  export default MainSec;
  