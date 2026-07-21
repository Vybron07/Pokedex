# ⚡ Pokédex

A modern and responsive Pokédex web application built using **HTML, CSS, and JavaScript**. It uses the **PokéAPI** to fetch real Pokémon data and provides a clean, interactive user interface.

---

## 📌 Features

### 🔍 Search Pokémon
- Search Pokémon by name.
- Fetches live data from the PokéAPI.
- Displays an alert if the Pokémon is not found.

### 📄 Pokémon Card
Each search displays a Pokémon card containing:
- Official Artwork
- Pokémon Name
- Pokédex Number
- Type Badge
- View Details Button

---

## 📖 Pokémon Details Modal

Clicking **View Details** opens a responsive modal containing:

### Basic Information
- Official Artwork
- Pokémon Name
- Pokédex Number
- Pokémon Type

### Physical Information
- Height
- Weight
- Base Experience

### Abilities
- Lists all available abilities as badges.

### Base Stats
Displays all six base stats:
- HP
- Attack
- Defense
- Special Attack
- Special Defense
- Speed

Each stat is represented using a progress bar whose width depends on the stat value.

---

## 🎨 User Interface

### Responsive Modal
- Centered popup
- Scrollable when content exceeds viewport height
- Close button
- Dark themed design

### Type Badges
Each Pokémon type is displayed using colored badges.

Examples:
- Electric
- Fire
- Water
- Grass
- Ghost
- Dragon
- etc.

---

## ⚙️ API Integration

This project uses:

https://pokeapi.co/

Endpoints currently implemented:

### Search Pokémon

```
GET /pokemon/{name}
```

### Fetch Pokémon Type

```
GET /type/{type}
```

---

## 🛠 Current Progress

### ✅ Completed

- Search Pokémon
- Fetch Pokémon data
- Loading animation
- Dynamic Pokémon Card
- View Details Modal
- Height
- Weight
- Base Experience
- Abilities
- Base Stats
- Dynamic Progress Bars
- Responsive Modal
- Type Buttons
- Connected Type API
- Fire, Water, Grass, Electric etc. successfully fetch Pokémon lists from PokéAPI

---

## 🚧 Currently Working On

### Type Filtering

Current Status:
- Type buttons are clickable
- Type API successfully returns Pokémon list
- Pokémon names are successfully retrieved

Next Step:
- Dynamically generate Pokémon cards for every Pokémon returned by the selected type.

---

## 🚀 Future Features

- Display all Pokémon of selected type
- Dynamic theme based on Pokémon type
- Evolution Chain
- Favorite Pokémon (Local Storage)
- Random Pokémon Button
- Pagination
- Infinite Scrolling
- Responsive Mobile Layout
- Search Suggestions
- Similar Pokémon Section
- Better Animations
- Dark/Light Theme Toggle

---

## 🧰 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- PokéAPI

---

## 📁 Project Structure

```
Pokedex/
│
├── index.html
├── style.css
├── script.js
└── assets/
```

---

## 📸 Current Screens

✔ Search Page

✔ Pokémon Card

✔ Details Modal

✔ Type Buttons

✔ Stat Bars

---

## 📚 What I Learned

During this project I learned:

- DOM Manipulation
- Event Listeners
- Async / Await
- Fetch API
- JavaScript Template Literals
- Dynamic HTML Rendering
- CSS Flexbox
- CSS Animations
- Modal Design
- API Integration
- Debugging JavaScript Errors

---

## 👨‍💻 Author

**Vivek Raut**

Built as a personal project to practice JavaScript, API integration, DOM manipulation, and frontend development.
