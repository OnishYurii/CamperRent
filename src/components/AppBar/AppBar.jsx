import { Logo } from "../Logo/Logo"
import { Navigation } from "../Navigation/Navigation"
import css from "./AppBar.module.css"

export const AppBar = () => {
  return (
    <header className={css.navBar}>
      <Logo />
      <Navigation />
    </header>
  )
}
