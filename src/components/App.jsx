import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout"
import { HomePage } from "../pages/HomePage/HomePage"
import { CatalogPage } from "../pages/CatalogPage/CatalogPage"
import { FavoritesPage } from "../pages/FavoritePage/FavoritePage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
