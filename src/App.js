import './App.css';
import{Button, ButtonGroup, ButtonOr, Container,Form,FormGroup,Grid,GridRow,Header,Icon,Segment,Statistic} from 'semantic-ui-react'

function App() {
  return (
    <Container>

      <Header as='h1'>Budget</Header>
      
      <Statistic size='small'>
      <Statistic.Label>Your balance:</Statistic.Label>
      <Statistic.Value>2,550</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign:'left'}} >
                Incoming</Statistic.Label>
              <Statistic.Value>1,5000</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign:'left'}} >
                Expences</Statistic.Label>
              <Statistic.Value>1,5000</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h2'>History</Header>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <GridRow>
            <Grid.Column width={10} textAlign='left'>
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              $10,000
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <GridRow>
            <Grid.Column width={10} textAlign='left'>
              Something else
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              $10,000
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <GridRow>
            <Grid.Column width={10} textAlign='left'>
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              $10,000
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>

      <Header as ='h3'> Add new Transactions</Header>
      <Form unstackable>
        <FormGroup>
          <Form.Input icon='tags' width={12} label='Description' placeholder='new shinny thing'/>
          <Form.Input width={4} label='value' placeholder='100.00' icon='dollar' iconPosition='left'/>
        </FormGroup>
        <ButtonGroup style={{marginTop:20}}>
          <Button>Cancel</Button>
          <ButtonOr/>
          <Button primary>OK</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;
