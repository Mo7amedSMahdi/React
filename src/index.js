import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

//React Components

/* function NaveBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent(){
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
<div>
<NaveBar />
<MainContent />
</div>
,document.getElementById("root"));
 */

/* 
    !###################################################################
    !###################################################################
    !###################################################################
    ?                   Why React? It's declarative
    !###################################################################
    !###################################################################
    !###################################################################
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

/*  
    !###################################################################
    !###################################################################
    !###################################################################
    ?                            JSX
    !###################################################################
    !###################################################################
    !###################################################################
*/

// const h1 = document.createElement("h1");
// h1.textContent = "Hello world";
// h1.className = "header";
// console.log(h1);

// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);

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

// const navbar = (
//     <nav>
//         <h1>My website</h1>
//         <ul>
//             <li>Menue</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))

/*  
    !###################################################################
    !###################################################################
    !###################################################################
    ?  Thought experiment: use .appened() instead of ReactDOM.render()
    !###################################################################
    !###################################################################
    !###################################################################
*/

/**
*Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const page  = (
//   <div>
//     <h1>My awesom website in React</h1>
//     <h3>Reasonse I love react</h3>
//     <ol>
//       <li>It's composable</li>
//       <li>It's declarative</li>
//       <li>It's a hireable skill</li>
//       <li>It's a activitly maintained by skilled people</li>
//     </ol>
//   </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
//   const page = (
//     <div>
//         <img src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

/*  
    !###################################################################
    !###################################################################
    !###################################################################
    ?                       Custom components
    !###################################################################
    !###################################################################
    !###################################################################
*/
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

// function CustomPageComponent() {
//   return (
//     <>
//       <header>
//         <nav>
//           <img
//             width="40px"
//             src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"
//           />
//         </nav>
//       </header>
//       <h1>Reasons I'm excited to learn React</h1>
//       <ol>
//         <li>
//           It's a popular library, so I'll be able to fit in with the cool kids!
//         </li>
//         <li>I'm more likely to get a job as a developer if I know React</li>
//       </ol>
//       <footer>
//         <small>© 2021 Ziroll development. All rights reserved.</small>
//       </footer>
//     </>
//   );
// }
// ReactDOM.render(<CustomPageComponent />, document.getElementById("root"));

/*  
    !###################################################################
    !###################################################################
    !###################################################################
    ?                     Parent/Chiled Components
    !###################################################################
    !###################################################################
    !###################################################################
*/

// function Header() {
//   return (
//     <header>
//       <nav>
//         <img
//           width="40px"
//           src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"
//         />
//       </nav>
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <small>© 2021 Ziroll development. All rights reserved.</small>
//     </footer>
//   );
// }
// function MainContent() {
//   return (
//     <div>
//       <h1>Reasons I'm excited to learn React</h1>
//       <ol>
//         <li>
//           It's a popular library, so I'll be able to fit in with the cool kids!
//         </li>
//         <li>I'm more likely to get a job as a developer if I know React</li>
//       </ol>
//     </div>
//   );
// }

// function Page() {
//   return (
//     <>
//       <Header />
//       <MainContent />
//       <Footer />
//     </>
//   );
// }
// ReactDOM.render(<Page />, document.getElementById("root"));

/*  
    !###################################################################
    !###################################################################
    !###################################################################
    ?                     Styling with classes
    !###################################################################
    !###################################################################
    !###################################################################
*/

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/


function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));