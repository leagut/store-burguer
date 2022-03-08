import {NavLink} from 'react-router-dom'

export const Sidebar = () => {
return (
    <div>
        <ul>
            <li>
                <NavLink to='Products'>Productos</NavLink>
            </li>
        </ul>
    </div>
)
}