import React from 'react'

export default function Filters(props) {
    // const sending = { ...departmentFilter, [name]: value }

    // setdepartmentFilter(sending)




    //   if(!departmentFilter.balls && !departmentFilter.coach && !departmentFilter.players && !departmentFilter.yard){
    //       return setcatgory(...departmentFilter,sending,"all") 
    //   }
    //  else if(departmentFilter.balls && !departmentFilter.coach && !departmentFilter.players && !departmentFilter.yard){
    //       return setcatgory(...departmentFilter,sending,"balls") 
    //   }
    //  else if(!departmentFilter.balls && departmentFilter.coach && !departmentFilter.players && !departmentFilter.yard){
    //       return setcatgory(...departmentFilter,sending,"coach") 
    //   }
    //  else if(!departmentFilter.balls && !departmentFilter.coach && departmentFilter.players && !departmentFilter.yard){
    //       return setcatgory(...departmentFilter,sending,"players") 
    //   }
    //  else if(!departmentFilter.balls && !departmentFilter.coach && !departmentFilter.players && departmentFilter.yard){
    //       return setcatgory(...departmentFilter,sending,"yard") 
    //   }



    // const [ballsFilter, setBallsFilter] = useState(false)
    // const [coachFilter, setcoachFilter] = useState(false)
    // const [playersFilter, setplayersFilter] = useState(false)
    // const [yardFilter, setYardFilter] = useState(false)
    // const [catgory, setcatgory] = useState({})
    // async function getCatgory() {
    //     try {
    //         const res = await fetch('http://localhost:5555/items/').then(r => r.json())

    //         setcatgory(res)

    //     } catch (error) {

    //      }

    // }


    // sendFilters()


    // function sendFilters() {// שולח לשרת נתונים מהפילטר כדי להציג את הפריטים המבוקשים
    //     let filtersName = ''
    //     if (!departmentFilter.balls && !departmentFilter.coach && !departmentFilter.players && !departmentFilter.yard) {
    //         return filtersName = "all",departmentFilter.barPrice
    //     }
    //     else if (ballsFilter && !coachFilter && !playersFilter && !yardFilter) {
    //         return filtersName = "balls", departmentFilter.barPrice
    //     }
    //     else if (ballsFilter && coachFilter && !playersFilter && !yardFilter) {
    //         return filtersName = "coach", departmentFilter.barPrice
    //     }
    //     else if (ballsFilter && !coachFilter && playersFilter && !yardFilter) {
    //         return filtersName = "players", departmentFilter.barPrice
    //     }
    //     else if (ballsFilter && !coachFilter && !playersFilter && yardFilter) {
    //         return filtersName = "yard", departmentFilter.barPrice
    //     }
    // }
    const filtersTabsList = [
        {
            className: ['liCatgory', props.departmentFilter.all ? 'liCatgoryOn' : ""].join(" "),
            name: 'כל המוצרים',
            key: 'all',
            onClick: () => props.onClickfiltersHandler("all")
        },
        {
            className: ['liCatgory', props.departmentFilter.balls ? 'liCatgoryOn' : ""].join(" "),
            name: 'כדורים',
            key: 'balls',
            onClick: () => props.onClickfiltersHandler("balls")
        },
        {
            className: ['liCatgory', props.departmentFilter.coach ? 'liCatgoryOn' : ""].join(" "),
            name: 'למאמן',
            key: 'coach',
            onClick: () => props.onClickfiltersHandler("coach")
        },
        {
            className: ['liCatgory', props.departmentFilter.players ? 'liCatgoryOn' : ""].join(" "),
            name: 'לשחקן',
            key: 'players',
            onClick: () => props.onClickfiltersHandler("players")
        },
        {
            className: ['liCatgory', props.departmentFilter.yard ? 'liCatgoryOn' : ""].join(" "),
            name: 'למרפסת&לחצר',
            key: 'yard',
            onClick: () => props.onClickfiltersHandler("yard")//משום מה  לא עובד הקלאס 16.6
        },
    ]
    return <div className='bigBoxFilters'>'
        <div className="catgoryBox" >
            <ul>

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
                <input type="range" name='barPrice' min="1" max="15000" className="barPrice" onChange={props.barPriceChange} />
                <h2>מ0 - {props.departmentFilter.barPrice}ש"ח</h2>
            </div>

        </div>
        <div className="BoxBrand"></div>
    </div>
}