import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} transition={{ duration: 3 }} animate={{ opacity: 1 }} className="home container">
      <motion.h2 whileHover={{ fontSize: 40, color: "red", x: "100px" }}>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button whileHover={{ scale: 1.1, opacity: 0.9, textShadow: "0px 0px 8px rgba(255, 255, 255)", boxShadow: "0px 0px 8px rgba(255, 255, 255)" }} whileTap={{ scale: 0.9 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
