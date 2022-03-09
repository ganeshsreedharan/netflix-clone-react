
export interface Movie {
    id?: string;
    title?: string;
    name?: string;
    original_name?: string;
    overview?: string;
    backdrop_path?: string;
    poster_path?: string;
}
export type ResponseMovieData = {
    results: Movie[];
};
