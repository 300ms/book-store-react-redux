import { CHANGE_FILTER } from '../helpers/helper';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter || state;
    default:
      return state;
  }
};

export default filter;
