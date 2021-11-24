import React from 'react'
import { reduxActionTemplate } from './actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import UserLogin from './components/UserAuth/Login/UserLogin'
import UserRegister from './components/UserAuth/Register/UserRegister'

function Main() {
    const dispatch = useDispatch()
    dispatch(reduxActionTemplate(5))
    const reduxSelector = useSelector(state => state.reduxTemplate)
    console.log(reduxSelector)

    return (
        <div>
            {/* <Switch>
                <Route exact path = '/'> */}
                <UserLogin />
                {/* </Route>
            </Switch> */}
            {/* <UserRegister /> */}
        </div>
    )
}

export default Main
