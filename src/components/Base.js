import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.5, type: "spring" }} className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button transition={{ duration: 2, type: "spring", stiffness: 200 }} initial={{ x: -1000 }} animate={{ x: 0 }}>
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Base;
