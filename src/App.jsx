// import React from 'react';
// import Chat from './components/Chat';

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <header className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primaryDark flex items-center justify-center text-white text-xl font-bold shadow-lg">S</div>
//             <div>
//               <h1 className="text-xl font-semibold">SIBA Assistant</h1>
//               <p className="text-sm text-gray-500">Policy & handbook assistant for students — powered by RAG + LLM (backend later)</p>
//             </div>
//           </div>
//           <div className="hidden sm:flex items-center gap-3">
//             <a className="text-sm text-gray-600 hover:text-gray-900">Docs</a>
//             <a className="text-sm text-gray-600 hover:text-gray-900">Admin</a>
//             <div className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-sm">AH</div>
//           </div>
//         </header>

//         <main className="bg-white rounded-xl shadow-md overflow-hidden">
//           <Chat />
//         </main>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
export default function App(){
  let [query , setQuery] = useState('')
  let queryLen = query.length

      
  return (
    <div className="flex flex-col justify-center items-center m-5 flex-wrap">
      <div className="flex justify-between text-4xl  font-bold w-full  ">
        <p>SIBA ASSISTANCE</p>
        <p>🧔</p>
      </div>

      <div>
        {query} {queryLen}
      </div>
      <div className="fixed bottom-10   h-10  w-[80%] p-1">
        <input type="text" placeholder="Please Enter what you want to ask   " className="w-[90%] p-2 border-2 rounded-[20px]"  value={query} onChange={(e)=> {setQuery( e.target.value)}}  />

      </div >
     
    </div>
  );
}