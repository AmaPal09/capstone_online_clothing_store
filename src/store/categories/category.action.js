import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesAction = (categoriesMap) => 
        createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap); 