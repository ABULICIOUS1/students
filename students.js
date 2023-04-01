let students =[]
loadData()


function add(){
    let full_name = document.getElementById('full_name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let phone = document.getElementById('phone').value;

    let student={
        full_name: full_name,
        age: age,
        gender:gender,
        phone:phone
    }

    students.push(student)

    localStorage.setItem('students',JSON.stringify(students) )

    console.log(students)

    loadData()
}

function loadData(){
    let table = document.getElementById('body');
    let students_data = localStorage.getItem('students');

    table.innerHTML=' '
    students=JSON.parse(students_data)

    for (let i=0;i<students.length;i++){
        let tr=table.insertRow(i);
        let cell1 = tr.insertCell(0)
        let cell2 = tr.insertCell(1)
        let cell3 = tr.insertCell(2)
        let cell4 = tr.insertCell(3)

        cell1.innerHTML= students[i].full_name
        cell2.innerHTML= students[i].age
        cell3.innerHTML= students[i].gender
        cell4.innerHTML= students[i].phone
        // console.log(students[i]);
    }

    console.log(JSON.parse(students_data))
}