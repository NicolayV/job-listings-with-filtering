import { useSelector, useDispatch } from "react-redux";
import { selectFilters, removeFilter, clearFilter } from "./filter-slice";

import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if (currentFilters.length === 0) {
    return null;
  }

  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter));
  };

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              onClear={() => handleRemoveFilter(filter)}
              variant="clearable"
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button
          className="link"
          onClick={() => {
            dispatch(clearFilter());
          }}
        >
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
