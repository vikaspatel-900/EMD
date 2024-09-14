let currentIndex;

document.addEventListener('DOMContentLoaded', function() {
    const department = localStorage.getItem('currentDepartment');
    if (!department) {
        alert('No department selected!');
        window.location.href = 'index.html';
        return;
    }

    const employees = JSON.parse(localStorage.getItem(department)) || [];
    const tableBody = document.querySelector('#employeeTable tbody');
    // const totalEmployees = document.getElementById('totalEmployees');
    // const averageSalary = document.getElementById('averageSalary');
    const departmentInfo = document.getElementById('departmentInfo');

    // Set department info
    departmentInfo.innerHTML = `<h2>${capitalize(department)} Department</h2>`;

    // Populate employee table
    employees.forEach((employee, index) => {
        let img;
        
        function showImage(){
            
            if(employee.gender==="Male"){
                img=`https://avatar.iran.liara.run/public/boy?username=[${employee.name}]`
            }

            else{
                img=`https://avatar.iran.liara.run/public/girl?username=[${employee.name}]`
            }

            return img;

            
        }
        const row = document.createElement('tr');
        row.innerHTML = `
            <td clsss="image-tag"><img src=${showImage()}></td>
            <td>${employee.name}</td>
            <td>${employee.gender}</td>
            <td>${employee.email}</td>
            <td>${employee.mobile}</td>
            <td>${employee.salary}</td>
            <td>${employee.department}</td>
            <td class="action-buttons">
                <i class="bi bi-pencil-square edit-btn" onclick="openModal(${index})"></i>
                <i class="bi bi-trash3 delete-btn" onclick="deleteEmployee(${index})"></i>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // // Calculate department summary
    // const numEmployees = employees.length;
    // const avgSalary = numEmployees > 0 ? (
    //     employees.reduce((total, emp) => total + parseFloat(emp.salary), 0) / numEmployees
    // ).toFixed(2) : 0;

    // totalEmployees.textContent = numEmployees;
    // averageSalary.textContent = `$${avgSalary}`;
});

function openModal(index) {
    const department = localStorage.getItem('currentDepartment');
    if (!department) return;

    const employees = JSON.parse(localStorage.getItem(department)) || [];
    const employee = employees[index];

    // Populate the modal with employee data
    document.getElementById('editName').value = employee.name;
    document.getElementById('editGender').value = employee.gender;
    document.getElementById('editEmail').value = employee.email;
    document.getElementById('editMobile').value = employee.mobile;
    document.getElementById('editSalary').value = employee.salary;
    document.getElementById('editDepartment').value = department;
    document.getElementById('editIndex').value = index;
    document.getElementById('previousDepartment').value = department;

    // Show the modal
    document.getElementById('editModal').style.display = 'block';
    currentIndex = index;
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const department = localStorage.getItem('currentDepartment');
    if (!department) return;

    const employees = JSON.parse(localStorage.getItem(department)) || [];
    const index = document.getElementById('editIndex').value;
    const newDepartment = document.getElementById('editDepartment').value;
    const previousDepartment = document.getElementById('previousDepartment').value;
    
    // If department changes, handle moving the employee data
    if (newDepartment !== previousDepartment) {
        // Remove employee from the previous department
        const prevEmployees = JSON.parse(localStorage.getItem(previousDepartment)) || [];
        prevEmployees.splice(index, 1);
        localStorage.setItem(previousDepartment, JSON.stringify(prevEmployees));
        
        // Add employee to the new department
        const newEmployees = JSON.parse(localStorage.getItem(newDepartment)) || [];
        newEmployees.push({
            name: document.getElementById('editName').value,
            gender: document.getElementById('editGender').value,
            email: document.getElementById('editEmail').value,
            mobile: document.getElementById('editMobile').value,
            salary: document.getElementById('editSalary').value,
            department:document.getElementById('editDepartment').value
        });
        localStorage.setItem(newDepartment, JSON.stringify(newEmployees));
    } else {
        // Update employee data in the same department
        employees[index] = {
            name: document.getElementById('editName').value,
            gender: document.getElementById('editGender').value,
            email: document.getElementById('editEmail').value,
            mobile: document.getElementById('editMobile').value,
            salary: document.getElementById('editSalary').value,
            department:document.getElementById('editDepartment').value
        };

        localStorage.setItem(department, JSON.stringify(employees));
    }

    location.reload(); // Reload the page to update the table
});

function deleteEmployee(index) {
    const department = localStorage.getItem('currentDepartment');
    if (!department) return;

    const employees = JSON.parse(localStorage.getItem(department)) || [];
    if (confirm('Are you sure you want to delete this employee?')) {
        employees.splice(index, 1);
        localStorage.setItem(department, JSON.stringify(employees));
        location.reload(); // Reload the page to update the table
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}





document.querySelectorAll('.department').forEach(dep => {
    dep.addEventListener('click', function() {
        localStorage.setItem('currentDepartment', this.id);
       
    });
});




/*----------------------------------------------------------------------------------------------------------------------------------------------*/



let hamburger__nav = document.getElementById("ham-burger-nav");
let hamburger = document.getElementById("hamburger");
let ham_link = document.getElementById("ham-link");
let close_ham = document.getElementById("close-ham");
let three_dots=document.getElementById("three-dots")
let dropdown_ul=document.getElementById("dropdown-ul")



hamburger.addEventListener("click", function () {
  hamburger__nav.classList.toggle("toggle-w");
  ham_link.classList.toggle("toggle2-o");
  event.stopPropagation();
});

document.body.addEventListener("click", function () {
  hamburger__nav.classList.remove("toggle-w");
  ham_link.classList.remove("toggle2-o");
});

close_ham.addEventListener("click", function () {
  hamburger__nav.classList.toggle("toggle-w");
  ham_link.classList.toggle("toggle2-o");
  event.stopPropagation();
});


three_dots.addEventListener("click", function(){
    dropdown_ul.classList.toggle("toggle-block")
})