import './pages.css';
const AboutMe = () => { 
    return(
        <div className="about">
            <h1>ABOUT ME</h1>
            <h2 className='sub-heading'>EDUCATION</h2>
            <section className="education">
            
                <div className="box">
                    <img className="image" src="pagespictures/tenthclass.jpg" alt="tenth school"/>
                    <div className="content">
                        <h5>10th</h5>
                        <p>Institute: D.A.V Public School, Chandrasekharpur, BBSR</p>
                        <p className="marks">CGPA 10</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src="pagespictures/twelve.jpg" alt="twelth school"/>
                    <div className="content">
                        <h5>12th</h5>
                        <p >Institute: D.A.V Public School, Chandrasekharpur, BBSR</p>
                        <p className="marks">92.4%</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src="pagespictures/college.jpg" alt="btech college"/>
                    <div className="content">
                        <h5>B.Tech</h5>
                        <p>Institute: Silicon Insitute of Technology, BBSR</p>
                        <p className="marks">CGPA 9.5</p>
                    </div>
                </div>
            
            </section>
            <section className="skill">
            
                
                <h2 className='sub-heading'>SKILLS</h2>
                <ul className='skill-list'>
                    <li className='list-item'>Web Development Skills</li>
                    <li className='list-item'>Programming Skills</li>
                    <li className='list-item'>Soft Skills</li>
                    <li className='list-item'>Writing Skills</li>
                    
                </ul>
            
            </section>
            <section className="work">
            
                
                <h2 className='sub-heading'>WORK</h2>
                <div className="box-work">
                    <h5 className='work-head'><b>Contact Manager System</b></h5>
                    <p className='info'>A system created using <b>MEAN Stack</b>, which facilitates addition, deletion, updation of a person's contacts and their details. <hr></hr> A user who has registered, can login and store his/her contacts' list along with their details.</p>
                </div>
                <div className="box-work">
                    <h5 className='work-head'><b>Food Ordering Web App</b></h5>
                    <p className='info'>A landing page of a food ordering web app, created using <b>HTML,CSS, & JS</b>.</p>
                </div>
                <div className="box-work">
                    <h5 className='work-head'><b>Online e-exam Portal</b></h5>
                    <p className='info'>A full fleged web app, created using <b>HTML,CSS, JS and PHP</b>. It allows a student to login and appear online quizzes for any subject. <hr></hr> It allows a faculty, after proper login credentials, to prepare questions. The portal also facilitates discussion of queries regarding different subjects.</p>
                </div>
            
            </section>
            
        </div>
        

    )
}

export default AboutMe
