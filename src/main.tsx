import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {openOrSenior} from "./katas/16.ts";
import {XO} from "./katas/17.ts";
import {findShort} from "./katas/18.ts";
import {maskify} from "./katas/19.ts";


console.log(maskify('4556364607935616'))

createRoot(document.getElementById('root')!).render(
    <App />
)
