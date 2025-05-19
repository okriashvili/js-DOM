


const testResults = [12, 45, 232, 54, 45, 89];
    for(let i = 0; i < testResults.length; i++){
        for(let j = i + 1; j < testResults.length; j++) {
            if(testResults[i] == testResults[j]){
                console.log("დუბლირებულია");
            }else{
                console.log("არ არის დუბლრებული");
            }
        }
    } 



