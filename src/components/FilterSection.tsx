import React, { useEffect, useReducer, useState } from 'react';
import filterReducer from '../utils/filterReducer';

interface IProps {}

const handleScroll = (e: Event) => {
  console.log('Scrolled');
};

const FilterSection: React.FC<IProps> = (props) => {
  const [filters, dispatchFilter] = useReducer(filterReducer, {});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.addEventListener('scroll', handleScroll);
    } else {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [open]);

  return (
    <div>
      <button
        type="button"
        className="bg-slate-200 p-2"
        onClick={() => setOpen((prevValue) => !prevValue)}
      >
        Toggle Open
      </button>
      <input
        type="search"
        name="search1"
        value={filters.search1 || ''}
        className="border border-gray-400"
        onChange={(e) => {
          const { name, value } = e.target;
          dispatchFilter({ [name]: value });
        }}
      />
      <input
        type="search"
        name="search2"
        value={filters.search2 || ''}
        className="border border-gray-400"
        onChange={(e) => {
          const { name, value } = e.target;
          dispatchFilter({ [name]: value });
        }}
      />
    </div>
  );
};

export default FilterSection;
