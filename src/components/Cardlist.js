import React from 'react'
import Card from './Card'
const Cardlist = ({robots})=>{
    const CardList = robots.map(user => <Card key={user.id} name={user.name} id={user.id} email={user.email}/>)
    return (
        <React.Fragment>
            {CardList}
        </React.Fragment>
    )

}

export default Cardlist