var question1, question2, question3, allQuestion, Ask, userInfo, presentQuestion;
class Question {
    constructor(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
}
allQuestion =[
    question1 = new Question("1. what is the easiest programming language?", ["HTML", "Css", "PHP"], 0),
    question2 = new Question("2. what is the  programming language used for styling content?", ["HTML", "Css", "PHP"], 1),
    question3 = new Question("3. what is the coolest programming language?", ["HTML", "Css", "javascript"], 2)

]
function randomQuestion() {
    return allQuestion[Math.floor(Math.random()*3)] 
}
 presentQuestion = randomQuestion()
 console.log(presentQuestion.question)
 console.log(presentQuestion.answers)

Ask = parseInt(prompt("which of these answers is correct?"))
userInfo = Ask

if(userInfo === presentQuestion.correct) {
    console.log("you are correct!")
}