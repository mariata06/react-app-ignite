import React from 'react';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';

const Game = ({name, released, image, id}) => {
    // Load Detail Handler
    //Загрузка данных игры
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }

    return(
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image} alt={name}></img>
            </Link>
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;