import React, { useEffect, useState } from 'react'
import ItemAvailable from './ItemAvailable'
import Filtrs from './Filters'
import Cart from './Cart'


export default function Home() {
    const [items, setItems] = useState([])//מוצרים
    const [cartItem, setcartItem] = useState([])// פרטים בעגלה
    const [departmentFilter, setdepartmentFilter] = useState({//state שמכיל את הקטגוריות של המוצרים
        all: false,
        balls: false,
        coach: false,
        players: false,
        yard: false,
        barPrice: 5000,
        filterName: "all"
    })

    useEffect(() => {
        console.log("der")
        loadingItem()
    }, [departmentFilter])

    const selectedItem = (item) => {
        item.count = 1

        const newSelectedItemsList = [...cartItem, item]
        // item.count = 1// הוספת מוצר לעגלה בפעם הרשונה

        setcartItem(newSelectedItemsList)
        console.log("add to cart", item);
    }
    const changeItemCountPlus = (item) => {
        item.count = item.count+1

        const newItemCount = [...cartItem, item]
        // item.count = 1// הוספת מוצר לעגלה בפעם הרשונה

        setcartItem(newItemCount)
        console.log("add to cart", item);
    }
    const changeItemCountMinus = (item) => {
        item.count = item.count-1

        const newItemCount = [...cartItem, item]
        // item.count = 1// הוספת מוצר לעגלה בפעם הרשונה

        setcartItem(newItemCount)
        console.log("add to cart", item);
    }

    console.log("items in cart", cartItem);

    // const selectedItem = (item) => {// הוספת מוצר לעגלה בפעם הרשונה
    //     item.count = 1
    //     setcartItem(cartItem.concat([item]))
    //     console.log("add to cart", cartItem);
    // }
    const deleteFromCart = (id, num) => {// אם בהזמנת מוצר זה יש 0פריטים הוצא מהעגלה
        if (num === 0)
            setcartItem(cartItem.filter((i) => i.id !== id))
        // }
        // const updateItemAmount = (id, count) => {// עידכון הכמות בהזמנה+
        //     const newItemAmount={ ...cartItem.((i)=> i.count+1)}
        //         setcartItem(newItemAmount)
    }

    const onClickfiltersHandler = (filterName) => {//פונקציה שמקבלת את בקשת הקטגוריה ומשנה את state
        setdepartmentFilter((oldState) => ({
            ...oldState, all: false, balls: false, coach: false, players: false, yard: false
            , [filterName]: true, filterName
        }))

    }
    function barPriceChange(e) {//stateפונקצי שמשנה את מד המחיר המבוקש ומעדכנת את ה

        const { name, value } = e.target



        const newdepartmentFilter = { ...departmentFilter, [name]: value }

        setdepartmentFilter(newdepartmentFilter)


    }
    // function changeItemCount(item,e){//פונקציה שמשנה את מספר הפריטים בעגלה
       
    //     if(e.value ==="+")
    //      return item.count +1
       
    //    else if(e.value ==="-")
    //      return item.count -1
    //    else return null
       
    

    async function getItems() {//פונקציה שמקבלת את המוצרים הנבחרים
        var url = `http://localhost:5555/items/?price=${departmentFilter.barPrice}&department=${departmentFilter.filterName}`
        try {
            const res = await fetch(url)
                .then(r => r.json())
            console.log("spechel");
            setItems(res)


        } catch (error) { }


    }
    async function getAllItems() {//פונקציה שמקבלת את כל המוצרים
        try {
            const res = await fetch(`http://localhost:5555/itemss/`)
                .then(r => r.json())

            console.log("all");

            setItems(res)


        } catch (error) { }


    }

    const loadingItem = () => {//פונקציה שמציגה את הקטגוריה המבוקשת
        if (departmentFilter.filterName !== "all") {
            getItems();
            console.log("in if");

        }

        else {
            getAllItems();//פונקציה שמציגה את כל המוצרים
            console.log("in else if");

        }


    }





    return <div className='homePage'>
        <div className="poster"></div>
        <div className="homePageMain">
            <Filtrs departmentFilter={departmentFilter} onClickfiltersHandler={onClickfiltersHandler} barPriceChange={barPriceChange} />
            <ItemAvailable items={items} selectedItem={selectedItem} cartItem={cartItem} changeItemCountMinus={changeItemCountMinus} changeItemCountPlus={changeItemCountPlus}/>
            <Cart cartItem={cartItem} />
        </div>
    </div>
    // cartItemIdString={cartItem.map((i) => i.id).join(",")}
}