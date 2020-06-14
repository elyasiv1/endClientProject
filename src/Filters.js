import React, { useState } from 'react'

export default function Filters() {

    const [catgoryFilter, setcatgoryFilter] = useState({})
    const [ballsFilter, setBallsFilter] = useState(false)
    const [coachFilter, setCoachFilter] = useState(false)
    const [playersFilter, setplayersFilter] = useState(false)
    const [yardFilter, setYardFilter] = useState(false)
    const [catgory, setcatgory] = useState({})
    // async function getCatgory() {
    //     try {
    //         const res = await fetch('http://localhost:5555/items/').then(r => r.json())

    //         setcatgory(res)

    //     } catch (error) {

    //      }

    // }
    function barPriceChange(e) {

        const { type, name, checked, value } = e.target
        const v = type === 'checkbox' ? checked : value


        const newcatgoryFilter = { ...catgoryFilter, [name]: v }

        setcatgoryFilter(newcatgoryFilter)


    }
    const onClickfiltersHandler = (filterName) => {
        setBallsFilter(false)
        setCoachFilter(false)
        setplayersFilter(false)
        setYardFilter(false)

        if (filterName === "balls")
            setBallsFilter(true)

        if (filterName === "coach")
            setCoachFilter(true)

        if (filterName === "players")
            setplayersFilter(true)

        if (filterName === "yard")
            setYardFilter(true)
sendFilters()

    }
    function sendFilters() {// שולח לשרת נתונים מהפילטר כדי להציג את הפריטים המבוקשים
        let filtersName = ''
        if (!ballsFilter && !coachFilter && !playersFilter && !yardFilter) {
            return filtersName = "all", catgoryFilter.barPrice
        }
        else if (ballsFilter && !coachFilter && !playersFilter && !yardFilter) {
            return filtersName = "balls", catgoryFilter.barPrice
        }
        else if (ballsFilter && coachFilter && !playersFilter && !yardFilter) {
            return filtersName = "coach", catgoryFilter.barPrice
        }
        else if (ballsFilter && !coachFilter && playersFilter && !yardFilter) {
            return filtersName = "players", catgoryFilter.barPrice
        }
        else if (ballsFilter && !coachFilter && !playersFilter && yardFilter) {
            return filtersName = "yard", catgoryFilter.barPrice
        }
    }
    const filtersTabsList = [
        {
            className: ['liCatgory', ballsFilter ? 'liCatgoryOn' : ""].join(" "),
            name: 'כדורים',
            key: 'balls',
            onClick: () => onClickfiltersHandler("balls")
        },
        {
            className: ['liCatgory', coachFilter ? 'liCatgoryOn' : ""].join(" "),
            name: 'למאמן',
            key: 'coach',
            onClick: () => onClickfiltersHandler("coach")
        },
        {
            className: ['liCatgory', playersFilter ? 'liCatgoryOn' : ""].join(" "),
            name: 'לשחקן',
            key: 'players',
            onClick: () => onClickfiltersHandler("players")
        },
        {
            className: ['liCatgory', yardFilter ? 'liCatgoryOn' : ""].join(" "),
            name: 'למרפסת&לחצר',
            key: 'yard',
            onClick: () => onClickfiltersHandler("yard")
        },
    ]
    return <div className='bigBoxFilters'>'
        <div className="catgoryBox" >
            <ul onClickCapture={barPriceChange}>
                קטגוריות
                <br />
                <br />
                {filtersTabsList.map((tab) => {
                    return (
                        <li {...tab}>{tab.name}</li>
                    )
                })}

            </ul>
        </div>
        <div className="BoxPriceMediator">
            <h2>תווך מחירים</h2>
            <br />
            <div className='priceBarcontainer'>
                <input type="range" name='barPrice' min="1" max="15000" className="barPrice" onChange={barPriceChange} />
                <h2>מ0 - {catgoryFilter.barPrice}ש"ח</h2>
            </div>

        </div>
        <div className="BoxBrand"></div>
    </div>
}