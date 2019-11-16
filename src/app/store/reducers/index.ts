import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPageState from './page-state.reducer';

export interface State {

  pageStates: fromPageState.State;
}

export const reducers: ActionReducerMap<State> = {

  pageStates: fromPageState.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
