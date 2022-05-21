import { useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";

import { useFetchPositions } from "./use-fetch-positions";
import { usePositions } from "./use-positions";

import { addFilter } from "../filters/filter-slice";

const JobList = () => {
  useFetchPositions();

  const positions = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = (item) => {
    dispatch(addFilter(item));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
