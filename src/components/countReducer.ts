import {InitialStateType} from "../App";

export const countReducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT': {
            return state.currentValue === (state.maxValue - 1)
                ? {...state, currentValue: state.currentValue + 1, disabledInc: true, error: 'max value'}
                : {...state, currentValue: state.currentValue + 1}
        }
        case 'RESET' : {
            return {
                ...state, disabledInc: false, error: "", currentValue: state.startValue
            }
        }
        case "SETTING": {
            return {
                ...state, disabledSet: true, currentValue: state.startValue,
                disabledInc: false, disabledRes: false, error: ''
            }
        }
        case "CHANGE_MAX_VALUE": {
            if (action.value <= state.startValue) {
                return {...state, disabledInc: true, disabledRes: true, disabledSet: true, error: 'incorrect value', maxValue: action.value}
            } else if (action.value !== state.maxValue) {
                return {
                    ...state,
                    disabledSet: false,
                    disabledRes: true,
                    disabledInc: true,
                    error: "enter values and press 'set'", maxValue: action.value
                }
            } else {
                return {...state, disabledSet: false, error: '', maxValue: action.value}
            }
        }
        case "CHANGE_START_VALUE": {
            if (action.value < 0 || action.value >= state.maxValue) {
                return {...state, disabledInc:true, disabledRes:true, disabledSet:true, error: 'incorrect value', startValue: action.value}
            } else if (action.value !== state.startValue) {
                return {...state, disabledInc:true, disabledRes: true, disabledSet: false, error: "enter values and press 'set'", startValue: action.value}
            } else {return {...state, disabledSet:false, error: '', startValue: action.value}
            }
        }
        default:
            return state

    }

}

type ActionsType =
    ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof settingAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof changeStartValueAC>


export const incrementAC = () => {
    return {
        type: 'INCREMENT'
    } as const
}

export const resetAC = () => {
    return {
        type: 'RESET'
    } as const
}

export const settingAC = () => {
    return {
        type: 'SETTING'
    } as const
}

export const changeMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        value
    } as const
}

export const changeStartValueAC = (value: number) => {
    return {
        type: 'CHANGE_START_VALUE',
        value
    } as const
}
