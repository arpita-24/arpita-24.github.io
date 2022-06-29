import './pages.css';
const AboutMe = () => {
    return(
        <div className="about">
            <h1>ABOUT ME</h1>
            <h2>EDUCATION</h2>
            <section className="education">
            
                <div className="box">
                    <img className="image" src="pagespictures/image1.png" alt="tenth school"/>
                    <div className="content">
                        <h5>10th</h5>
                        <p>Institute: D.A.V Public School, Chandrasekharpur, BBSR</p>
                        <p className="marks">CGPA 10</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src="pagespictures/image1.png" alt="twelth school"/>
                    <div className="content">
                        <h5>12th</h5>
                        <p >Institute: D.A.V Public School, Chandrasekharpur, BBSR</p>
                        <p className="marks">92.4%</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src="pagespictures/image1.png" alt="btech college"/>
                    <div className="content">
                        <h5>B.Tech</h5>
                        <p>Institute: Silicon Insitute of Technology, BBSR</p>
                        <p className="marks">CGPA 9.5</p>
                    </div>
                </div>
            
            </section>
            <section className="skill">
            
                
                <h2>SKILLS</h2>
                <ul>
                    <li>Web Development Skills</li>
                    <li>Programming Skills</li>
                    <li>Soft Skills</li>
                    <li>Writing Skills</li>
                    
                </ul>
            
            </section>
            <section className="work">
            
                
                <h2>WORK</h2>
                <div className="box">
                    <h5>10th</h5>
                    <p>Institue:</p>
                </div>
                <div className="box">
                    <h5>12th</h5>
                    <p>Heloo hiii byeee byeeeeee byeeeeeeee</p>
                </div>
                <div className="box">
                    <h5>B.tech</h5>
                    <p>Heloo hiii byeee byeeeeee byeeeeeeee</p>
                </div>
            
            </section>
            
        </div>
        

    )
}

export default AboutMe