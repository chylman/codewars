import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {findUniq} from "./katas/33.ts";
import {createPhoneNumber} from "./katas/34.ts";

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

createRoot(document.getElementById('root')!).render(
    <App />
)
