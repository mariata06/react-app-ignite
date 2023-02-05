import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../api";

//ACTION CREATOR

export const loadDetail = (id) => async (dispatch) => {
    //FETCH AXIOS
    const detailData = await axios.get(gameDetailURL(id));
    const screenshotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenshotData.data,
        },
    });
};