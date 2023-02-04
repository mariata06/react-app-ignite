const initState = {
    popular: [],
    newgames: [],
    upcoming: [],
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming, 
                newgames: action.payload.newgames,  
            };
        default:   
            return { ...state};
    }
};

export default gamesReducer;