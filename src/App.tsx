import {
  Table,
  Row,
  RowHeader,
  Cell,
  Background,
  Header,
} from "./components.js";
import { All } from "./Data/all";

function App() {
  // Create our number formatter.
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const allLedgerItems = All.transactions.map((ledgerItem) => (
    <Row>
      <Cell>{ledgerItem.Date}</Cell>
      <Cell>{ledgerItem.Ledger}</Cell>
      <Cell>{ledgerItem.Company}</Cell>
      <Cell>{formatter.format(parseInt(ledgerItem.Amount))}</Cell>
    </Row>
  ));

  const keys = Object.keys(All.transactions[0]);

  type LedgerItem = {
    Date: string;
    Ledger: string;
    Amount: string;
    Company: string;
  };

  const reducer = (accumulator: number, currentValue: LedgerItem) =>
    accumulator + +currentValue.Amount;

  const mathAmount = All.transactions.reduce(reducer, 0);

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
