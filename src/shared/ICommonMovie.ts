
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

export interface IUser{
    uid: string,
    email :string
}

export interface ISubscription{
    current_period_end:number
}

export interface IProduct{
    productId:string
    name:string,
    description:string,
    prices:IPrice
}
export interface IPrice{
    priceId:string
}