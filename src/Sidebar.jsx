import React,{useState} from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'


const Sidebar = ({openSidebarToggle, OpenSidebar, setComp}) => {


  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setComp('products')}>
          <a onClick={() => setComp('products')}>
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setComp('categories')}>
          <a onClick={() => setComp('categories')}>
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setComp('customer')}>
          <a onClick={() => setComp('customer')}>
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setComp('inventory')}>
          <a onClick={() => setComp('inventory')}>
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item" onClick={() => setComp('reports')}>
          <a onClick={() => setComp('reports')}>
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar
