function array (fNum, tac, msg){
    if(fNum > 0 && fNum <= 3){
        arr[0][fNum - 1] = tac
    }
    else if(fNum > 3 && fNum < 6){
        arr[1][fNum % 3 - 1] = tac
    }
    else if(fNum > 6 && fNum < 9){
        arr[2][fNum % 3 - 1] = tac
    }
    else if (fNum == 6){
        arr[1][2] = tac
    }
    else if (fNum == 9){
        arr[2][2] = tac
    }


    return array2 (tac, msg)

}


function array2 (tac, msg){
    let result = ''
    if (arr[0][0]===tac && arr[1][1]===tac && arr[2][2]===tac || arr[0][2]===tac && arr[1][1]===tac && arr[2][0]===tac ){
        result = `Победа ${msg}`
    }
    else if (arr[0][0]===tac && arr[0][1]===tac && arr[0][2]===tac || 
    arr[1][0]===tac && arr[1][1]===tac && arr[1][1]===tac ||
    arr[2][0]===tac && arr[2][1]===tac && arr[2][2]===tac){
        result = `Победа ${msg}`
    }
    else if (arr[0][0]===tac && arr[1][0]===tac && arr[2][0]===tac || 
    arr[0][1]===tac && arr[1][1]===tac && arr[2][1]===tac ||
    arr[0][2]===tac && arr[1][2]===tac && arr[2][2]==tac){
        result = `Победа ${msg}`
    }
    
    return result

}


function main (){
    let outputMessage = ''
    let arr = [
        ['','',''],
        ['','',''],
        ['','',''],
        ];
    let count = 1

    document.addEventListener('click', event =>{
        const tap = event.target.id
        const fNum = event.target.dataset.type

        if (count % 2 != 0){
            document.querySelector(`#${tap}`).innerHTML = 'x'
            outputMessage = array(fNum, 1, '1 игрока')
            if (outputMessage != ''){
                console.log(outputMessage)
                alert(outputMessage)
                window.location.reload()
            }
        }

        else if (count % 2 == 0){
            document.querySelector(`#${tap}`).innerHTML = 'o'
            outputMessage = array(fNum, 0, '2 игрока')
            if (outputMessage != ''){
                console.log(outputMessage)
                alert(outputMessage)
                window.location.reload()
            }
        }
        count++
        

    })

    return arr
}

let arr = main()

console.log(arr)