export function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return str.split('').filter(d => vowels.includes(d)).length;
}