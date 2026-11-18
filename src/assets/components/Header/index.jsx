import { Link } from "react-router"
import "./header.css"


export default function Header() {

  return (
    <header className="header">
        <h1 className="logo">Fôlego</h1>

        <nav className="nav"></nav>
        <Link to="/">Ínicio</Link>
        <Link to="/modalidades">Modalidades</Link>
        <Link to="/sobre">Sobre</Link>

    </header>
  )
}
