import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {
    const handleClosing = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{ opacity:1 }}
             className="backdrop" 
             onClick={handleClosing}>
            <motion.img
                initial={{ y: "-100vh" }}
                animate={{ y:0 }}
                src={selectedImg} alt="full-sized"/>
        </motion.div>
    )
}
export default Modal