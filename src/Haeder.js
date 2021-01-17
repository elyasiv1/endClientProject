import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


function Haeder() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    window.addEventListener('storage', storageEvent);

    return () => {
      window.removeEventListener('storage', storageEvent);//איך לשנות רינור בstorage
    }
  }, []);

  const storageEvent = () => {
    console.log("!?!45345345345?!?");
    forceUpdate()
  }
  const searchBtn=async()=>{}  //כדי שיעבוד צריך להריץ שוב את כל ה
  // item נראה שעדיף ברידקס
  //  אחרי שעובד צריך לשנות את הפילטר 
//     var url = `http://localhost:5555/items/?item=${item.name}?brand=${item.brend}?category=${item.category}`
//     try {
//         const res = await fetch(url)
//             .then(r => r.json())
//         setItems(res)


//     } catch (error) { }


// }
  const iconSearch = <FontAwesomeIcon icon={faSearch} />
  const iconLogout = <FontAwesomeIcon icon={faSignOutAlt} />
  console.log(localStorage);
  return (
    <header>
      <Link to='/' className='hederLink' >
        <div className='navHeader'><img className='logoImage' /></div>
        <h2 className='haederName'>ESH Basketball Shop</h2>
      </Link>

      <nav>
        <Link to='/' className="haederLinkList"><li className='haederLi'>ראשי</li></Link>
        <li className='haederLi'>עלינו</li>
        <Link to='/Home' className="haederLinkList"><li className='haederLi'>מוצרים</li></Link>
        <li className='haederLi'>shop</li>
        <li className='haederLi'>צרו קשר</li>
        <form className="searchForm">
          <i
           onClick={searchBtn()}
          >{iconSearch}</i>
          <input className='searchInput' type="search" placeholder="חפש מוצר או מותג" />
        </form>
        <div className='userMail'>
          {localStorage.email}
        </div>
        <div style={{ display: localStorage.email ? "" : "none" }}>
          <FontAwesomeIcon className='logout' onClick={() => { localStorage.clear() }} icon={faSignOutAlt} />
        </div>
      </nav>
    </header>
  );
}


export default Haeder;