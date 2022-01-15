

//React Components

// function NaveBar(){
//     return(
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//              <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent(){
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
// <div>
// <NaveBar />
// <MainContent />
// </div>
// ,document.getElementById("root"));

/*  ###################################################################
    ###################################################################
    ###################################################################
                    Why React? It's declarative
    ###################################################################
    ###################################################################
    ###################################################################
*/

//ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imparative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

/*  ###################################################################
    ###################################################################
    ###################################################################
                                JSX
    ###################################################################
    ###################################################################
    ###################################################################
*/

const h1 = document.createElement("h1");
h1.textContent = "Hello world";
h1.className = "header";
console.log(h1);

const element = <h1 className="header">This is JSX</h1>;
console.log(element);

// JSX
// !ReactDOM.render(element, document.getElementById("root"));

// const page  =( 
// <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
// </div>)

// ReactDOM.render(
//     page, document.getElementById("root")
// )

const navbar = (
    <nav>
        <h1>My website</h1>
        <ul>
            <li>Menue</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
