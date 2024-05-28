import ReactDOM from 'react-dom/client'
import './index.css';
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { route } from './routes/index.jsx';
import { RouterProvider } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
)



