import React, {useEffect} from "react"; 
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
// Styling and Animation
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Home = () => {
    //FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    //Получает обратно данные с игр
    const {popular, upcoming, newgames} = useSelector((state) => state.games);
    // console.log(games);
    return (
        <GameList>
            <h1>Upcoming Games</h1>
            <Games>
                {upcoming.map((game) => (
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id} 
                        image={game.background_image} 
                        key={game.id}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;