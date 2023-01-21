import { Column, useFlexLayout, useTable } from 'react-table';
import FilterSection from '../components/FilterSection';

const data = [
  {
    col1: 'Hello',
    col2: 'World',
    col3: 'Hello',
    col4: 'World',
  },
  {
    col1: 'react-table',
    col2: 'rocks',
    col3: 'Hello',
    col4: 'World',
  },
  {
    col1: 'whatever',
    col2: 'you want',
    col3: 'Hello',
    col4: 'World',
  },
];

const columns: Column[] = [
  {
    Header: 'Column 1',
    accessor: 'col1',
    maxWidth: 80,
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
  },
  {
    Header: 'Column 3',
    accessor: 'col3',
    maxWidth: 80,
  },
  {
    Header: 'Column 4',
    accessor: 'col4',
    maxWidth: 60,
  },
];

interface IProps {}

const ReactTableTest01: React.FC<IProps> = (props) => {
  const tableInstance = useTable({ columns, data }, useFlexLayout);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="px-8">
      <FilterSection />
      <table
        {...getTableProps()}
        className="spacing w-full table-fixed border-collapse overflow-hidden text-ellipsis whitespace-nowrap"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                console.log(column);
                return (
                  <th
                    {...column.getHeaderProps()}
                    className="from-neutral-700 text-left font-semibold"
                  >
                    {column.render('Header')}
                  </th>
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
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="border-b border-gray-200 p-2"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-[100vh] bg-slate-500">Test</div>
    </div>
  );
};

export default ReactTableTest01;
