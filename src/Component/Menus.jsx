
import { useEffect, useState } from "react";
import Menu from "./Menu";


const Menus = () => {
    const [menus, setMenus] = useState([]);

    useEffect( () => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    return (
        <div className="grid grid-cols-2 gap-4">
            {
                menus.map(menu => <Menu key={menu.id} menu={menu}></Menu>)
            }
        </div>
    );
};

export default Menus;