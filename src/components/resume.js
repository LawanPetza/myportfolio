import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from "./skills";


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <h2 style={{ paddingTop: '2em', }}>Lawan H. Petza</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Web Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                        <h5>Address</h5>
                        <p>13528 Canterbury Castle Dr, Charlotte, NC 28273</p>
                        <h5>Phone</h5>
                        <p>(704) 606-5454</p>
                        <h5>Email</h5>
                        <p>Lawan.Petza@Gmail.com</p>
                        <h5>Website</h5>
                        <p>MyWebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Employment Detail</h2>
                        <Experience
                            startMonth={7}
                            startYear={2012}
                            endMonth={12}
                            endYear={2016}
                            jobName="PURCHASING AGENT "
                            companyName="Fleco Industries (Dallas, Texas)"
                            jobDescription="Prepared purchase orders by verifying specifications and price; obtaining recommendations from vendors for substitute items. Negotiated with vendors for the purpose of resolving purchasing issues and/or ensuring purchases are within our requirements/regulations. Maintained 95% on-time delivery status. Verified receipt of items received to items ordered; contacting and resolving shipment errors with vendors. Contacted vendors for monetary reimbursement (RMA/RGA) when company received damaged product or insufficient quantities. Responsible for monitoring performance of the business and managing imbalance between supply/demand through the Sales & Operations planning process."
                        />

                        <Experience
                            startMonth={2}
                            startYear={2009}
                            endMonth={10}
                            endYear={2009}
                            jobName="ADMINISTRATOR SUPPORT "
                            companyName="Tetra Pak Services (Bangkok, Thailand)"
                            jobDescription="Performed project profit and loss analysis. Administered cash reimbursements. Processed purchase orders for specific projects. Coordinated between internal engineers and inventory department."
                        />
                        <Experience
                            startMonth={5}
                            startYear={2003}
                            endMonth={11}
                            endYear={2005}
                            jobName="ACCOUNTANT"
                            companyName="Oriental Garment (Bangkok, Thailand)"
                            jobDescription="Performed timely and accurate reconciliation for vendor statement with AP Aging reports. Processed invoices and reconciled sub-ledger to G/L. Prepared monthly fixed and variable cost reports."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />


                        <h2>Eduction</h2>

                        <Education
                            endMonth={8}
                            endYear={2018}
                            schoolName="University of North Carolina at Charlotte (UNCC)"
                            // schoolLocation="(Charlotte, NC)"
                            schoolDescription="•Continuing Education - Full Stack Web Development"
                        />
                        <Education
                            endMonth={3}
                            endYear={2003}
                            schoolName="Rajabhat Institute Nakhon Ratchasima"
                            // schoolLocation="(Nakhon Ratchasima, Thailand) "
                            schoolDescription="BA: Business Management in Accounting"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skills</h2>
                        <Skills
                        skillsType="Web Technologies"
                        skillsDetail="•	HTML5, CSS3 and JavaScript( jQuery, MomentJS, Node, Express, Bootstrap & Handlebars, Sequelize, ReactJS, APIs and AJAX) GitHub, Git"
                        
                        />
                        <Skills
                        skillsType="Databases"
                        skillsDetail="•	MySQL and MongoDB"
                        
                        />
                        <Skills
                        skillsType="Computer Skills"
                        skillsDetail="•	Advanced knowledge of MS Excel (VLOOKUP) Proficient in Word, PowerPoint, Access, and Epicor Prophet 21"
                        
                        />

                        


                    </Cell>
                </Grid>


            </div>

        )
    }
}

export default Resume;