import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {openOrSenior} from "./katas/16.ts";
import {XO} from "./katas/17.ts";


console.log(XO('sdetewycox'))

createRoot(document.getElementById('root')!).render(
    <App />
)
