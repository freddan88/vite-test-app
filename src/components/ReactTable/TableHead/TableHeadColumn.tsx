import { HeaderGroup } from 'react-table';

interface IProps {
  column: HeaderGroup;
}

const TableHeadColumn: React.FC<IProps> = ({ column }) => {
  return <th {...column.getHeaderProps()}>{column.render('Header')}</th>;
};

export default TableHeadColumn;
