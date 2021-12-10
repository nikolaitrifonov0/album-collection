import { useHistory } from "react-router";
import { useContext, useEffect } from "react/cjs/react.development";
import AuthenticationContext from "../contexts/AuthenticationContext";
import { likeReview } from "../services/database";

export default function LikeReview({ match }) {
    const history = useHistory();
    const userId = useContext(AuthenticationContext);

    useEffect(() => {
        likeReview(match.params.id, userId)
        .then(res => history.push(`/details/${res.albumId}`));
    }, []);

    return null;
}