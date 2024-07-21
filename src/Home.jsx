import React,{useState, useContext } from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';
import Products from './Products';
import { UserContext } from './App';
import Content from './Content';
import Categories from './Categories';
import Customer from './Customer';
import Inventory from './Inventory';
import Reports from './Reports';


const Home = () => {

  const comp = useContext(UserContext);

  let content;

  if (comp === "products") {
    content = <Products />;
  }else if(comp === 'categories'){
    content = <Categories />
  }else if(comp === 'content'){
    content = <Content />
  }else if(comp === 'customer'){
    content = <Customer />
  }else if(comp === 'inventory'){
    content = <Inventory />
  }else if(comp === 'reports'){
    content = <Reports />
  }


  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Dashboard</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
      <div >
        {content}
      </div>
    </main>
  );
}

export default Home
