// import React from 'react'
// import { useEffect, useState } from 'react'

// import data from './data'
// const List = () => {
//   const [people, setpeople] = useState(data)

//   const clear = () => {
//     setpeople([])
//   }
//   return (
//     <>
//       <div>
//         <h4
//           className='container
//  '
//         >
//           {people.length} today birthday
//         </h4>
//         {people.map((person) => {
//           const { image, id, name, age } = person
//           return (
//             <>
//               <div key={id} className='person'>
//                 <img src={image} alt={name} />
//                 <h5 className='img'>{name}</h5>
//                 <h4>{age}</h4>
//               </div>
//             </>
//           )
//         })}
//         <div className='container'>
//           <button className='button' onClick={clear}>
//             remove all
//           </button>
//           <button className='button' onClick={() => setpeople(data)}>
//             refresh all{' '}
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }
// export default List
