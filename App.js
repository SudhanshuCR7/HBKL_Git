import React from "react"
import ReactDOM from "react-dom/client"


const heading1  = React.createElement("h1", {id:"heading" , juju:"zuzu", key:"1"}, "Hum bhi bana lenge")
const heading2  = React.createElement("h2", {id:"heading2" , juju:"tina", key:"2"}, "Tum bhi bana loge")
const container = React.createElement("div",{id:"container"}, [heading1,heading2] )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
