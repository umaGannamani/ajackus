// Load employee data for editing (if any)
window.onload = function () {
  const empData = localStorage.getItem('editEmp');
  if (empData) {
    const emp = JSON.parse(empData);
    document.getElementById('formTitle').innerText = 'Edit Employee';
    document.getElementById('empId').value = emp.id;
    document.getElementById('firstName').value = emp.firstName;
    document.getElementById('lastName').value = emp.lastName;
    document.getElementById('email').value = emp.email;
    document.getElementById('department').value = emp.department;
    document.getElementById('role').value = emp.role;
    localStorage.removeItem('editEmp');
  }
};

// Handle form submission
function submitForm() {
  const idField = document.getElementById('empId').value;
  const newEmployee = {
    id: idField ? parseInt(idField) : Date.now(),
    firstName: document.getElementById('firstName').value.trim(),
    lastName: document.getElementById('lastName').value.trim(),
    email: document.getElementById('email').value.trim(),
    department: document.getElementById('department').value,
    role: document.getElementById('role').value
  };

  // ✅ Validation
  if (!newEmployee.firstName || !newEmployee.lastName || !newEmployee.email || !newEmployee.department || !newEmployee.role) {
    alert("All fields are required!");
    return false;
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(newEmployee.email)) {
    alert("Invalid email format.");
    return false;
  }

  // ✅ Update or Add
  const index = employees.findIndex(e => e.id === newEmployee.id);
  if (index !== -1) {
    employees[index] = newEmployee; // edit
  } else {
    employees.push(newEmployee); // add
  }
   // Update localStorage
  localStorage.setItem('employees', JSON.stringify(employees));

  window.location.href = 'index.html';
  return false; // prevent form reload
}
