import './App.css';
import{Container} from 'semantic-ui-react'
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalences';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>  
      <MainHeader  title='Badge'/> 
      <DisplayBalance size='tiny' color='black' title='Income' value='1,500'/>
      <DisplayBalances />
      <MainHeader  title='History' type='h2'/> 
      <EntryLine description='income'amount='$10'/>
      <EntryLine description='expense'amount='$10' isExpense='true'/>
      <MainHeader  title='Add new Transactions' type='h3'/> 
      <NewEntryForm/>
    </Container>
  );
}

export default App;
