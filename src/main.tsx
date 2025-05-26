import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {arrayDiff} from "./katas/25.ts";
import {rgb} from "./katas/29.ts";
import {dirReduc} from "./katas/30.ts";

console.log(
dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"])

)

createRoot(document.getElementById('root')!).render(
    <App />
)
