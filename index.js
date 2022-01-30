const container=document.querySelector('.leftcolumn');
const div=document.createElement('div');
const card=document.querySelector('.card');
const btn=document.getElementById('add');
const cross=document.querySelector('.close');
const cross2=document.querySelector('.cross');
const newcard=document.querySelector('.newcard')
const newcard2=document.querySelector('.newcard2')

const title="title"
btn.addEventListener('click',function add(){
    div.innerHTML= `<div class="card">
    <button class="close">❌</button>
    <div class=newcard>
    <h2>valorant</h2>
    <h5>${title}</h5>
    <div class="fakeimg" ><img src="https://esportsgen.com/wp-content/uploads/2021/09/Screenshot-2021-09-05-234413-800x400.jpg" alt=""></div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, nemo.</p>
    </div>
    </div>`
    container.appendChild(div);
})
localStorage.setItem("key", "div");
cross.addEventListener('click',function fun(){
    newcard.classList.add('display');
})
localStorage.getItem("key");
cross2.addEventListener('click',function fun(){
    newcard2.classList.add('display');
})