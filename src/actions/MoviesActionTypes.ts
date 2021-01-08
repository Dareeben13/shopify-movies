export const MOVIES_LOADING = "MOVIES_LOADING";
export const MOVIES_SUCCESS = "MOVIES_SUCCESS";
export const MOVIES_FAILURE = "MOVIES_FAILURE";


export type MoviesType = {
  Search: Movie[]
}

export type Movie = {
   Title : string,
   Year : string
}


export interface MoviesLoading{
    type : typeof MOVIES_LOADING
}
export interface MoviesSuccess{
    type : typeof MOVIES_SUCCESS,
    payload: MoviesType
}
export interface MoviesFailure{
    type : typeof MOVIES_FAILURE
}

export type MoviesDispatchTypes = MoviesLoading | MoviesSuccess | MoviesFailure