import React, {useContext} from 'react'
import { Context } from '../store/appContext'

export const Single = () => {
    const {store, actions} = useContext(Context)
    console.log(store.single)
    return (
        <h1>More info</h1>
    )
}