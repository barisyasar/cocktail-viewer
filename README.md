# Cocktail Viewer Application

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Features

- **Search:** Users can search for cocktails.
- **Cocktail Listing:** Users can view and filter cocktail listings.
- **Basket Management:** Users can add or remove cocktails from their basket.
- **Saved Cocktails:** Users can save and view their favorite cocktails.
- **Responsive Design:** The application displays properly on mobile devices.

## Technologies Used

- **Frontend:**

  - Next.js
  - Javascript
  - Tailwind CSS
  - Zustand (preferred for state management)
  - Shadcn/ui

## Installation

To run the Application locally, follow these steps:

```sh
git clone https://github.com/barisyasar/cocktail-viewer.git
```

```sh
cd cocktail-viewer
```

```sh
yarn install
```

```sh
yarn dev
```

## Project Structure

```sh
cocktail-viewer/
├── public/
├── src/
│ ├── components/
│ │ ├── ui/
│ ├── app/
│ │ ├── saved-cocktails/
│ │ ├── page.js
│ ├── hooks/
│ ├── services/
├── .env
├── .gitignore
├── .prettierrc.json
├── .tailwind.config.js
├── package.json
├── README.md
```
