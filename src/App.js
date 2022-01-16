import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container  p-5 my-5 bg-dark text-white">
          <h1>TODOAPP</h1>
          <div class="card-columns pt-5">
            <div class="card bg-primary">
              <link
                rel="stylesheet"
                href="https://media.istockphoto.com/vectors/update-icon-application-progress-upgrade-vector-id1194891684"
                integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
                crossorigin="anonymous"
              />
              <div class="card-body text-center">
                <form action="editform">
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input
                      type="text"
                      class="form-control"
                      formControlName="title"
                      id="title"
                      placeholder="Create"
                    />
                  </div>
                  <div class="form-group">
                    <label for="description">Description</label>
                    <input
                      type="text"
                      class="form-control"
                      formControlName="description"
                      id="description"
                      placeholder="Created Info"
                    />
                  </div>

                  <button class="btn btn-secondary">Create Todo</button>
                </form>
              </div>
            </div>
          </div>
          <div class="toast" data-autohide="false">
            <div class="toast-header">
              <strong class="mr-auto text-primary">Toast Header</strong>
              <small class="text-muted">5 mins ago</small>
              <button
                type="button"
                class="ml-2 mb-1 close"
                data-dismiss="toast"
              >
                &times;
              </button>
            </div>
            <div class="toast-body">Some text inside the toast body</div>
          </div>
          <div class="card-columns pt-5">
            <div class="card bg-primary">
              <link
                rel="stylesheet"
                href="https://media.istockphoto.com/vectors/update-icon-application-progress-upgrade-vector-id1194891684"
                integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
                crossorigin="anonymous"
              />
              <div class="card-body text-center">
                <form action="editform">
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input
                      type="text"
                      class="form-control"
                      formControlName="title"
                      id="title"
                      placeholder="Update Your Info"
                    />
                  </div>
                  <div class="form-group">
                    <label for="description">Description</label>
                    <input
                      type="text"
                      class="form-control"
                      formControlName="description"
                      id="description"
                      placeholder="Updated Info"
                    />
                  </div>
                  <button class="btn btn-secondary">Update Todo</button>
                </form>
              </div>
            </div>
          </div>
          <div class="card-columns pt-5">
            <div class="card bg-primary">
              <link
                rel="stylesheet"
                href="https://media.istockphoto.com/vectors/update-icon-application-progress-upgrade-vector-id1194891684"
                integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
                crossorigin="anonymous"
              />
              <div class="card-body text-center">
                <form action="editform">
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input
                      type="text"
                      class="form-control"
                      formControlName="title"
                      id="title"
                      placeholder="Delete Your Info"
                    />
                  </div>
                  <div class="form-group">
                    <label for="description">Description</label>
                    <input
                      type="text"
                      class="form-control"
                      formControlName="description"
                      id="description"
                      placeholder="Deleted Info"
                    />
                  </div>
                  <button class="btn btn-secondary">Delete Todo</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
