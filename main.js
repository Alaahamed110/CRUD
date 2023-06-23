let name = document.getElementById('name')
let age = document.getElementById('age')
let salary = document.getElementById('salary')
let email = document.getElementById('email')
let number = document.getElementById('number')
let submit = document.getElementById('submit')
let scroll = document.getElementById('scroll')
let mood = "create";
let tmp;

//start add new employee
// keep the history of local Storage
let saveData;
if(localStorage.employee != null){
    saveData = JSON.parse(localStorage.employee);
}else{
    saveData = [];
}
submit.onclick = function (){
    let newEmployee = {
        name :name.value,
        age:age.value,
        salary:salary.value,
        email:email.value,
        number : number.value
    }
    if(mood === 'create'){
        saveData.push(newEmployee)
    }else{
        saveData[  tmp  ] = newEmployee;
        mood = 'create';
        submit.innerHTML = 'create'
        submit.style.background = '#efa90c'
    }
    // set item in local storage
    localStorage.setItem('employee', JSON.stringify(saveData));
    clearData()
    showData()
}
showData()

//end add new employee

// Start clear Data
function clearData(){
    name.value ='',
    age.value = '',
    salary.value = '',
    email.value ='',
    number.value = ''
}
// End clear Data

// Start read Data
function showData(){
    let table = '';
    for(let i = 0; i < saveData.length; i++){
        table += `
        <tr>
        <td>${i+1}</td>
        <td>${saveData[i].name}</td>
        <td>${saveData[i].age}</td>
        <td>${saveData[i].salary}</td>
        <td>${saveData[i].email}</td>
        <td>${saveData[i].number}</td>
        <td><button id="update" onclick="updateData(${i})">Update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML = table
}
// End read Data

// Start delete Data
function deleteData(i){
    saveData.splice(i,1)
    localStorage.employee = JSON.stringify(saveData)
    showData()
}
// End delete Data

// Start Update Data
function updateData(i){
    name.value = saveData[i].name;
    age.value = saveData[i].age;
    salary.value = saveData[i].salary;
    email.value = saveData[i].email;
    number.value = saveData[i].number;
    submit.innerHTML = 'Update'
    submit.style.background = 'green'
    mood = 'update'
    tmp = i;
}
// End Update Data

// scroll
function getScroll(){
    window.scroll({
        top:0,
    behavior : "smooth"
    })
    console.log('hi')
}
// scroll