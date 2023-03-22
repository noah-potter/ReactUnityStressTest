import React, { useMemo, useState } from "react";

const ROWS = 125;
const COLUMNS = 15;

function Column({ row, columns }: { row: number; columns: number }) {
  const children = useMemo(() => {
    return Array(columns)
      .fill(0)
      .map((_, i) => {
        return (
          <div key={i} class="mr-1 h-6 w-[75px] bg-green-300">
            {`${row} x ${i}`}
          </div>
        );
      });
  }, [columns, row]);

  return <div class="mb-1 flex flex-row">{children}</div>;
}

function Rows({ columns, rows }: { columns: number; rows: number }) {
  const children = useMemo(() => {
    return Array(rows)
      .fill(0)
      .map((_, i) => {
        return <Column key={i} row={i} columns={columns} />;
      });
  }, [columns, rows]);

  return <div class="flex flex-col p-3">{children}</div>;
}

export default function StressTest() {
  const [rows, setRows] = useState(ROWS);
  const [columns, setColumns] = useState(COLUMNS);

  return (
    <scroll>
      <button
        class="p-2 bg-white rounded-md w-[200px]"
        onClick={() => {
          const newRows = Math.floor(Math.random() * ROWS);
          const newColumns = Math.floor(Math.random() * COLUMNS);

          setRows(newRows);
          setColumns(newColumns);
        }}
      >
        Reroll
      </button>
      <Rows key={rows} columns={columns} rows={rows} />
    </scroll>
  );
}
