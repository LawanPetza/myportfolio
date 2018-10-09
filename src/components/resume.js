import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <h2 style={{paddingTop: '2em',}}>Lawan H. Petza</h2>
                    <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    <h5>Address</h5>
                    <p>13528 Canterbury Castle Dr, Charlotte, NC 28273</p>
                    <h5>Phone</h5>
                    <p>(704) 606-5454</p>
                    <h5>Email</h5>
                    <p>Lawan.Petza@Gmail.com</p>
                    <h5>Website</h5>
                    <p>MyWebsite.com</p>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    
                    <Cell className="resume-right-col" col={8}>
                    <h2>Experience</h2>
                    <Experience
                    startYear={2009}
                    endYear={2012}
                    jobName="Accoutant"
                    jobDescription="blah blah"
                    
                    />
                      <Experience
                    startYear={2009}
                    endYear={2012}
                    jobName="Accoutant"
                    jobDescription="blah blah"
                    />
                      <Experience
                    startYear={2009}
                    endYear={2012}
                    jobName="Accoutant"
                    jobDescription="blah blah"
                    />
                    <hr style={{borderTop: '3px solid #e22947'}}/>

 
                    <h2>Eduction</h2>

                    <Education
                    startYear={2000}
                    endYear={2004}
                    schoolName="UNC"
                    schoolDescription="Charlotte"
                    />
                    <Education
                    startYear={2000}
                    endYear={2004}
                    schoolName="UNC"
                    schoolDescription="Charlotte"
                    />
                    <hr style={{borderTop: '3px solid #e22947'}}/>

                    <h2>Skills</h2>
                  
                    <p>•HTML5, CSS and JavaScript( jQuery, MomentJS, Node, Express, Bootstrap & Handlebars, Sequelize, ReactJS, APIs and AJAX) GitHub, Git</p>
                    
                    

                    </Cell>
                </Grid>


            </div>

        )
    }
}

export default Resume;