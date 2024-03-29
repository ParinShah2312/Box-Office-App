import { HashRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <GlobalTheme>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>

            <Route path="show/:showId" element={<Show />} />

            <Route path="*" element={<div>No Page Found</div>} />
          </Routes>
        </HashRouter>
      </QueryClientProvider>
    </GlobalTheme>
  );
}

export default App;
