import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {openOrSenior} from "./katas/16.ts";
import {XO} from "./katas/17.ts";
import {findShort} from "./katas/18.ts";


console.log(findShort('Lisk Waves Waves Monero MadeSafeCoin LiteCoin Mine Steem DarkCoin ProofOfWork BTC Waves Waves DarkCoin'))

createRoot(document.getElementById('root')!).render(
    <App />
)
