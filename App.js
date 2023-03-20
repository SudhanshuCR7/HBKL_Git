import React from "react"
import ReactDOM from "react-dom/client"

// const heading = <h1 id="one">Kvara</h1>


// const heading1  = React.createElement("h1", {id:"heading" }, "Kvara")
// const heading2  = React.createElement("h2", {id:"heading2"}, "Foden")
// const heading3  = React.createElement("h3", {id:"heading3"}, "Almiron")
// const container = React.createElement("div",{id:"container"}, [heading1,heading2,heading3] )

const Heading = () => <h2>dalot</h2>

const Header = () => {
    return(
        <>
        <h2>RB</h2>
        <Heading/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)
