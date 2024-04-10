import { Link, Outlet } from "react-router-dom"
import "./User.css"

const User = () => {
  return (
    <div className="user-container">
        <nav>
            <h1 className="greeting">Olá usuário</h1>
            <div className="selection-buttons">
                <Link to="/user" >Home</Link>
                <Link to="/user/profile" >Perfil</Link>
                <Link to="/user/workouts" >Treinos</Link>
                <Link to="/user/calcs" >IMC/BASAL</Link>
            </div>
        </nav>
        
        <main className="main-content">
            <Outlet />
        </main>

    </div>
  )
}

export default User