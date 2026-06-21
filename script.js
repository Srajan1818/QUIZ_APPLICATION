document.addEventListener('DOMContentLoaded',() => {
    let startBtn=document.getElementById("start-btn");
    let nextBtn=document.getElementById("next-btn");
    let restartBtn=document.getElementById("restart-btn");
    let questionContainer=document.getElementById("question-container");
    let questionText=document.getElementById("question-text");
    let choicesList=document.getElementById("choices-list");
    let resultContainer=document.getElementById("result-container");
    let scoreDisplay=document.getElementById("score");


    let questions=[
        {
        question:"what is the capital  of france?",
        choices:["paris","london","berlin","madrid"],
        answer:"paris",
        },
        {
            question:"which planet is known as the Red planet?",
            choices:["mars","venus","jupiter","saturn"],
            answer:"mars",
        },
        {
          question:"who wrote 'Hamlet'?",
          choices:["charles dickness","jane austen","william shakesphere","kuvempu"],
          answer:"william shakesphere", 
        },
        {
            question:"who scored 913 runs in a single IPL season",
            choices:["virat kohli","rohith sharma","shubman gill","sunil narine"],
            answer:"virat kohli",
        },
        {
            question:"who is the captain of indian test team",
            choices:["virat kohli","shubman gill","hardik pandya","jasprith bumrah"],
            answer:"shubman gill",
        }
    ]
    
    let currentQuestionIndex=0;
    let score=0;

    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++
        if(currentQuestionIndex< questions.length){
            showQuestion()
        }else{
            showResult()
        }
    })                                                       
    restartBtn.addEventListener('click', () =>{
        currentQuestionIndex=0
        score=0
        resultContainer.classList.add('hidden')
        startQuiz()
    })

    function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add("hidden");
        questionText.textContent=questions[currentQuestionIndex].question;
        choicesList.innerHTML=""//clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
            let li=document.createElement('li')
            li.textContent=choice;
            li.addEventListener('click', () => selectAnswer(choice))
            choicesList.appendChild(li);
        })
    }
function selectAnswer(choice){
let correctAnswer=questions[currentQuestionIndex].answer;
if(choice === correctAnswer){
    score++;
}
nextBtn.classList.remove("hidden");
}

function showResult(){
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')
    scoreDisplay.textContent=`${score} out of ${questions.length}`;
}
})