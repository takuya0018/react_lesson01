import { useState } from "react"

const Form = function(){
  const [ city, setCity ] = useState<string>("")
  return (
    <form>
      <input type="text" name="city" placeholder="都市名" onChange={ function(e){ setCity(e.target.value )}} />
      {city}
      <button type="submit">Get Weather</button>
    </form>
  )
}

export default Form