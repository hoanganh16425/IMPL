import React from 'react'
import './MenuLeft.scss'
import { menuSections } from '../../@core/shared/constants'
import { NavLink } from 'react-router-dom'
function MenuLeft() {
  return (
    <>
      <div className="main-menu">
        <NavLink to="/" className="menu-logo">
          <img src={require("../../assets/img/IMPL_1.png")} alt="impl_logo" />
        </NavLink>
        <div className="menu-group">
          {
            menuSections.map((item, i) => {
              return item.isDisplay ? <>
                <span className="menu-title">{item.name}</span>
                <>
                  {
                    item.items.map((element, i) => {
                      return element.isDisplay ? <NavLink key={i} to={element.route} className="menu-item"><i className={element.icon}></i>{element.name}</NavLink> : null
                    })
                  }
                </>
              </> : null
            })
          }
        </div >
      </div >
    </>
  )
}

export default MenuLeft