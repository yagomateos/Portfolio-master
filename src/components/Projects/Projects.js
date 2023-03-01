import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          React <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CrytoAPI"
              description="Cryptocurrency API using React.js and Material-UI that dynamically updates currency and features Spinner.js for loading."
              ghLink="https://github.com/yagomateos/criptos-react"
              demoLink="https://cotizador-criptos-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Liryks Music APP"
              description="Developed a React app with Redux that clones Spotify using the Shazam Core API. Features MusicPlayer components for control player UI."
              ghLink="https://github.com/yagomateos/lyriks"
              demoLink="https://lyriks-wheat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Commerce Site"
              description="Next.js and Tailwind-based starter kit for high-performance e-commerce sites. Clone, deploy and fully customize your own store with ease."
              ghLink="https://github.com/yagomateos/commerce-site"
              demoLink="https://commerce-site-umber.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Car Insurance Calculator"
              description="React-based car insurance calculator utilizing react-router-dom and Bootstrap React. Provider.js adjusts constant values based on percentage, car model, year, and plan."
              ghLink="https://github.com/yagomateos/cotizador"
              demoLink="https://cotizador-seguros-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Guitar Shop Web App"
              description="Guitar Shop built with Strapi and Remix Run in React. Strapi acts as the Headless CMS with products saved as JSON files, rendering on the Remix frontend."
              ghLink="https://github.com/yagomateos/guitarla-remix"
              demoLink="https://guitarla-next-navy-six.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Citas Veterinaria"
              description="Registration web app using Context API and Json server for database storage. Users can register and modify data, and manage patient lists. Regex-based error logging included."
              ghLink="https://github.com/yagomateos/citas-react"
              demoLink="https://citas-react-46tp.vercel.app/"
            />
          </Col>






            {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Commerce Site"
              description="Starter kit for high-performance e-commerce sites. With a few clicks, Next.js developers can clone, deploy and fully customize their own store."
              ghLink="hhttps://github.com/yagomateos/commerce-site"
              demoLink="https://commerce-site-umber.vercel.app/
            />
          </Col> */}



          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
