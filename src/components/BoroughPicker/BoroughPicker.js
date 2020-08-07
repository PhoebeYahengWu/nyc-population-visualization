import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './BoroughPicker.module.css';



const BoroughPicker = ({ boroughs, handleBoroughChange }) => {
    return (
        <FormControl className = { styles.formControl }>
            <NativeSelect defaultValue="" onChange={(e) => handleBoroughChange(e.target.value)}> 
         
                {boroughs.length? boroughs.map((borough, i) => {return(<option key={i} value={borough.borough}>{borough.borough}</option>)}):null}
           
            </NativeSelect>
        </FormControl>
    )
}
export default BoroughPicker;  