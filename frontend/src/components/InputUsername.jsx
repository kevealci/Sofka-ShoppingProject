import { useContext } from "react"
import { shoppingContext } from "../context/shoppingContext"

export const InputUsername = () => {
  const {state: {product}} = useContext(shoppingContext)

  console.log(`product`, product)

  return (
    <div className="row">
        <div className="col"></div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <div className="col"></div>
      </div>
  )
}
