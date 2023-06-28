import { ReactElement } from "react";
import ListGroup from "./ListGroup";
import Alert from "./Alert";

interface Props {
  groupState: boolean;
  alertState: boolean;
  items: string [];
  heading: string;
  handleSelect: (item: string) => void;
  handleClose: () => void;
}

//PascalCasing
function Message({
  groupState,
  alertState,
  items,
  heading,
  handleSelect,
  handleClose,
}: Props) {
  //JSX: JavaScript XML
  if (groupState) {
    return (
      <div>
        <ListGroup
          items={items}
          heading={heading}
          onSelectItem={handleSelect}
        />
      </div>
    );
  }

  if (alertState) {
    return (
      <div>
        <Alert children onClose={handleClose} />
      </div>
    );
  }

  return null;
}

export default Message;
