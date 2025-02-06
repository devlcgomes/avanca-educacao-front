import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardScreen from './pages/Dashboard/Layout/DashboardScreen'
import LoginScreen from './pages/Login/Layout/LoginScreen'
import CatalogScreen from './pages/Catalog/Layout/CatalogScreen'
import CommunityScreen from './pages/Community/Layout/CommunityScreen'
import ClassRoomWrapper from './pages/Classroom/Layout/ClassRoomWrapper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/dashboard/*" element={<DashboardScreen />}>
          <Route path="catalog" element={<CatalogScreen />} />
          <Route path="community" element={<CommunityScreen />} />
          <Route path="classroom/:courseId" element={<ClassRoomWrapper />} />
          {/* outras sub-rotas aqui */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

