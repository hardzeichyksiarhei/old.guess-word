import { combineReducers } from "redux";
import game from "./game";
import players from "./players";
import categories from "./categories";

export default combineReducers({
  game,
  players,
  categories,
});
