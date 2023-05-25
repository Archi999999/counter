export const countReducer =(state:any, action:ActionsType)=>{
    const [currentValue, startValue, maxValue] = state.values
    const [disabledInc, disabledRes, disabledSet, error] = state
    switch (action.type){
        case 'INCREMENT':{
            (currentValue === maxValue - 1) ? {...state, }
            // return {...state, currentValue: state.currentValue+1}
        }
        default: return state
    }

}

type ActionsType = ReturnType<typeof incrementAC>


export const incrementAC =()=> {
    return {
        type: 'INCREMENT'
    }as const
}
