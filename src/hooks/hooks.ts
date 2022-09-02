import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../components/Redux/store'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

export const useAppDispatch: () => AppDispatch & ThunkDispatch<RootState, null, AnyAction> = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector