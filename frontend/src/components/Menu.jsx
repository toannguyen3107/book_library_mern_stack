import React, {useState} from 'react'

const Menu = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <>
          <button 
                onClick={() => setToggle(!toggle)} 
                class="bg-blue-500 text-xl px-2 py-3 text-white rounded">
              Toggle State
          </button>
          {toggle && (
            <ul class="list-group">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          )}
        </>
      )
    }

export default Menu