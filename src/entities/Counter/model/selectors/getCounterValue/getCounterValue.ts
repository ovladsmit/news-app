import { StateSchema } from "app/providers/StoreProvider";

export const getCounterValue = (state: StateSchema) => {
  return state.counter.value;
};
