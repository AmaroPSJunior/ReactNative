import React from 'react'
import Routes from '../../routes'
import BottonNav from '../../components/bottonNav'
import Toolbar from '../../components/toolbar'


export default RoutesAuth = (obj) => {
    console.log('obj:', obj.data)
    return(
        <>
            <Toolbar />
                <Routes auth={obj.data}/>
            <BottonNav />
        </>
    )
}
