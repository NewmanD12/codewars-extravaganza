
// sum of positive
function positiveSum(arr){
    sum = 0
    for(let x of arr){
        if (x > 0){
            sum += x
        }
    }
    return sum
}

console.log(positiveSum([1,2,3,4,5]))

// first and last character
function removeChar(str){
    let res = str.substring(1,str.length - 1)
    return res
   };

console.log(removeChar('eloquent'))
   
// square every digit
function squareDigits(num){
    num = String(num)
    res = ''
    for (let x of num){
        res += Number(x**2)
    }
    return Number(res)
  }

console.log(squareDigits(9119))

// get shortest word
function findShort(str){
    str = str.split(' ')
    shortest = Infinity
    for (let x of str){
        if(x.length < shortest){
            shortest = x.length
        }
    }
    return shortest
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))

// mumbling
function accum(str){
    count = 0
    first_let = true
    res = ''
    
    for (let x in str){
        count = Number(x) + 1
        res += accumHelper(str[x], count)
        res += '-'
    }
    return res.substring(0,res.length -1)
}

function accumHelper(letter, num){
    count = num
    res = ''
    while(count > 0){
        if (res.length < 1){
            res += letter.toUpperCase()
            count --
        }   else {
            res += letter.toLowerCase()
            count --
        }
    }
    return res
}


console.log(accum('ZpglnRxqenU'))
