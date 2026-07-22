# Changelog

All notable changes to the Pokédex project.

---

# Version 0.7 (Current)

## Added

### Pokémon Details Modal
- Large artwork
- Name
- Pokédex number
- Height
- Weight
- Base Experience

### Abilities Section
- Dynamically generated ability badges.

### Base Stats Section
Added:
- HP
- Attack
- Defense
- Special Attack
- Special Defense
- Speed

### Animated Stat Bars
Animated width using CSS keyframes.

### Dynamic Stat Colors

Green:
- Stats >=100

Yellow:
- Stats >=70

Red:
- Stats <70

### Responsive Modal
- Scrollable content
- Centered popup
- Close button
- Overlay background

---

## Improved

### View Details Button
- Added event listeners dynamically.
- Opens modal with selected Pokémon data.

### Card Creation
Cards now support:
- Artwork
- Name
- Number
- Types
- View Details

### Type Filter
Successfully fetches Pokémon by selected type.

---

## Pagination (In Progress)

Implemented:

- currentPokemonList
- currentIndex
- POKEMON_PER_LOAD
- loadMorePokemon()

The application now prepares to load Pokémon in batches of 20 instead of loading every Pokémon simultaneously.

---

## Fixed

Fixed multiple bugs including:

- Null event listeners
- Duplicate modal HTML
- Incorrect modal alignment
- Missing modal body
- Broken View Details button
- Incorrect stat HTML
- CSS animation issues
- Typo:
  - currentPokemonLisy
  - length
  - async
  - console.assertlog
- querySelector() class selector issue
- Modal centering
- Overflow scrolling

---

## Performance

Improved loading strategy by introducing pagination logic.

This prevents unnecessary loading of 100+ Pokémon simultaneously.

---

# Next Version (0.8)

Planned:

- Complete Load More button
- Hide button when all Pokémon are loaded
- Better loading animations
- Skeleton loading
- Infinite scrolling
