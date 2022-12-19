 import React from "react";
 import "../App.css";
 import {SidebarData} from "./SidebarData"

 function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className = "SidebarList">
                {SidebarData.map((val,key) => {
                        return ( 
                        <li 
                            key={key} 
                            className="row"
                            onCLick={()=> {
                                window.location.pathname = val.link;
                            }}
                        >
                            {" "}
                        <div>{val.icon}</div> <div>{val.title}</div>
    
                        </li>
                    );
                })}
            </ul>
        </div>
    );
 }

 export default Sidebar;











//  function si





//  const menuItems = [
//       { id: 1,
//         label: 'Item 1',
//         icon: 'fas fa-battery-half',
//         items: [
//           { id: 11,
//             label: 'Item 1.1',
//             icon: 'fas fa-car',
//             link: '/item11',
//           },
//           { id: 12,
//             label: 'Item 1.2',
//             icon: 'fas fa-bullhorn',
//             link: '/item12',
//           },
//         ],
//       },
//     ];


//     const NavLink = props => (<Link to={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</Link>);

//     const NavLink = props => (<a href={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</a>);

   
//     <SideNav
//   items={menuItems}
//   linkComponent={NavLink}
//   chevronComponent={Chevron}
//   iconComponent={Icon}
// />