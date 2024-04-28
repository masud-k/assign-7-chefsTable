import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Menu from "./Menu";


const Menus = ({handleMenu}) => {
    const [menus, setMenus] = useState([]);

    useEffect( () => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    return (
        <div className="grid grid-cols-2 gap-4">
            {
                menus.map((menu, idx) => <Menu 
                    key={idx} menu={menu}
                    handleMenu={handleMenu}
                    ></Menu>)
            }
        </div>
    );
};

Menus.propTypes = {
    handleMenu: PropTypes.func.isRequired
};

export default Menus;