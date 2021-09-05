import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/outline";
import { iconWrapper } from "./icon-state-wrapper";

export const Like = iconWrapper({ 
  name: 'like', 
  ActiveIcon: <HeartIcon className="text-red-700 h-7 w-7" />,
  InactiveIcon: <HeartOutlineIcon className="h-7 w-7" />
})