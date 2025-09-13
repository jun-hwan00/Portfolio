import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header id="header" className="alt">
      <Link to="/" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></Link>
      <nav>
        <Link to="/#menu">Menu</Link>
        <Link to="/landing">Landing</Link>
      </nav>
    </header>
  )
}
