import { useReducer, useCallback } from "react";

import {
  HeartIcon,
} from "@heroicons/react/solid";
import {
  HeartIcon as HeartOutlineIcon,
} from "@heroicons/react/outline";

const likeReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        isLoading: true,
        liked: action.liked,
      };
    case "error":
      return {
        ...state,
        isLoading: false,
        liked: previousValue.liked,
        error: action.error,
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        previousValue: action.liked,
        liked: action.liked,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const useLikeState = (initialLiked) => {
  const [state, dispatch] = useReducer(likeReducer, {
    isLoading: false,
    liked: initialLiked,
    previousValue: initialLiked,
    error: null,
  });

  // TODO: TD082321 - this should be debounced
  const setLiked = useCallback((liked) => {
    dispatch({ type: "loading", liked });
    //TOOD: TD082321 call API to set liked
    dispatch({ type: "success", liked });
  }, [dispatch]);

  return [state, setLiked];
}

export function Like({ liked: initialLiked }) {
  const [likedState, setLiked] = useLikeState(initialLiked);
  return (
    <button 
      className="-ml-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600"
      onClick={() => setLiked(!likedState.liked)}
    >
    { likedState.liked ? <HeartIcon className="text-red-700 h-7 w-7" /> : <HeartOutlineIcon className="h-7 w-7" /> }
  </button>
  )
}