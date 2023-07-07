import React from "react";
import { Grid, GridRow, Icon, Segment } from "semantic-ui-react";

function EntryLine({description, amount, isExpense=false}) {

    return(
        <Segment color={isExpense?'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <GridRow>
            <Grid.Column width={10} textAlign='left'>
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              {amount}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </GridRow>
        </Grid>
        </Segment>
    )

}
export default EntryLine