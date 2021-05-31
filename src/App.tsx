import { Table, Row, RowHeader, Cell, Background, Header } from "./components";
import { All } from "./Data/all";

function App() {
  //Ledger items type definition
  type LedgerItem = {
    Date: string;
    Ledger: string;
    Amount: string;
    Company: string;
  };

  //Complicated function I still don't fully understand to add values
  const reducer = (accumulator: number, currentValue: LedgerItem) =>
    accumulator + +currentValue.Amount;

  const mathAmount = All.transactions.reduce(reducer, 0);

  //Number formatter to make moneys
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //Grab the keys for heading header row
  const keys = Object.keys(All.transactions[0]);

  //Create table
  const allLedgerItems = All.transactions.map((ledgerItem) => (
    <Row>
      <Cell>{ledgerItem.Date}</Cell>
      <Cell>{ledgerItem.Ledger}</Cell>
      <Cell>{ledgerItem.Company}</Cell>
      <Cell>{formatter.format(parseInt(ledgerItem.Amount))}</Cell>
    </Row>
  ));

  //Return table
  return (
    <Background>
      <Header>Bench Test</Header>
      <Table>
        <Row>
          <RowHeader>{keys[0]}</RowHeader>
          <RowHeader>{keys[1]}</RowHeader>
          <RowHeader>{keys[3]}</RowHeader>
          <RowHeader>{formatter.format(mathAmount)}</RowHeader>
        </Row>
        {allLedgerItems}
      </Table>
    </Background>
  );
}

export default App;
