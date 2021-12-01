import { Cart } from "../components/Cart"
import { InputUsername } from "../components/InputUsername"



export const ShoppingCart = () => {
  return (
    <>
      <Cart/>
      <InputUsername/>
      <div className="d-flex justify-content-evenly">
        <button type="button" className="btn btn-success" data-toggle="tooltip" data-placement="top" title="Confirmar compra">
          <span className="material-icons-outlined">done</span>
        </button>
        <button type="button" className="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Cancelar compra">
          <span class="material-icons-outlined">highlight_off</span>
        </button>
      </div>
    </>
  )
}
