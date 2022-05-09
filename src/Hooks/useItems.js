import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-sands-14035.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
}

export default useItems;