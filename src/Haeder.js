import React from 'react';
import{Link}from 'react-router-dom'

function Haeder() {
    return (<header>
     <Link to= '/'  className='hederLink' >
       <div className='navHeader'><img className='logoImage'/></div>
     </Link>
    <nav>
      <li className='haederLi'>ראשי</li>
      <li className='haederLi'>עלינו</li>
      <li className='haederLi'>מוצרים</li>
      <li className='haederLi'>בלוג</li>
      <li className='haederLi'>shop</li>
      <li className='haederLi'>צרו קשר</li>
      <li className='haederLi'>חפש</li>
      <li className='haederLi'>עגלה</li>
    </nav>
    </header> 
    );
  }
  

  export default Haeder;