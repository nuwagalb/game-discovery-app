//import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  /*
  //code for the ListGroup Component

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );*/

  //Code for Alert Component
  return <div><Alert>Hello <span>World</span> </Alert></div>

}

export default App;
