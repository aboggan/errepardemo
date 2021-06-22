import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Widget1 from "../Widgets/Widget1";
import Widget2 from "../Widgets/Widget2";
import Widget3 from "../Widgets/Widget3";
import Widget4 from "../Widgets/Widget4";
import "./App.css";



const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
    widget: 3,
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: "/images/cato.png",
    widget: 1,
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: "/images/kvn.png",
    widget: 2,
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: "/images/mooncake.png",
    widget: 4,
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
    widget: 1,
  },
];

function WidgetList() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  const showWidget = (widgetId) => {
    console.log(widgetId);
    if (widgetId === 1) {
      return <Widget1 />;
    }
    if (widgetId === 2) {
      return <Widget2 />;
    }
    if (widgetId === 3) {
      return <Widget3 />;
    }
    if (widgetId === 4) {
      return <Widget4 />;
    }
  };

  const handleChange = (e) => {
    console.log("event", e.target.parentElement.parentElement.parentElement.parentElement);
    let element = e.target.parentElement.parentElement.parentElement.parentElement;
    element.classList.toggle("fullwidth");
  };

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name, thumb, widget }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                name="checkedC"
                                color="primary"
                                onChange={handleChange}
                              />
                            }
                            label="Full Width"
                          />
                          {showWidget(widget)}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default WidgetList;
