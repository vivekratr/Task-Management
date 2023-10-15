import React, { useState, useEffect } from "react";

import "./css/ListItem.css";
import Header from "./header";
import { useLocation } from "react-router-dom";
import obj1, { obj, arr } from "./data.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ListItems() {
  const Navigate = useNavigate();
  const [elements, setElement] = useState({
    1: "Task 1",
    2: "Task 2",
    3: "Task 3",
  });
  const [currentIndex, setCurrentIndex] = useState(4);
  const [inputField, setInputField] = useState([]);

  const elementIndex = ["1", "2", "3"];
  const location = useLocation();

  function collectTableData(colName, index) {
    const randomItems = [];
    for (let i = 0; i < inputField.length + 3; i++) {
      randomItems.push(obj1[colName][(index + i) % obj1[colName].length]);
    }
    return { [colName]: randomItems };
  }
  async function generateUniqueRoomCode(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let roomCode = "";

    while (true) {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        roomCode += characters[randomIndex];
      }
      console.log(roomCode);
      const isRoomCodeUnique = 2; //use axois to check if room code is unique

      if (isRoomCodeUnique) {
        break;
      } else {
        roomCode = "";
      }
    }

    return roomCode;
  }

  const handleNext =async () => {
    const roomCode ={code: generateUniqueRoomCode(6)};
    await axios({
      method: 'post',
      url: 'http://localhost:3001/roomVerify',
      data: roomCode,
    }) .then(function(response) {
        console.log(response);
        
        });
    const dataToSave = {
      ...selectedCol.map((columnName, acc) => {
        return collectTableData(columnName, acc);
      }),
      "Task Name": elements,
    };
    console.log(dataToSave);
  };

  useEffect(() => {
    const checkLocationIsNull = () => {
      if (location.state === null || location.state.selectedCol === null) {
        console.log("hello");
        Navigate("/table");
      }
    };
    checkLocationIsNull();
  }, []);

  const selectedCol = location.state.selectedCol || [];

  console.log(selectedCol);
  const newSelectedCol = ["Task Name", ...selectedCol];
  function handleChange(event) {
    const { value, name } = event.target;
    setElement((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleAddItem(event) {
    event.preventDefault();
    setCurrentIndex((prevValue) => prevValue + 1);
    setElement((prevValue) => {
      return {
        ...prevValue,
        [currentIndex]: `Task ${currentIndex}`,
      };
    });
    setInputField([...inputField, currentIndex]);
  }

  function handleDeleteItem(event) {
    console.log(event);
    setInputField((prevValue) => {
      return prevValue.filter((index) => {
        return index !== event;
      });
    });
  }

  return (
    <div className="mainDivList">
      <div className="leftDiv">
        <Header />
        <h1 style={{ marginLeft: "6rem" }}>List Your Tasks</h1>
        <input
          className="listInput"
          onChange={handleChange}
          name="1"
          maxLength={18}
          placeholder="Task 1"
          type="text"
        />
        <input
          className="listInput"
          maxLength={18}
          placeholder="Task 2"
          onChange={handleChange}
          name="2"
          type="text"
        />
        <input
          className="listInput"
          maxLength={18}
          placeholder="Task 3"
          onChange={handleChange}
          name="3"
          type="text"
        />
        {inputField.map((index) => {
          return (
            <div className="listItemInput listItemInputLeft">
              <input
                className="listInput "
                maxLength={18}
                placeholder={`Task ${index}`}
                onChange={handleChange}
                name={index}
                type="text"
                onClick={handleDeleteItem}
              />

              <span
                onClick={() => {
                  handleDeleteItem(index);
                }}
                className="listItemDelete"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8L8 16M12 12L16 16M8 8L10 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          );
        })}

        {/* add item button */}
        <div className="listAddTask">
          <button onClick={handleAddItem} type="button" class="list_button">
            <span class="list_button__text">Add Item</span>
            <span class="list_button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                height="24"
                fill="none"
                class="svg"
              >
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line>
              </svg>
            </span>
          </button>
        </div>
        <div
          className="listButtonss"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              Navigate(-1);
            }}
          >
            Back
          </p>
          <p
            style={{ cursor: "pointer" }}
            className="button"
            onClick={handleNext}
          >
            Next
          </p>
        </div>
      </div>
      <div className="mainDiv2">
        <div className="preTable">
          <div className="preTablein">
            <h2>Task Management</h2>
            {selectedCol.length > 0 ? (
              <table className="mainTable">
                <tr>
                  {newSelectedCol.map((name) => {
                    return <th>{name}</th>;
                  })}
                </tr>

                {obj1[selectedCol[0]].map((_, rowIndex) => (
                  <tr>
                    <td>{elements[elementIndex[rowIndex]]} </td>

                    {selectedCol.map((columnName) => (
                      <td style={{ margin: "auto" }} key={columnName}>
                        {obj1[columnName][rowIndex]}
                      </td>
                    ))}
                  </tr>
                ))}
                {inputField.map((index) => {
                  return (
                    <tr>
                      <td>{elements[index]} </td>

                      {selectedCol.map((columnName) => (
                        <td style={{ margin: "auto" }} key={columnName}>
                          {
                            obj1[columnName][
                              Math.floor(
                                Math.random() * obj1[columnName].length
                              )
                            ]
                          }
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </table>
            ) : (
              <p>No columns selected.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItems;
