import { connect, Dispatch } from 'react-redux'

import * as actions from '../actions'
import Hello from '../components/Hello'
import { IStoreState } from '../types/index'


function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
