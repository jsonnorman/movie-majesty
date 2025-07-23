// -We define a function called generateMoviesHTML using an arrow function syntax.
// -Inside the function, we initialize an empty string variable called movieHTML to store the generated HTML markup.
// -We use a for...of loop to iterate over each movie object in the movies array.
// -For each movie, we generate an HTML structure using template literals:
// --We create an <article> element with the class "movie" to represent each movie card.
// --Inside the <article>, we have an <img> element that displays the movie poster image. The src attribute is set to the poster property of the movie object, and the alt attribute is set to the movie title followed by "poster" for accessibility.
// --We also have a <div> element with the class "movie__details" to hold the movie title and description.
// --The movie title is wrapped in an <h2> element with the class "movie__title".
// --The movie description is wrapped in a <p> element with the class "movie__description".
// -We concatenate each generated movie HTML to the movieHTML string.
// -Finally, we return the movieHTML string containing the generated HTML markup for all the movies.


import { movies } from './movies-data.js';

export const generateMoviesHTML = () => {
   let movieHTML = '';

   for (const movie of movies) {
       movieHTML += `
           <article class="movie">
               <img src="${movie.poster}" alt="${movie.title} poster" class="movie__poster">
               <div class="movie__details">
                   <h2 class="movie__title">${movie.title}</h2>
                   <p class="movie__description">${movie.description}</p>
               </div>
           </article>
       `;
   }

   return movieHTML
};