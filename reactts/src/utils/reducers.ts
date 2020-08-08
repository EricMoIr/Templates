export interface Action {
    type: string;
}
export interface Reducer<State> {
    [action: string]: (state: State, action: Action) => State;
}

// eslint-disable-next-line import/prefer-default-export
export function createReducer<T>(initialState: T, reducer: Reducer<T>): (state: T, action: Action) => T {
    return (state: T = initialState, action: Action) => {
        if (Object.prototype.hasOwnProperty.call(reducer, action.type)) {
            return reducer[action.type](state, action);
        }
        return state;
    };
}
