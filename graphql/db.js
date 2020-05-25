export let movies = [
    {
        id: 1,
        name: "LaLaLand",
        score: 5
    },
    {
        id: 2,
        name: "Whiplash",
        score: 5
    },
    {
        id: 3,
        name: "MadMax",
        score: 5
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0]
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if ( movies.length > cleanedMovies.length ) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score, 
    };
    movies.push(newMovie);
    return newMovie;
};
