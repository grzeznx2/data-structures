export default function isMonotonic(array: number[]): boolean {
    if(array.length <= 2){
        return true
    }

    let trend = 'CONST'

    for(let i = 0; i < array.length - 1; i++){
        const curr = array[i]
        const next = array[i + 1]

        if(curr < next){
            if(trend === 'DEC'){
                return false
            }
            trend = 'INC'
        }else if (curr > next){
            if(trend === 'INC'){
                return false
            }
            trend = 'DEC'
        }
    }

    return true
}