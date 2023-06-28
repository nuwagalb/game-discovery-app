import { useState } from "react";
import Button from "./components/Button";
import Message from "./components/Message";
import "./App.css";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [listGroupVisible, setListGroupVisibility] = useState(false);

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleAlertClose = () => setAlertVisibility(false);

  const displayListGroup = () => {
    console.log("Clicked LG Items");
    setListGroupVisibility(true);
    setAlertVisibility(false);
  };

  console.log("list group is " + listGroupVisible);
  console.log("alert is " + alertVisible);

  const displayAlert = () => {
    console.log("Clicked Alert");
    setListGroupVisibility(false);
    setAlertVisibility(true);
    console.log("list group is" + listGroupVisible);
    console.log("alert is" + alertVisible);
  };

  return (
    <div>
      <div className="display-area">
        {listGroupVisible && (
          <Message
            groupState={listGroupVisible}
            alertState={alertVisible}
            items={items}
            heading="Cities"
            handleSelect={handleSelectItem}
            handleClose={handleAlertClose}
          />
        )}
        {alertVisible && (
          <Message
            groupState={listGroupVisible}
            alertState={alertVisible}
            items={items}
            heading="Cities"
            handleSelect={handleSelectItem}
            handleClose={handleAlertClose}
          />
        )}
      </div>
      <span className="flex-item">
        <Button color="primary" onClick={displayListGroup}>
          List Group Items
        </Button>
      </span>
      <span className="flex-item">
        <Button color="primary" onClick={displayAlert}>
          Activat Alert
        </Button>
      </span>
    </div>
  );
}

export default App;
