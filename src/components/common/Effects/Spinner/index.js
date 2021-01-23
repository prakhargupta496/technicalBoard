import React from 'react';
import { motion } from 'framer-motion';
import { FaCircleNotch as Spinner } from "react-icons/fa";
import Styles from './spinner.module.css';

function Loading(props) {
    return (
        <div className={Styles.spinner} >
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 0.8, repeat: Infinity }} >
                <Spinner className={Styles.icon} />
            </motion.div>
        </div>
    );
}


export default Loading;