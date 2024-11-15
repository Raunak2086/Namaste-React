{/* <div id="root">
    <div id="rootkachild">
        <h1>kaise ho?</h1>
    </div>
</div> */}

const parent = React.createElement("div",{id:"root"},React.createElement("div",{id:"rootkachildren"},[
    React.createElement("h2",{id:"heading"},"Kaise ho?"),
    React.createElement("h2",{},"ek dam mast")
]
)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);