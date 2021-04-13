import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';

import HealthContext from '../../../context/healthContext';
import SearchControlFactory from '../../SearchControlFactory';
import ResourceList from '../../ResourceList';

const SearchContainer = () => {
  const healthContext = useContext(HealthContext);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SearchControlFactory />
      </Grid>
      <br />
      <Grid item xs={12} sm={8} md={8} lg={10}>
        {healthContext.isResourceLoaded ? <ResourceList /> : null}
      </Grid>
      <Grid
        alignItems='center'
        justify='center'
        item
        container
        xs={12}
        sm={8}
        md={8}
        lg={10}
      >
        {/* {isResourceLoaded ? (
          <Pagination
            pagination={pagination}
            filterText={filterText}
            currentPage={page}
            onSearchResource={onSearchResource}
            onPaging={onPaging}
          />
        ) : null} */}
      </Grid>
    </Grid>
  );
};

export default SearchContainer;
