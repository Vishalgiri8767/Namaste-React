// const root = document.querySelector('.root');
// const heading = document.createElement('h1');
// heading.innerHTML=('hello world');
// root.appendChild(heading);


const heading = React.createElement(
    'h1',
    { id:"heading" },
    "hello world from react"
    );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
console.log(heading);        // js object...
