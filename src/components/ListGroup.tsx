// Our object to pass to our ListGroup component is in the following
// format/shape => {items: [], heading: string}
//(typescript) type annotation: define the type of a given property
//(typescript) interface defines the shape of an object
//using props, we can pass data to our components

/**
 *             Props               vs     State
 * -> input passed to a component         -> data managed by a component
 * -> similar to function args            -> similar to local variables
 * -> immutable: unchangeable, read only  -> mutable: has data that changes
 * -> similarity: they cause a re-render  -> cause a re-render
 */

import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    //(item: string) => void: this property is a function that takes in
    //                        an item of type string and returs void
    onSelectItem: (item: string) => void;
}

//we will pass our component a parameter that is of type props
function ListGroup({items, heading, onSelectItem}: Props) {
  //useState hook: hooks give us access to React features within our components
  //useState(): accepts a variable and returns an array with that variable as well as
  //            a function to handle that variable and set it to the new state of the
  //            component
  //Each component has it's own state
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/*
         true && 1 => returns 1
         true && 'Albo' => returns Albo
         false && '1' => returns false
         false && 'Albo' => returns false
      */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
