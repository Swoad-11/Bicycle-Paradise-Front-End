import { useEffect, useState } from "react";

const useItemDetail = itemId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://shrouded-sands-14035.herokuapp.com/items/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [itemId]);
    return [item]
}

export default useItemDetail;