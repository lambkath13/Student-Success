import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Avatar,
  Box,
  IconButton,
} from '@mui/material';

import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'white',
        color: 'black',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          Дашборд
        </Typography>

        <Box sx={{ flex: 1 }} />

        <TextField
          size="small"
          placeholder="Поиск студента, группы, курса..."
          sx={{ width: 350 }}
        />

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar>И</Avatar>
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Иван Петров</Typography>
            <Typography variant="body2" color="text.secondary">
              Профессор
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}