import './About.css'

function About() {
  return (
     <div className="centered-text">
        <h2>Corporate Values</h2>
        <p>Over the last few years we have seen several large companies de-platform content creators because
           their material is sexual in nature. This is an injustice. We owe our content
           creators a safe space to produce whatever type of content they would like to produce. Be it sexual,
           or not, in nature. This space should be safe and permanent.
        </p>

        <p>Trystr welcomes all types of content, but we have started our space with sex work in mind, because
           this community is being underserved. As we develop we will seek to create spaces for other types
           of content to be made, and we will seek to allow users to curate that content as they wish.
        </p>

        <p>That being said, we seek to create a space which is inclusive, free of rhetoric which is harmful
           to groups which are protected, or should be protected. This includes, but is not limited to
           Women, Sex workers, BIPOC, LGBTQIA+, amongst other groups. Trystr will not be a space where
           hate speech, harrassment, or explotation will be tolerated. These values are important to us,
           as well as the following values.
        </p>
     <div className="value-container">
        <h2 className="value-header">Transparency</h2>
        <p className="value">Communicating honestly with respect to content creation and dissemination decisions</p>
     </div>
     <div className="value-container">
        <h2 className="value-header">Safety</h2>
        <p className="value">Protecting their physical safety</p>
     </div>
     <div className="value-container">
        <h2 className="value-header">Security</h2>
        <p className="value">Protecting their digital safety</p>
     </div>
     <div className="value-container">
        <h2 className="value-header">Allyship</h2>
        <p className="value">Believing women, and supporting them in their journey</p>
     </div>
     <div className="value-container">
        <h2 className="value-header">Support</h2>
        <p className="value">Believing sex work is work</p>
     </div>
    </div>
  );
}

export default About;
