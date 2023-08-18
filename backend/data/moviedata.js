const moviedata = [
    {
        "title": "Knives Out",
        "director": "Rian Johnson",
        "studio": "Lionsgate",
        "genre": "Comedy, Mystery",
        "cast": "Daniel Craig, Ana de Armas, Chris Evans, Jamie Lee Curtis",
        "description": "A detective investigates the death of the patriarch of an eccentric, combative family.",
        "image": "../movie-posters/knives-out.jpg"
    },
    {
        "title": "Star Wars: A New Hope",
        "director": "George Lucas",
        "studio": "LucasFilm",
        "genre": "Sci-Fi, Adventure",
        "cast": "Mark Hamill, Harrison Ford, Carrie Fisher, James Earl Jones",
        "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        "image": "../movie-posters/starwars.jpg"
    },
    {
        "title": "American Psycho",
        "director": "Mary Harron",
        "studio": "Lionsgate",
        "genre": "Comedy, Horror",
        "cast": "Christian Bale, Jared Leto, Willem Defoe, Reese Witherspoon",
        "description": "In New York City in 1987, a handsome, young urban professional, Patrick Bateman, lives a second life as a gruesome serial killer by night.",
        "image": "../movie-posters/american-psycho.jpg"
    },
    {
        "title": "The Avengers",
        "director": "Anthony Russo, Joss Whedon, Joe Russo",
        "studio": "Marvel",
        "genre": "Superhero, Adventure",
        "cast": "Robert Downey Jr. , Chris Evans, Scarlett Johansson, Tom Hiddleston",
        "description": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        "image": "../movie-posters/avengers.jpg"
    },
    {
        "title": "Barbie",
        "director": "Greta Gerwig",
        "studio": "Warner Bros.",
        "genre": "Comedy, Fantasy",
        "cast": "Margot Robbie, Ryan Gosling, Will Ferrell, America Ferrera",
        "description": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        "image": "../movie-posters/barbie.jpg"
    },
    {
        "title": "The Dark Knight ",
        "director": "Christopher Nolan",
        "studio": "Warner Bros.",
        "genre": "Superhero, Drama",
        "cast": "Christian Bale, Heath Ledger, Gary Oldman, Aaron Eckhart",
        "description": "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
        "image": "../movie-posters/batman.jpg"
    },
    {
        "title": "Spider-Man: No Way Home",
        "director": "Jon Watts",
        "studio": "Marvel",
        "genre": "Superhero, Action",
        "cast": "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon",
        "description": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        "image": "../movie-posters/spiderman.jpg"
    },
    {
        "title": "Parasite",
        "director": "Bong Joon-ho",
        "studio": "CJ Entertainment",
        "genre": "Drama, Thriller",
        "cast": "Choi Woo-shik, Cho Yeo-jeong, Song Kang-ho, Park So-dam",
        "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        "image": "../movie-posters/parasite.jpg"
    }
];

function getMovieById(movieId) {
    const movie = moviedata.find(movie => movie.title === movieId);
    return movie;
};

module.exports = {moviedata, getMovieById}