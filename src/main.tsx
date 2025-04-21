import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {maxPossibleScore} from "./katas/21.ts";
import {findOdd} from "./katas/24.ts";


console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

createRoot(document.getElementById('root')!).render(
    <App />
)
