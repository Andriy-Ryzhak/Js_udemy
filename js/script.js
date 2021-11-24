'use strict';


const number0fFilms = +prompt("Скільки фільмів ви вже переглянули?", '');
console.log(number0fFilms);

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt("Скільки фільмів ви вже переглянули?", ''), 
	  b = prompt("На скільки оцінете його?", ''),
	  c = prompt("Скільки фільмів ви вже переглянули?", ''), 
	  d = prompt("На скільки оцінете його?", ''); 



	  personalMovieDB.movies[a] = b;
	  personalMovieDB.movies[c] = d;

	  console.log(personalMovieDB);