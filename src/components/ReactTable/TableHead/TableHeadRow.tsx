import { HeaderGroup } from 'react-table';
import TableHeadColumn from './TableHeadColumn';

interface IProps {
  headerGroup: HeaderGroup;
}

const TableHeadRow: React.FC<IProps> = ({ headerGroup }) => {
  return (
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map((column) => (
        <TableHeadColumn column={column} key={column.id} />
      ))}
    </tr>
  );
};

export default TableHeadRow;
