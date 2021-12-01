export const InputUsername = () => {
  return (
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
  )
}
