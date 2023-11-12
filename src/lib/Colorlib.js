import { hexToHsva, hsvaToHslString, hslStringToHsva, hsvaToHex } from '@uiw/color-convert'

/**
 * convert hex to hsl
 * @param {string} hex in either format `ffffff` or `#ffffff`
 * @return {{ h:number, s:number, l:number, value:string}}
 */
export function hexToHsl(hex) {
    const hsva = hexToHsva(hex)
    const hslStr = hsvaToHslString(hsva)

    // hslStr is in format `hsl(h, s%, l%)`
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

/**
 * 
 * @param {string} hslString in format `hsl(h, s%, l%)`
 * @returns {{ value:string }} in format `#ffffff`
 */
export function hslToHex(hslString) {
    const hsva = hslStringToHsva(hslString)
    const hex = hsvaToHex(hsva)

    return {
        value: hex
    }
}