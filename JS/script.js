// // const bills = [124, 48, 268];
// // const  Tips = [];
// // var percentage;
// // function calcTips(bills){
  
// //     if (bills < 50) {
// //       percentage = .2 
// //     } else if (bills >= 50 && bills <= 200){
// //      percentage = .15
// //     } else{
// //         percentage = .1
// //     }
// //     return bills*percentage
// // }

// // var tip1 = calcTips(bills[0]);
// // var tip2 = calcTips(bills[1]);
// // var tip3 = calcTips(bills[2]);


// // Tips.push(tip1)
// // Tips.push(tip2)
// // Tips.push(tip3)
// //  console.log(Tips)
// // var finalAmount = []

// // finalAmount.push(bills[0] + tip1)
// // finalAmount.push(bills[1] + tip2)
// // finalAmount.push(bills[2] + tip3)

// // console.log(Tips, finalAmount)



// const AllTips = []
// const finalAmount = []

// // var tips = {
// //     bills : [124, 48, 268, 180, 42],
// //     calctips : function(bills) {
// //         for (i = 0; i < 50; i++)},
    

// // }


// // Advanced objects and functions

//     var question1, question2, question3, allQuestion, gamePlaying, currentScore, Ask, userInfo, presentQuestion;
//     function Question(question, answers, correct) {
//               this.question = question;
//               this.answers = answers;
//               this.correct = correct;
//     }
//     allQuestion =[
//         question1 = new Question("1. what is the easiest programming language?", ["HTML", "Css", "PHP"], 0),
//         question2 = new Question("2. what is the  programming language used for styling content?", ["HTML", "Css", "PHP"], 1),
//         question3 = new Question("3. what is the coolest programming language?", ["HTML", "Css", "javascript"], 2)
//     ]
//     gamePlaying = true
//     function randomQuestion() {
//         presentQuestion =  allQuestion[Math.floor(Math.random()*3)] 
    
//      console.log(presentQuestion.question)
//      console.log(presentQuestion.answers)
    
//     }
//     if(gamePlaying) {
//         randomQuestion()
//         Ask = parseInt(prompt("which of these answers is correct?"))
    
    
//     userInfo = Ask
//     currentScore = 0
//     function init() {
//         if(userInfo === presentQuestion.correct) {
//             currentScore +=1
//             console.log("your score is " + currentScore)
//             randomQuestion()
//             Ask = parseInt(prompt("which of these answers is correct?"))
        
//         }else if(userInfo === "exit") {
//         gamePlaying = false
//         }else {
//             console.log("your score is " + currentScore)
//             randomQuestion()
//             Ask = parseInt(prompt("which of these answers is correct?"))
//         }
//         }
//         init()
//         init()
    
    
//     }
     
    
    






// ASYNCHRONUS     JAVASCRIPT

// const getRecipe = ()=> {
//     const recipeID = [234, 356, 895, 239]
//     setTimeout(id=> {
//         const Recipe = {title: 'Egusi', publisher: 'jonas'}
//         console.log(id, Recipe.title)

//         setTimeout(publisher=>{
//             const recipe2 = {title: 'afang', publisher: 'jonas'}
//             console.log(recipe2, publisher)

//         },2000,Recipe.publisher)
//     },2000,recipeID[2])
// }

//  getRecipe()


const getIDs = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([234, 356, 895, 239])
    },2000)
})

const getRecipe = ID=>{
    return new Promise((resolve,reject)=>{
        setTimeout(id=>{
            const Recipe = {title: 'Egusi', publisher: 'jonas'}
                    resolve(`${id} : ${Recipe.title}`)
        },2000, ID)
    })
}

const relatedRecipe = rec=>{
    return new Promise((resolve,reject)=>{
        setTimeout(id=>{
            const recipe = {title: 'afang', publisher: 'jonas'}
                           resolve(`${recipe.title}: ${id}`)          
        },2000,rec)
    })
}

getIDs
.then(ids=>{
    console.log(ids)
    return getRecipe(ids[2])
})
.then(recipe=>{
    console.log(recipe)
    return relatedRecipe('jonas')
})
.then(recipe=>{
    console.log(recipe)
})