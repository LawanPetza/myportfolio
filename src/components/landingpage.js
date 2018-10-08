import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://previews.123rf.com/images/magurok/magurok1706/magurok170600030/79971164-businesswoman-office-manager-banker-consultant-avatar-profile-concepts-cute-female-character-with-lo.jpg"
                        alt="character"
                        className="character-img"
                        />

                        <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML5/CSS3 | JavaScript | jQuery | Bootstrap | React.js | Node.js | Express | MongoDB | MySQL | </p>

                        </div>

                    </Cell>
                </Grid>



            </div>

        )
    }
}

export default Landing;