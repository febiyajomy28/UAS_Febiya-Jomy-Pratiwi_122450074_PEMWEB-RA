import React, { useState, useEffect } from "react";
import MenuForm from "../components/MenuForm";
import MenuList from "../components/MenuList";
import "../style/Menu.css";
import useFetch from "../services/Hooks/customFetch";

function Menu({ menus, setMenus }) {
  const [editingMenu, setEditingMenu] = useState(null);

  const menufetch = useFetch("http://127.0.0.1:6543/menu");

  useEffect(() => {
    if (menufetch.response?.data) {
      setMenus(menufetch.response?.data);
    }
  }, [menufetch.response?.data]);

  const handleAddMenu = (newMenu) => {
    setMenus([...menus, { ...newMenu, id: Date.now() }]);
  };

  const handleUpdateMenu = (updatedMenu) => {
    setMenus(
      menus.map((menu) => (menu.id === updatedMenu.id ? updatedMenu : menu))
    );
    setEditingMenu(null);
  };

  const handleDeleteMenu = (id) => {
    setMenus(menus.filter((menu) => menu.id !== id));
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Management Menu</h1>
      </div>
      <div className="menu-container">
        <MenuForm
          editingMenu={editingMenu}
          setEditingMenu={setEditingMenu}
          onAdd={handleAddMenu}
          onUpdate={handleUpdateMenu}
        />
        <MenuList
          menus={menus}
          onEdit={setEditingMenu}
          onDelete={handleDeleteMenu}
        />
      </div>
    </div>
  );
}

export default Menu;
