import { useState } from 'react';
import './index.css';

interface liststatusProps {
    status: string,
    children: React.ReactNode,
    text: string,
    disabled: string
}

export const Button = (props: liststatusProps) => {
    const [status, setStatus] = useState(props.status);
    const [disabled, setDisabled] = useState('');
    
    
    return  <button className={`btn btn-${status}`} disabled >{props.children}</button>
}

// Loai button
// Disable button
// Chen icon
// Loading