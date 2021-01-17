export const MOVIES_LOADING = "MOVIES_LOADING";
export const MOVIES_SUCCESS = "MOVIES_SUCCESS";
export const MOVIES_FAILURE = "MOVIES_FAILURE";
export const NOMINATE_MOVIE = "NOMINATE_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const DISABLE_BUTTON = "DISABLE_BUTTON";


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
    type : typeof MOVIES_FAILURE,
}

export interface NominateMovie{
    type : typeof NOMINATE_MOVIE,
    payload: Movie
}

export interface RemoveMovie{
    type : typeof REMOVE_MOVIE,
    payload: Movie
}

export interface disableButton{
    type : typeof DISABLE_BUTTON,
    payload: string
}

export type MoviesDispatchTypes = MoviesLoading | MoviesSuccess | MoviesFailure | NominateMovie  | RemoveMovie | disableButton