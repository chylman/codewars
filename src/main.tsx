import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {century} from "./katas/07.ts";
import {addLength} from "./katas/08.ts";


console.log(addLength(`jksdfjkd sdkfjksdf skdjfksdj `))


createRoot(document.getElementById('root')!).render(
    <App />
)
