import React from 'react';






function Partition(props) {
    return (
      
        <div className="wholePageLogin">
           
             <div className='leftLogin'>
               {props.code} 
                </div>
             <div className="rightImage">
                <img src={props.imgURL} alt="ttw" />
            </div>
        </div>
      
    );
}

export default Partition;



