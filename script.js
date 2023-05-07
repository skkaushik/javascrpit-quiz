const question=[{
    'Que':'What does HTML stands for?',
    'a':'Hyperlinks and Text Markup Language',
    'b':'Hyper Text Markup Language',
    'c':'Home Tool Markup Language',
    'd':'None',
    'e':'b'
},
{
    'Que':'How can you open a link in a new browser window',
    'a':' _blank',
    'b':'Target',
    'c':'Same',
    'd':'Open',
    'e':'a'
},
{
    'Que':'Which tag is used to create a dropdown in HTML Form?',
    'a':'<input>',
    'b':'<textarea>',
    'c':'<select>',
    'd':'text',
    'e':'c'
},
{
    'Que':'How do we write comments in HTML?',
    'a':'</…….>',
    'b':'<!……>',
    'c':'</……/>',
    'd':'<…….!>',
    'e':'b'
},
{
    'Que':'Which of the following HTML element is used for canvas graphics?',
    'a':'<css>',
    'b':'<paint>',
    'c':'<canvas',
    'd':'graphics',
    'e':'c'
}
]
let index=0;
let total=question.length;
let answer;
let right=0,
wrong=0;
let optioninputs=document.querySelectorAll(".option");

const loadQuestion=()=>{
if(index===total){
    return endQuiz()
}else
reset();
const data=question[index];
document.getElementById('questionBox').innerHTML=`${index+1})${data.Que}`

optioninputs[0].nextElementSibling.innerText=data.a;
optioninputs[1].nextElementSibling.innerText=data.b;
optioninputs[2].nextElementSibling.innerText=data.c;
optioninputs[3].nextElementSibling.innerText=data.d;
}


let submitQuiz=()=>{
    let data=question[index];
    getAnswer()
    // console.log(answer,data.e)
    if(answer==data.e){
        right++;
        // console.log("right",right)


}else{
    wrong++;
    // console.log("wrong",wrong);
}
index++
loadQuestion(); 
return;
}
const getAnswer=()=>{
    optioninputs.forEach(
         (input)=>{
            
            if(input.checked){
                // console.log(input.value)
                answer=input.value
            }
            })    
        }
    let reset=()=>{
    optioninputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

let endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3> Thanx for playing quiz</h3>
    <h2>${right}/${total} are correct</h2>
    `
}

loadQuestion();

document.querySelector('#submit').addEventListener('click',submitQuiz);

