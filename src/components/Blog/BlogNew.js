import { Container, Row } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {


  return (
    <div>
<Container fluid className="resume-section" style={{maxWidth: "880px", margin: "0 auto", padding: "0 20px"}}>
  <Row style={{ justifyContent: "center", position: "relative", marginTop:"40px" }}>
  <h2>Differences between DOM and Virtual DOM</h2> 
    <img src="https://www.rigelnetworks.com/wp-content/uploads/2017/05/Dom-1.png"  style={{ display: "block", margin: "auto", marginTop: "5%",marginBottom: "7%",}} alt="DOM vs Virtual DOM" />
    <br/><br/><br/>
    <p>DOM (Document Object Model) and Virtual DOM (Virtual Document Object Model) are two different representations of the same HTML or XML document.</p>

      <p>The Document Object Model (DOM) and Virtual DOM (Virtual Document Object Model) are two different representations of the same HTML or XML document. The DOM is a tree-like structure that represents the content of an HTML or XML document in a web browser. It is an in-memory representation of the HTML and XML elements of a web page and allows for manipulation and updating of content in real-time. The DOM is manipulated directly by JavaScript to update the content of a web page in real-time.</p>
      <p>However, the DOM can be slow and costly in terms of performance, especially in web pages with many elements. On the other hand, the Virtual DOM is a virtual in-memory representation of the DOM that is used in JavaScript libraries and frameworks like React, Vue, and Angular. The Virtual DOM is a copy in-memory of the real DOM that is kept in sync with the real DOM.</p>
      <p>The Virtual DOM is manipulated by the JavaScript framework or library instead of being manipulated directly by the developer. This means that the developer only needs to specify the changes they want to make, and the framework or library takes care of updating the Virtual DOM accordingly. The Virtual DOM is faster than the real DOM because the JavaScript framework or library only updates the elements that have changed, instead of updating the entire DOM.</p>
      <p>The Virtual DOM is a technique used to improve the performance and scalability of complex web applications, and allows for the creation of interactive and dynamic user interfaces with a lower load on the browser. This makes it possible to build more responsive and engaging web applications that can handle larger amounts of data and user interactions without sacrificing performance. Overall, the Virtual DOM is a powerful tool for web developers that can help them create better, more efficient web applications.</p>
    </Row>

  <Row style={{ justifyContent: "center", position: "relative", marginTop:"40px" }}>
  <h2>Differences between JavaScript and TypeScript</h2> 
        <img src="https://res.cloudinary.com/de4rvmslk/image/upload/f_auto,q_auto/Javascript_vs_typescript_key_differences.png"  style={{ display: "block", margin: "auto", marginTop: "5%",marginBottom: "7%"}} alt="DOM vs Virtual DOM" />
        <strong>Typing:</strong>
        <p>JavaScript is a dynamically-typed programming language, meaning that variables do not have an explicitly defined data type. TypeScript, on the other hand, is a strongly-typed language that allows for explicit data type definitions and is stricter about the types of data that can be assigned to a variable.</p>
        <strong>Compilation:</strong>
        <p>JavaScript is interpreted in real-time in the browser or on the server, while TypeScript needs to be compiled to JavaScript before it can be interpreted and executed.</p>
        <strong>Object Orientation:</strong>
        <p>JavaScript supports object-oriented programming, but its syntax is not as clear as that of other languages. TypeScript is based on object-oriented programming and has a clearer, more structured syntax for working with objects and classes.</p>
        <strong>Modules:</strong>
        <p>TypeScript has a more robust module system than JavaScript, making it easier to organize and reuse code.</p>
        <strong>Development Tools:</strong>
        <p>Being a more structured language with a stronger typing system, TypeScript has more advanced development tools than JavaScript, such as integration with code editors, autocomplete suggestions, and early detection of syntax errors.</p>
        <strong>Compatibility:</strong>
        <p>Since TypeScript is an extension of JavaScript, all JavaScript code is compatible with TypeScript, but not necessarily vice versa. That is, TypeScript code cannot be directly executed in a browser or JavaScript environment, but must be compiled to JavaScript beforehand.</p>
        <p>Overall, it can be said that TypeScript is an evolution of JavaScript that adds features that make it safer, more scalable, and easier to maintain in large and complex projects. However, JavaScript remains one of the most popular and versatile programming languages, especially for smaller and simpler projects.</p>
          </Row>
        </Container>


    </div>
  );
}

export default ResumeNew;
