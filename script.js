function gameCheck(arr, char){

    let lengthOfArray = arr.length
    let flag
    for(let i = 0; i < lengthOfArray; i++){
        let winRow = true,
        winColumn = true,
        winLeftTop = true,
        winLeftBottom = true;

        for (let j = 0; j < lengthOfArray; j++){
            if(arr[i][j] !== char || arr[i][j] === '') winRow = false;
            if(arr[j][i] !== char || arr[j][i] === '') winColumn = false;
            if(arr[j][j] !== char || arr[j][j] === '') winLeftTop = false;
            if(arr[lengthOfArray-1-j][j] !== char || arr[lengthOfArray-1-j][j] === '') winLeftBottom = false;
        }

        if(winRow || winColumn || winLeftTop || winLeftBottom){
            flag = true;
            break;
        }
    }

    return flag

}



function main (){
    const gameFields = document.querySelectorAll('.game__field')
    let outputMessage = ''
    let arr = [
        ['','',''],
        ['','',''],
        ['','',''],
        ];
    
    let count = 1

    gameFields.forEach(function(gameField, indexGameField){
        gameField.addEventListener('click', ()=>{

            if (gameField.innerHTML === '' && count % 2 !== 0){
                gameField.innerHTML = 'x'
                arr[gameField.parentElement.dataset.row][gameField.dataset.column] = 'x'
                count++
                if(gameCheck(arr, 'x')){
                    alert('Победили крестики')
                    location.reload()
                }
            }

            else if(gameField.innerHTML === '' && count % 2 === 0){
                gameField.innerHTML = 'o'
                arr[gameField.parentElement.dataset.row][gameField.dataset.column] = 'o'
                count++
                if(gameCheck(arr, 'o')){
                    alert('Победили нолики')
                    location.reload()
                }
            }
            
            if(count === 10){
                alert('Ничья')
                location.reload()
            }
        })
    })

}


main()
