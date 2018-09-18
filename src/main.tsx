import * as React from "react"
import { render } from "react-dom"

const mystyle: React.CSSProperties = { color: "green", }
interface Mytagprops {
    lang?: boolean
}

const Mytag = ({ lang }: Mytagprops) => <h1 style={mystyle}> Ali {lang ? "sida" : "Page"} </h1>

render(<Mytag lang={false} />, document.getElementById("App123"))
