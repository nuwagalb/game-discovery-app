//Reusable Bootstrap Button Component
//My Solution
import React from 'react';

interface Props {
    children: string;
    //? => color property is optional
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

function Button({ children, onClick, color = 'primary'}: Props) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button