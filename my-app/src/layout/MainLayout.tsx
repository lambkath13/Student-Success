import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
        fontFamily: '"Roboto", Helvetica, Arial, sans-serif',
      }}
    >
      <Sidebar />

      <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <Topbar />
        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
