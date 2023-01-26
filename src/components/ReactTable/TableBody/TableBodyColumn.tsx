import { Cell, TableCellProps } from 'react-table';

interface IProps {
  cell: Cell;
  cellProps?: TableCellProps;
}

const TableBodyColumn: React.FC<IProps> = ({ cell, cellProps }) => {
  return <td {...cellProps}>{cell.render('Cell')}</td>;
};

export default TableBodyColumn;
