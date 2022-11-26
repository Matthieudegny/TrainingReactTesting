import { createContext, useContext, useReducer } from 'react';
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from 'react-icons/fa';
import scoreReducer from '../reducers/scoreReducer';
import { initialState } from './initialContextValues';
import { HandOption, IOptions, IoptionsContext, Props } from './optionsContextTypes';

const options: IOptions[] = [
  { name: HandOption.rock, icon: <FaRegHandRock size={60} /> },
  { name: HandOption.paper, icon: <FaRegHandPaper size={60} /> },
  { name: HandOption.scissors, icon: <FaRegHandScissors size={60} /> },
];

const OptionsContext = createContext<IoptionsContext>({
  options: [],
  state: initialState,
  dispatch: () => {},
});

export function OptionsProvider(props: Props) {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  const contextValue = {
    options,
    state,
    dispatch,
  };

  return <OptionsContext.Provider value={contextValue}>{props.children}</OptionsContext.Provider>;
}

export function useOptions() {
  const context = useContext(OptionsContext);
  return context;
}
