import { useState } from 'react';
import './App.css';
import HomeNavBar from './components/HomeNavBar';
import MainSec from './components/MainSec';
import Modal from './components/Modal';



function App() {

  const [ModalItem,setModalItem]=useState({});
  const [items,setItems]=useState([]);

  const updateModalItem = (item)=>{
    setModalItem(item);
  }

  const outClickModalItem = (name)=>{
      setModalItem({});
  }

  console.log(ModalItem);

  const pushItems = (item) =>{
    setItems([...items,item]);
    item.rating.count-=1;
  }
  

  const removeItems=(item)=>{
     const temItems = items;
     const index=temItems.map(i=>i.id).indexOf(item.id);
     temItems.splice(index,1);
     item.rating.count+=1;
     setItems([...temItems])
  }

   return (
    <div>
       {Object.keys(ModalItem).length?<Modal closeModal={outClickModalItem}
                                             item={ModalItem}
                                             addItems={pushItems}
                                             removeItems={removeItems}
                                             items={items}/>:<></>}
       <HomeNavBar items={items}/>
       <MainSec onUpdateModalItem={updateModalItem} 
                items={items}/>
    </div>
  );
}

export default App;
