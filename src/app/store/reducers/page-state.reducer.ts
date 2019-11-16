import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PageState } from '../models/page-state.model';
import { PageStateActions, PageStateActionTypes } from '../actions/page-state.actions';

export interface State extends EntityState<PageState> {
  // additional entities state properties
}

export const adapter: EntityAdapter<PageState> = createEntityAdapter<PageState>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: PageStateActions
): State {
  switch (action.type) {
    case PageStateActionTypes.AddPageState: {
      return adapter.addOne(action.payload.pageState, state);
    }

    case PageStateActionTypes.UpsertPageState: {
      return adapter.upsertOne(action.payload.pageState, state);
    }

    case PageStateActionTypes.AddPageStates: {
      return adapter.addMany(action.payload.pageStates, state);
    }

    case PageStateActionTypes.UpsertPageStates: {
      return adapter.upsertMany(action.payload.pageStates, state);
    }

    case PageStateActionTypes.UpdatePageState: {
      return adapter.updateOne(action.payload.pageState, state);
    }

    case PageStateActionTypes.UpdatePageStates: {
      return adapter.updateMany(action.payload.pageStates, state);
    }

    case PageStateActionTypes.DeletePageState: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PageStateActionTypes.DeletePageStates: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PageStateActionTypes.LoadPageStates: {
      return adapter.addAll(action.payload.pageStates, state);
    }

    case PageStateActionTypes.ClearPageStates: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
