import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { deleteReview } from "../services/database";

export default function DeleteReview({ match }) {
    const history = useHistory();

    useEffect(() => {
        deleteReview(match.params.id)
        .then(res => history.push(`/details/${res.albumId}`));
    }, []);

    return null;
}