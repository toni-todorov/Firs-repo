function solve(arr , arg){

    if (arg === "asc"){
        let sortArray = arr.sort((a ,b) =>{
            return a-b
        })
         return sortArray;
        }
        else {
            let sortArray = arr.sort((a,b)=>{
                return b-a
            })
            return sortArray;
        }
    }



console.log(solve([14, 7, 17, 6, 8], 'asc'))