export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark container-fluid">
      <a className="navbar-brand" href="#">Shopping</a>
      
      <button type="button" class="btn btn-dark position-relative me-3 mt-2">
        <span class="material-icons-outlined">shopping_cart</span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+<span class="visually-hidden">number of products</span>
        </span>
      </button>
    </nav>
  )
}