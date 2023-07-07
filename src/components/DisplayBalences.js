import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";


function DisplayBalances() {
    return(
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <DisplayBalance size='tiny' color='green' title='Incoming' value='1,500'/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance size='tiny' color='red' title='Expences' value='600'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances