import { Row } from 'react-table';
import TableBodyColumn from './TableBodyColumn';

interface IProps {
  row: Row<any>;
}

const TableBodyRow: React.FC<IProps> = ({ row }) => {
  console.log(row.original);

  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell) => {
        return (
          <TableBodyColumn
            {...cell.getCellProps()}
            cell={cell}
            key={cell.column.id}
          />
        );
      })}
    </tr>
  );
};

export default TableBodyRow;
