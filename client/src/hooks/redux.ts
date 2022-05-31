import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/modules/index';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
