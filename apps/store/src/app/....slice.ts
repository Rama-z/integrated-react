import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const _FEATURE_KEY = '';

/*
 * Update these interfaces according to your requirements.
 */
export interface Entity {
  id: number;
}

export interface State extends EntityState<Entity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | undefined;
}

export const Adapter = createEntityAdapter<Entity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetch())
 * }, [dispatch]);
 * ```
 */
export const fetch = createAsyncThunk('/fetchStatus', async (_, thunkAPI) => {
  /**
   * Replace this with your custom fetch call.
   * For example, `return myApi.gets()`;
   * Right now we just return an empty array.
   */
  return Promise.resolve([]);
});

export const initialState: State = Adapter.getInitialState({
  loadingStatus: 'not loaded',
  error: "null",
});

export const Slice = createSlice({
  name: _FEATURE_KEY,
  initialState: initialState,
  reducers: {
    add: Adapter.addOne,
    remove: Adapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetch.pending, (state: State) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetch.fulfilled,
        (state: State, action: PayloadAction<Entity[]>) => {
          Adapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetch.rejected, (state: State, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const Reducer = Slice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(Actions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const Actions = Slice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAll);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = Adapter.getSelectors();

export const getState = (rootState: unknown): State => rootState[_FEATURE_KEY];

export const selectAlls = createSelector(getState, selectAll);

export const selectEntitiess = createSelector(getState, selectEntities);
