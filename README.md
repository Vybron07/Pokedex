# 🧩 Pokédex Web App

A responsive and interactive Pokédex built using **HTML**, **CSS**, and **Vanilla JavaScript**, powered by the **PokéAPI**.

This project allows users to browse Pokémon, search them, filter by type, and view detailed information inside a modern modal.

---

## 🚀 Features

### 🔍 Search Pokémon
- Search Pokémon by name.
- Uses PokéAPI to fetch Pokémon data.
- Displays an alert if the Pokémon is not found.

### 🎨 Filter by Type
- 18 Pokémon type buttons.
- Dynamically fetches Pokémon belonging to the selected type.
- Type badges are automatically generated.

### 🃏 Pokémon Cards
Each card displays:
- Official artwork
- Pokémon name
- Pokédex number
- Type badges
- View Details button

---

## 📖 Pokémon Details Modal

Clicking **View Details** opens a modal containing:

- Large artwork
- Pokémon name
- Pokédex ID
- Height
- Weight
- Base Experience
- Abilities
- Base Stats

---

## 📊 Base Stats

Displays animated progress bars for:

- HP
- Attack
- Defense
- Special Attack
- Special Defense
- Speed

### Dynamic Colors

Green
- 100+

Yellow
- 70–99

Red
- Below 70

---

## 🎯 Load More Pagination (In Progress)

Instead of loading every Pokémon at once:

- Loads 20 Pokémon initially.
- Additional Pokémon can be loaded using a **Load More** button.
- Pagination state is tracked using:
  - `currentPokemonList`
  - `currentIndex`
  - `POKEMON_PER_LOAD`

This greatly improves performance.

---

## 🛠 Technologies

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
└── README.md
```

---

## 📌 Current Progress

- ✅ Search Pokémon
- ✅ Filter by Type
- ✅ Dynamic Cards
- ✅ Details Modal
- ✅ Animated Stat Bars
- ✅ Dynamic Stat Colors
- ✅ Ability Section
- ✅ Base Stats
- ✅ Responsive Modal
- ✅ Pagination Logic
- 🚧 Load More Button (Final Integration)

---

## 🎯 Upcoming Features

- Finish Load More button
- Loading Skeletons
- Infinite Scrolling
- Favorite Pokémon
- Local Storage
- Dark/Light Theme
- Search Suggestions
- Pokémon Comparison
- Evolution Chain
- Move List
- Responsive Improvements

---

## 👨‍💻 Author

Developed by **Vivek Raut**
