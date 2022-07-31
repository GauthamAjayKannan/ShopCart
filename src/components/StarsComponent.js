import './StarComponent.css';

const StarsComponent = (props)=>{

    const starsCount = (count)=>{
        let coun = Math.round(count);
        let arr=[];
        for(let i=0;i<coun;i++){
            arr.push(i);
        }
        return arr
    }

    return (
        starsCount(props.rating).map(
            (star,index)=><i className="fa fa-star" 
                     aria-hidden="true" key={index}></i>
            )
    );

}


export default StarsComponent