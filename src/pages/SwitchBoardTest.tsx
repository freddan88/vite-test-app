import { mdiHome } from '@mdi/js';
import Button from '../components/Button';
import SwitchBoardFilter1 from '../components/SwitchBoardFilter1';
import SwitchBoardFilter2 from '../components/SwitchBoardFilter2';
import SwitchBoardFilter3 from '../components/SwitchBoardFilter3';
import SwitchBoardFilter4 from '../components/SwitchBoardFilter4';
import SwitchBoardFilter5 from '../components/SwitchBoardFilter5';

const switchBoardData = [
  {
    label: 'Test 1',
    value: 1,
  },
  {
    label: 'Test 2',
    value: 2,
  },
  {
    label: 'Test 3',
    value: 3,
  },
  {
    label: 'Test 4',
    value: 4,
  },
];

const SwitchBoardTest: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden bg-slate-200">
      <SwitchBoardFilter1
        value={1}
        name="test"
        data={switchBoardData}
        onChange={(value) => console.log(value)}
      />
      <br />
      <br />
      <SwitchBoardFilter2
        filterData={switchBoardData}
        filterName="newSwitchboard"
        filterValue={1}
        onFilterChange={(e) => console.log(e)}
      />
      <br />
      <br />
      <SwitchBoardFilter3
        filterData={switchBoardData}
        filterName="switchboard3"
        filterValue={1}
        onFilterChange={(e) => console.log(e)}
      />
      <br />
      <br />
      <SwitchBoardFilter4 />
      <br />
      <br />
      <div className="p-10">
        <SwitchBoardFilter5 value="active" />
      </div>
      <Button iconPathAfter={mdiHome} variant="contained">
        HOME
      </Button>
    </div>
  );
};

export default SwitchBoardTest;
