import "./Login.css"
import Icon1 from "../assets/user.png"
import Icon2 from "../assets/lock.png"
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/user")
        console.log("passou")
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label>
                    <span className="lock"><img src={Icon1} alt="" /></span>
                    <input type="text" name="usuario" id="usuario" placeholder="Usuário"/>
                </label>
                <label>
                    <span className="lock"><img src={Icon2} alt="" /></span>
                    <input type="password" name="senha" id="senha" placeholder="Senha" />
                </label>
                
                <span>Esqueceu sua senha? Recupere aqui!</span>
                <button type="submit">ENTRAR</button>
                <span>Não tem conta? <Link to="/register">Cadastre-se</Link> agora</span>
            </form>
        </div>
    )
}

export default Login