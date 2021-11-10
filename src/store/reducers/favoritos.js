const ADICIONAR_FAVORITO = 'favoritos/ADD_FAVORITO';
const REMOVER_FAVORITO = 'favoritos/REMOVER_FAVORITO';

var initialState = {
    favoritos: []
};

export default function(state, action){

    if(!state) state = initialState;

    switch (action.type) {
        case ADICIONAR_FAVORITO:
            return {
                ...state,
                favoritos: [ 
                    ...state.favoritos,
                    action.payload.movie
                ]
            }

        case REMOVER_FAVORITO:
            return {
                ...state,
                favoritos: Array.from(state.favoritos)
                    .filter(x => x.id != action.payload.movieId)
            }
    }

    return state;
}


export function adicionarFavorito(movie){
    return {
        type: ADICIONAR_FAVORITO,
        payload: {
            movie
        }
    };
}

export function removerFavorito(movieId){
    return {
        type: REMOVER_FAVORITO,
        payload: {
            movieId
        }
    };
}