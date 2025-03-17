export function descendingOrder(n){
    return +`${n}`.split('').map(d=>+d).sort((a,b) => b-a).join('')
}