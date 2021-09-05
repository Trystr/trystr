import { useReducer, useCallback } from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/outline";
import clsx from "clsx";

const states = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case states.LOADING:
      return {
        isLoading: true,
        state: action.state,
      };
    case states.ERROR:
      return {
        ...state,
        isLoading: false,
        state: state.loadingState,
        error: action.error,
      };
    case states.SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadingState: action.state,
        liked: action.state,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export function iconWrapper({ name, url, ActiveIcon, InactiveIcon }) {
  function Icon({ state: initialState, className="" }) {
    const [state, dispatch] = useReducer(reducer, {
      isLoading: false,
      state: initialState,
      loadingState: initialState,
      error: null,
    });

    // TODO: TD082321 - this should be debounced
    const setState = useCallback(
      (state) => {
        dispatch({ type: states.LOADING, state });
        // call api
        dispatch({ type: states.SUCCESS, state });
      },
      [dispatch]
    );

    return (
      <button
        className={clsx("-ml-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600", className)}
        onClick={() => setState(!state.state)}
      >
        {state.state ? ActiveIcon : InactiveIcon}
      </button>
    );
  }

  Icon.displayName = `IconStateWrapper(${name})`;

  return Icon;
}
