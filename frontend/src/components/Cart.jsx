export const Cart = () => {
  return (
    <div className="container">
      <table className="table table-hover table-bordered mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Televisor</td>
            <td>
              <span className="material-icons-outlined block">paid</span>
              <span className="block">10.00</span>
            </td>
            <td className="d-flex justify-content-evenly">
              <button type="button" className="btn btn-info" data-toggle="tooltip" data-placement="top" title="Ver detalles">
                <span className="material-icons-outlined">info</span>
              </button>
              <button type="button" className="btn btn-danger" >
                <span className="material-icons-outlined">delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ventilador</td>
            <td>
              <span className="material-icons-outlined block">paid</span>
              <span className="block">10.00</span>
            </td>
            <td className="d-flex justify-content-evenly">
              <button type="button" className="btn btn-info" data-toggle="tooltip" data-placement="top" title="Ver detalles">
                <span className="material-icons-outlined">info</span>
              </button>
              <button type="button" className="btn btn-danger" >
                <span className="material-icons-outlined">delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Silla</td>
            <td className="">
              <span className="material-icons-outlined block">paid</span>
              <span className="block">10.00</span>
            </td>
            <td className="d-flex justify-content-evenly">
              <button type="button" className="btn btn-info" data-toggle="tooltip" data-placement="top" title="Ver detalles">
                <span className="material-icons-outlined">info</span>
              </button>
              <button type="button" className="btn btn-danger" >
                <span className="material-icons-outlined">delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <th colSpan="2" scope="row">Total</th>
            <td>
              <span className="material-icons-outlined block">paid</span>
              <span className="block">30.00</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
