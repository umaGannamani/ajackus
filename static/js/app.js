let filteredEmployees = [...employees];

function renderEmployees(data = filteredEmployees) {
  const container = document.getElementById('employeeList');
  container.innerHTML = '';
  data.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.innerHTML = `
      <strong>${emp.firstName} ${emp.lastName}</strong>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    container.appendChild(card);
  });
}

function searchEmployees() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  filteredEmployees = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(keyword) ||
    emp.lastName.toLowerCase().includes(keyword) ||
    emp.email.toLowerCase().includes(keyword)
  );
  renderEmployees();
}

function toggleFilterSidebar() {
  const sidebar = document.getElementById("filterSidebar");
  sidebar.classList.toggle("open");
}

function applyFilters() {
  const name = document.getElementById("filterFirstName").value.toLowerCase();
  const department = document.getElementById("filterDepartment").value;
  const role = document.getElementById("filterRole").value;

  filteredEmployees = employees.filter(emp => {
    const matchesName = !name || emp.firstName.toLowerCase().includes(name);
    const matchesDept = !department || emp.department === department;
    const matchesRole = !role || emp.role === role;
    return matchesName && matchesDept && matchesRole;
  });

  renderEmployees();
}

function clearFilters() {
  document.getElementById("filterFirstName").value = "";
  document.getElementById("filterDepartment").value = "";
  document.getElementById("filterRole").value = "";
  filteredEmployees = [...employees];
  renderEmployees();
  toggleFilterSidebar();
}


function sortEmployees() {
  const key = document.getElementById('sortSelect').value;
  if (key) {
    filteredEmployees.sort((a, b) => a[key].localeCompare(b[key]));
    renderEmployees();
  }
}

function changePagination() {
  const limit = parseInt(document.getElementById('paginationSelect').value);
  renderEmployees(filteredEmployees.slice(0, limit));
}

function editEmployee(id) {
  const emp = employees.find(e => e.id === id);
  localStorage.setItem('editEmp', JSON.stringify(emp));
  window.location.href = 'form.html';
}

function saveToLocalStorage() {
  localStorage.setItem('employees', JSON.stringify(employees));
}

function deleteEmployee(id) {
  employees = employees.filter(e => e.id !== id);
  saveToLocalStorage();
  filteredEmployees = [...employees];
  renderEmployees();
}

function resetToDefault() {
  localStorage.removeItem('employees');
  location.reload();
}


window.onload = () => {
  renderEmployees();
};
