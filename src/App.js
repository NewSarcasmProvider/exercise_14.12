import React, { useState } from "react"
import Range from "./Components/Range"

export default function App() {

  function Backcolor(color) {
    document.body.style.background = color;
  }

  function rgb(values) {
    return 'rgb(' + values.join(', ') + ')';
  }

  const [values, setvalues] = useState([
    { id: "R", val: 255 },
    { id: "G", val: 235 },
    { id: "B", val: 215 }
  ])

  let RGB = [255, 255, 255]

  const createValues0 = (createValue) => {
    RGB[0] = createValue
    Backcolor(rgb(RGB))
  }

  const createValues1 = (createValue) => {
    RGB[1] = createValue
    Backcolor(rgb(RGB))
  }

  const createValues2 = (createValue) => {
    RGB[2] = createValue
    Backcolor(rgb(RGB))
  }

  return (

    <div className="App">
      <div>React Color Mixer</div>

      <Range create={createValues0} key={values[0].id} />
      <Range create={createValues1} key={values[1].id} />
      <Range create={createValues2} key={values[2].id} />

    </div>
  )
}


//      ( •_•)O*¯`·.¸.·´¯`°Q(•_• )