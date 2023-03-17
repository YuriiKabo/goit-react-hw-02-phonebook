export const Filter = ({ value, onChange }) => (
  <label>
    <p>Find contacts by name</p>
    <input name="text" type="text" value={value} onChange={onChange} />
  </label>
);
//
//
//
// import React, { useState } from 'react';

// export function Filter({ contacts, deleteHandler }) {
//   const [text, setText] = useState('');

//   const handleInputChange = event => {
//     setText(event.target.value.toLowerCase());
//   };

// const filteredContacts = contacts.filter((contact) =>
// contact.name.toLowerCase().includes(text)
// );

//   return (
//     <div>
//       <label>
//         <p>Find contacts by name</p>
//         <input type="text" value={text} onChange={handleInputChange} />
//       </label>
//       <ul>
//         {filteredContacts.map(({ id, name, number }) => (
//           <li key={id}>
//             <span>{name}: </span>
//             <span>{number}</span>
//             <button type="button" onClick={() => deleteHandler(id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
