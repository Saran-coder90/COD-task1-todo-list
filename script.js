let box = document.querySelector('.box2');
let countOftasks = 0;
let completedTasks = 0;
let completepara = document.querySelector('.completed');
let totalTaskpara = document.querySelector('.total-tasks');
let outer;
let boolean = true;

function addTask(){
    let inputValue = document.querySelector('.input-design');
    if(inputValue.value != ''){
    if (boolean){
        outer = document.createElement('div');
        outer.className = 'adding-tasks mt-4';
        box.appendChild(outer);
        boolean = false;
    }
    
    
    let taskcontainer = document.createElement('div');
    

    
    taskcontainer.className = 'task-container d-flex justify-content-between mb-3 add-animation-zoom-out shadow'
    taskcontainer.innerHTML =  `<p class = "value w-50 para">${inputValue.value}</p>
                                <button class = "btn btn-warning" onclick = "removeElement(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                </svg></button>
                                <button class = "btn btn-warning" onclick = "completeElement(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
                                </svg></button>`
                                
    
        outer.appendChild(taskcontainer);
        inputValue.value = ""
        countOftasks ++;
        totalTaskpara.innerHTML = ('Total Tasks : ') + countOftasks.toString();
    }
    else{
        window.alert("Should not be empty!!!")
    }
}

function removeElement(obj){
    let selectedElemnt = obj.parentElement;
    selectedElemnt.setAttribute('class' , 'add-animations-down task-container d-flex justify-content-between mb-3 shadow');
    setTimeout(function() {
        countOftasks--;
        totalTaskpara.innerHTML = ('Total Tasks : ') + countOftasks.toString();
        console.log(selectedElemnt.style.backgroundColor);
        if (selectedElemnt.style.backgroundColor == 'rgb(103, 96, 96)'){
          completedTasks--;
          completepara.innerHTML = ('Completed : ') + completedTasks.toString();
    }
        selectedElemnt.remove(); 
      }, 500); 
    
    
}

function completeElement(obj){
    let selectPara = obj.parentElement.querySelector('.value');
    selectPara.style.textDecoration = "line-through";
    obj.parentElement.style.backgroundColor = "#676060";
    completedTasks ++;
    completepara.innerHTML = ('Completed : ') + completedTasks.toString();
}

function removeAll(){
    outer.setAttribute('class' , 'add-animations-down adding-tasks')
    if(countOftasks > 0){
       setTimeout(function(){
        outer.remove();
       }, 500);
       countOftasks = 0;
       completedTasks = 0;
       completepara.innerHTML = ('Completed : ') + completedTasks.toString();
       totalTaskpara.innerHTML = ('Total Tasks : ') + countOftasks.toString();
       boolean = true;
    }
    
}