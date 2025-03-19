import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {calculator} from "./katas/11.ts";
import {getCount} from "./katas/12.ts";
import {squareDigits} from "./katas/13.ts";
import {descendingOrder} from "./katas/14.ts";
import {accum} from "./katas/15.ts";
import {openOrSenior} from "./katas/16.ts";


console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

createRoot(document.getElementById('root')!).render(
    <App />
)
