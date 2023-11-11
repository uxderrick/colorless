import { hexToHsva, hsvaToHslString, hslStringToHsva, hsvaToHex } from '@uiw/color-convert'

/**
 * convert hex to hsl
 * @param {string} hex 
 * @return {{ h:number, s:number, l:number, value:string}}
 */
export function hexToHsl(hex) {
    const hsva = hexToHsva(hex)
    const hslStr = hsvaToHslString(hsva)

    // hslStr is in format hsl(342, 100%, 77%)
    const match = hslStr.match(/^hsl\(([\d.]+), ([\d.]+)%, ([\d.]+)%\)$/);
    if (!match) {
        throw new Error(`Invalid HSL string: ${hslStr}`);
    }

    return {
        h: parseFloat(match[1]),
        s: parseFloat(match[2]),
        l: parseFloat(match[3]),
        value: hslStr
    };
}

export function hslToHex(hslString) {
    const hsva = hslStringToHsva(hslString)
    const hex = hsvaToHex(hsva)

    return {
        value: hex
    }
}