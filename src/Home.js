import React, { useEffect, useState } from 'react'
// import Products from './Products';
import ItemAvailable from './ItemAvailable'
import Filtrs from './Filters'


export default function Home(props) {
    const [items, setItems] = useState([])
    // async function fetchItems() {
    //     try {
    //         const res = await fetch(`http://localhost:5555/items/`,
    //         ).then(r => r.json())
    //         setItems(res)
    //     } catch (error) {

    //     }
    // }
    async function getItems() {
        try {
            const res = await fetch('http://localhost:5555/items/').then(r => r.json())

            setItems(res)

        } catch (error) {
            
         }

    }

    useEffect(() => {getItems()  },[])


    return <div className='homePage'>
<Filtrs />
        <ItemAvailable items={items} />
       
    </div>
}