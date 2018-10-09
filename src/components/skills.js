import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
                <Grid>
                    <Cell col={4}>
                    <h5 style={{marginTop: '0px'}}> {this.props.skillsType}</h5>
                    </Cell>

                    <Cell col={8}>
                    <p>{this.props.skillsDetail}</p>
                    </Cell>
                </Grid>
            

        )
    }
}

export default Skills;