import React from 'react';

const List = ({people}) => {
  return (
    <> 
 {people.map((banana)=>{
   const {age,image,name,id} =banana;
   return(
     <div className="person" key="id">
       <img src={image} />
       <h3>{name}</h3>
        <h3>{age}</h3>
     </div>
   )
 })}
    </>
  );
};

export default List;
 {/* {people.map((person)=>{
     const {id,name,age,image} =person;
     return <article key={id} className="person">
<img src={image} alt={name} />
<div>
  <h4>{name}</h4>
  <p>{age} years old</p>
</div>
     </article>
   })} */}