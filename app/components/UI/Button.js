export default function Button(props) {
    const classes = `btn btn-secondary ${props.className}`;

    return <button className= {classes}>{props.children}</button>
};