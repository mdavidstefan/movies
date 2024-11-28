import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css'
import { Trendings } from './pages/Trendings'
import { Movies } from './pages/Movies'
import { TVSeries } from './pages/TVSeries'
import { SearchPage } from './pages/SearchPage'
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      { path: '/', element: <Trendings /> },
      { path: '/movies', element: <Movies /> },
      { path: '/series', element: <TVSeries /> },
      { path: '/search', element: <SearchPage /> },
      { path: '*', element: <NotFound /> }
    ]
  }
],
  {
    future: {

      v7_relativeSplatPath: true,

      v7_normalizeFormMethod: true,

      v7_fetcherPersist: true,

      v7_partialHydration: true,

      v7_skipActionErrorRevalidation: true,
    }
  })

export const THEME = createTheme({
  typography: {
    "fontFamily": `"Open Sans", sans-serif`,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ThemeProvider>
  )
  
}

export default App
