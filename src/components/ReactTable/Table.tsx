import { useMemo } from 'react';
import { useTable } from 'react-table';
import {
  IAccountTableAccessors,
  TAccountColumn,
} from '../../pages/ReactTableTest01';

// interface IProps {
//   tableData: IAccountTableAccessors[];
//   tableColumns: TAccountColumn[];
// }

interface IProps {
  tableData: any[];
  tableColumns: any[];
}

const Table: React.FC<IProps> = ({ tableColumns, tableData }) => {
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => tableData, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
