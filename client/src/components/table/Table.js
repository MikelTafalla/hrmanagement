import _ from "lodash";
import React from "react";
import { Table } from "semantic-ui-react";

const tableData = [
  { employeeID: "1989", name: "Pablo Vazquez" },
  { employeeID: "1987", name: "Mikel Rodriguez" },
  { employeeID: "1990", name: "Shaleem Malik" },
  { employeeID: "1978", name: "Chissy Salgado" },
];

function exampleReducer(state, action) {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: "ascending",
      };
    default:
      throw new Error();
  }
}

function EmployeeTable() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: tableData,
    direction: null,
  });
  const { column, data, direction } = state;

  return (
    <div style={{ margin: "125px" }}>
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              textAlign="center"
              sorted={column === "employeeID" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "employeeID" })
              }
            >
              EmployeeID
            </Table.HeaderCell>
            <Table.HeaderCell
              textAlign="center"
              sorted={column === "name" ? direction : null}
              onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
            >
              Full Name
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(({ name, employeeID }) => (
            <Table.Row key={employeeID}>
              <Table.Cell textAlign="center">{employeeID}</Table.Cell>
              <Table.Cell textAlign="center">{name}</Table.Cell>
              <Table.Cell textAlign="center">
                {
                  <div class="ui buttons">
                    <button
                      class="ui button"
                      onClick={(event) => console.log({ employeeID })}
                    >
                      Separation
                    </button>
                    <div class="or"></div>
                    <button
                      class="ui positive button"
                      onClick={(event) => console.log({ name })}
                    >
                      Change
                    </button>
                  </div>
                }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default EmployeeTable;
