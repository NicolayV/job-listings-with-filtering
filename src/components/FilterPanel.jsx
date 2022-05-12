import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "store/filters/filter-selectors";
import { removeFilter, clearFilter } from "store/filters/filter-actions";

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
            dispatch(clearFilter);
          }}
        >
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
