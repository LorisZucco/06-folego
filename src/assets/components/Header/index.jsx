import { Link, NavLink } from "react-router"
import "./header.css"


export default function Header() {

  return (
    <header className="header">
        <h1 className="logo">Fôlego</h1>

        <nav className="nav">
        <NavLink to="/">Ínicio</NavLink>
        <NavLink to="/modalidades">Modalidades</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        </nav>
    </header>
  )
}
