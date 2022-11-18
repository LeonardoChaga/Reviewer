const API_KEY = '8e6a5a329b9f3b4ee2a7a295af009be7';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint: string) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}



interface Tendencies {
    original_title: string,
}

export async function getTendenciesList() {

    return[
        
        {
            slug: 'toprated',
            title: 'Tendências',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },

    ];
}

export async function getTendencieName(id: string): Promise<Tendencies> {
    return await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`);
}

export default getTendenciesList;