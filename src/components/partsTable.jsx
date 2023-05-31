import React, { useState } from "react";

const tableFields = [
  "quantity",
  "drawingNumber",
  "status",
  "quantityOpen",
  "unitPrice",
  "dueDate",
  "description",
  "drawingLink",
];

const PartsTable = () => {
  const [tableData, setTableData] = useState([]);
  const [rowCount, setRowCount] = useState(1);

  const handleCellChange = (e, rowIndex, field) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][field] = e.target.value;
    setTableData(updatedData);
  };

  const handleAddRow = () => {
    setRowCount(rowCount + 1);
    const newRow = { id: rowCount };
    setTableData([...tableData, newRow]);
  };

  const handleRemoveRow = (rowId) => {
    setRowCount(rowCount - 1);
    const updatedData = tableData.filter((row) => row.id !== rowId);
    updatedData.forEach((row, index) => {
      row.id = index + 1;
    });
    setTableData(updatedData);
  };

  return (
    <div>
      <button className="btn" onClick={handleAddRow}>
        +
      </button>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">quantity</th>
              <th scope="col">Drawing Number</th>
              <th scope="col">Status</th>
              <th scope="col">Quantity Open</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Due Date</th>
              <th scope="col">Description</th>
              <th scope="col">Drawing Link</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={row.id}>
                <th scope="row">{row.id}</th>

                {tableFields.map((field) => (
                  <td key={`${row.id}-${field}`}>
                    <input
                      className="clear-bg"
                      type="text"
                      value={row[field] ?? ""}
                      onChange={(e) => handleCellChange(e, rowIndex, field)}
                    />
                  </td>
                ))}

                <td>
                  <button
                    className="btn"
                    onClick={() => handleRemoveRow(row.id)}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartsTable;
