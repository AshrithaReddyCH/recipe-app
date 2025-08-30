# Recipe Finder

A simple React application that helps users find recipes based on ingredients they have at home.

 **Live Demo:** [Recipe Finder App](https://ashrithareddych.github.io/recipe-app/)

---

## User Persona

* **Name:** Taylor
* **Occupation:** Busy Professional
* **Need:** Wants to quickly find recipes based on available ingredients or mood, saving time in the kitchen.

---

## Features

* Search recipes by ingredient.
* Display recipes grouped by category.
* Show random recipes on homepage.
* Back button to return to homepage.
* Loading indicators while fetching data.
* Clickable recipe cards linking to full recipes.

---

## API Used

**TheMealDB API**

* Search by ingredient:

  ```
  https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
  ```
* Fetch all meals:

  ```
  https://www.themealdb.com/api/json/v1/1/search.php?s=
  ```

---

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd recipe-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm start
   ```

The app will run at [http://localhost:3000](http://localhost:3000).

---

## Conclusion

This project was built to help busy professionals like **Taylor** easily discover meal ideas using the ingredients they already have. It demonstrates the use of **React.js** for the frontend and **TheMealDB API** for fetching real recipe data, and has been successfully deployed using **GitHub Pages**.
