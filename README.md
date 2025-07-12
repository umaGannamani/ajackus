# Employee Directory Web App

This is a simple, responsive Employee Directory web application built with **HTML**, **CSS**, **JavaScript**, and **Freemarker templates**. The app provides basic functionality to **view**, **add**, **edit**, **delete**, **filter**, and **search** employees, all handled on the client side using local storage.

---
## 🚀 Setup Instructions

> No server setup required. Works in modern browsers.

### 🖥️ To Run the Project Locally:
1. Clone or download the repository.
2. Open `index.html` in your browser directly.
3. To test Freemarker templates (like `index.ftlh`), run it through a Freemarker-enabled server like Apache FreeMarker or embed it in a Java-based web app.
4. All data is saved to **localStorage**.

---
## 📁 Project Structure

AJACKUS/
│
├── static/
│ ├── css/
│ │ └── style.css # Responsive and styled layout
│ └── js/
│ ├── data.js # Mock employee data (seed only)
│ ├── app.js # Core logic: render, delete, sort, filter
│ └── form.js # Form handling for add/edit and validation
│
├── index.html # Freemarker main page template
├── form.html # Freemarker add/edit form template
└── README.md # You're reading it!

---

## 🧠 Features

- 👤 Add, edit, and delete employees (data stored in browser `localStorage`)
- 🔍 Search by name or email
- 🗂️ Sort by First Name or Department
- 🧪 Filter by First Name, Department, and Role
- 📄 Pagination (10, 25, 50, 100 per page)
- 📱 Fully responsive UI (desktop, tablet, mobile)
- 🎨 Clean, modern UI with button controls and sidebar filter

---
## 🧩 Technologies Used

- HTML5
- CSS3 (with Flexbox and media queries)
- Vanilla JavaScript (ES6)
- Freemarker template engine (for `*.ftlh` files)

---
### ✅ Challenges Faced
- Handling persistent data **without backend** (solved using `localStorage`)
- Keeping the UI modular and responsive across all screen sizes
- Ensuring **real-time updates** after add/edit/delete operations
