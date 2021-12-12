import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Logout({ logout }) {
    const history = useHistory();

    useEffect(() => {
        logout();
        history.push('/');
    }, []);

    return null;
}