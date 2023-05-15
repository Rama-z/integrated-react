import { fetch, Adapter, Reducer } from './....slice';

describe(' reducer', () => {
  it('should handle initial state', () => {
    const expected = Adapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(Reducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchs', () => {
    let state = Reducer(undefined, fetch.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = Reducer(state, fetch.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = Reducer(state, fetch.rejected(new Error('Uh oh'), null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
