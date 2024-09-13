document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate fields
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const salary = document.getElementById('salary').value;
    const department = document.getElementById('department').value;

    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    if (!gender) {
        document.getElementById('genderError').textContent = 'Gender is required';
        isValid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    }
    if (!mobile.match(/^[0-9]{10}$/)) {
        document.getElementById('mobileError').textContent = 'Invalid mobile number';
        isValid = false;
    }
    if (!salary) {
        document.getElementById('salaryError').textContent = 'Salary is required';
        isValid = false;
    }
    if (!department) {
        document.getElementById('departmentError').textContent = 'Department is required';
        isValid = false;
    }

    if (isValid) {
        // Save to localStorage
        let employees = JSON.parse(localStorage.getItem(department)) || [];
        employees.push({ name, gender, email, mobile, salary,department });
        localStorage.setItem(department, JSON.stringify(employees));

        // Clear form
        document.getElementById('employeeForm').reset();
        alert('Employee data saved successfully!');
    }
});

document.querySelectorAll('.department').forEach(dep => {
    dep.addEventListener('click', function() {
        localStorage.setItem('currentDepartment', this.id);
        window.location.href = 'data.html';
    });
});










/*-------------------------------------------------------------navbar---------------------------------------------------------------------------*/
let add_btn = document.getElementById("add-btn");
let form_cont = document.getElementById("form-outer");
let close_form=document.getElementById("close-form")
let ham_add_btn = document.getElementById("ham-add-btn");


// let form_close_btn = document.getElementById("form-close-btn");

add_btn.addEventListener("click", function () {
  form_cont.classList.add("dis-block");
});


close_form.addEventListener("click", function(){
    form_cont.classList.remove("dis-block");
})


ham_add_btn.addEventListener("click", function(){
    form_cont.classList.add("dis-block");
})






let hamburger__nav = document.getElementById("ham-burger-nav");
let hamburger = document.getElementById("hamburger");
let ham_link = document.getElementById("ham-link");
let close_ham = document.getElementById("close-ham");



hamburger.addEventListener("click", function () {
  hamburger__nav.classList.toggle("toggle-w");
  ham_link.classList.toggle("toggle2-o");
  event.stopPropagation();
});


// hamburger__nav.addEventListener("click",function(){
//     hamburger__nav.classList.add("toggle-w");
//     ham_link.classList.add("toggle2-o");
//     event.stopPropagation();
// })

document.body.addEventListener("click", function () {
  hamburger__nav.classList.remove("toggle-w");
  ham_link.classList.remove("toggle2-o");
});

close_ham.addEventListener("click", function () {
  hamburger__nav.classList.toggle("toggle-w");
  ham_link.classList.toggle("toggle2-o");
  event.stopPropagation();
});