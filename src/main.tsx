import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {calculator} from "./katas/11.ts";
import {getCount} from "./katas/12.ts";


console.log(getCount('ssdpiermfdsewt'))


createRoot(document.getElementById('root')!).render(
    <App />
)
