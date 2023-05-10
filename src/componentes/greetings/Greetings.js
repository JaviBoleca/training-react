import {useEffect}from 'react';
const Greetings = (props) => {
    const message = `Hello ${props.name}`;
    useEffect(() => {
        document.title = `greetings to ${props.name}`;
    }, [props.name]);
    return (<h1>{message}</h1>);
}