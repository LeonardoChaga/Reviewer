const API_KEY = '8e6a5a329b9f3b4ee2a7a295af009be7';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint: string) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const backendFetch = async (movieId: string) => {
    const req = await fetch(`http://localhost:3000/movies/${movieId}`);
    const json = await req.json();
    return json;
}

interface Movie {
    original_title: string,
}

interface Review {
    reviews: string[],
}

export async function getHomeList() {

    return[
        
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        

    ];
}

export async function getMovieName(id: string): Promise<Movie> {
    return await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`);
}

export async function getMovieReview(id: string): Promise<Review> {
    return await backendFetch(id);
}
