"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start : function() {
         personalMovieDB.count = +prompt("Скільки фільмів ви подивились","");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Скільки фільмів ви подивились?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2;i++) {
            const a = prompt("Один з останніх переглянутих фільмів", ''),
                  b = prompt("Яку оцінку йому поставите", '');
    
            if (a != null && b !=  null && a != "" && b != "" && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Переглянуто мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Ви класичний глядач");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ви кіноман");
        } else {
            console.log("Винекла помилка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYouGenres: function() {
        for (let i = 1; i <=3; i++) {
            let genre = prompt(`Ваш олюблений жанр пiд номером ${$}`).toLowerCase();
            if (genre == "" || genre == null) {
                console.log("Ви ввели некоректні данні");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимий жанр ${i + 1} - це ${item}`);
        });
    }
};



