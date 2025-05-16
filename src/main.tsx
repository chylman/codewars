import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {arrayDiff} from "./katas/25.ts";
import {rgb} from "./katas/29.ts";


rgb(300, 255, 255)

createRoot(document.getElementById('root')!).render(
    <App />
)
