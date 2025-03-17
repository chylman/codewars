import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {calculator} from "./katas/11.ts";
import {getCount} from "./katas/12.ts";
import {squareDigits} from "./katas/13.ts";
import {descendingOrder} from "./katas/14.ts";


console.log(getCount('ssdpiermfdsewt'))
console.log(descendingOrder(1265))

createRoot(document.getElementById('root')!).render(
    <App />
)
