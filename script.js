let outer = document.querySelector('.box');

function addTask(){
    let taskcontainer = document.createElement('div');
    let inputValue = document.querySelector('.input-design').value;
    
    taskcontainer.className = 'task-container d-flex justify-content-between mb-3 add-animation-zoom-out'
    taskcontainer.innerHTML =  `<p class = "value">${inputValue}</p>
                                <button class = "btn btn-warning" onclick = "removeElement(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                </svg></button>
                                <button class = "btn btn-warning" onclick = "completeElement(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
                                </svg></button>`
    if(inputValue != ''){
        outer.appendChild(taskcontainer);
    }
                                
    
    

    console.log(inputValue);
}

function removeElement(obj){
    let selectedElemnt = obj.parentElement;
    selectedElemnt.setAttribute('class' , 'add-animations-right');
    selectedElemnt.remove();
    
}

function completeElement(obj){
    let selectPara = obj.parentElement.querySelector('.value');
    selectPara.style.textDecoration = "line-through";
}