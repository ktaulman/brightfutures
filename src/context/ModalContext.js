// import React,{useState} from 'react';
// const modalContext=React.createContext();

// //React Component Modal Context Provider
// export function ModalContextProvider({children}){
//     const modal=useModalContext();
//     return(
//         <modalContext.Provider value={modal}>
//             {children}
//         </modalContext.Provider>
//     )
// }


// //create interface for context
// export function useModalContext(){
//     //setup state for context provider
//     const [isModalClicked,setIsModalClicked]=useState(false)

//     function handleClick(){
//         console.log(document.getElementById('ModalWrapper'))
//         if(!isModalClicked){
           
//         }else{
            
//         }
//     }
//     return({isModalClicked,handleClick})
// }
