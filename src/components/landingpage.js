import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={require("../images/myPic.JPG")}
                            alt="character"
                            className="character-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML5/CSS3 | JavaScript | jQuery | Bootstrap | React.js | Node.js | Express | MongoDB | MySQL</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/lawanpetza" rel="noopener noreferer" target="blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/LawanPetza" rel="noopener noreferer" target="blank">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Landing;