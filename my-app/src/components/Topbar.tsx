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
import { useLocation } from 'react-router-dom';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Дашборд преподавателя',
  '/student': 'Кабинет студента',
  '/students': 'Студенты',
  '/teachers': 'Преподаватели',
  '/analytics': 'Аналитика',
  '/ai-predictions': 'AI-Прогнозы',
  '/risk': 'Оценка рисков',
  '/tasks': 'Задания',
  '/exams': 'Экзамены',
  '/courses': 'Онлайн-курсы',
  '/reports': 'Отчеты',
  '/settings': 'Настройки',
};

export default function Topbar() {
  const { pathname } = useLocation();
  const isStudent = pathname.startsWith('/student');
  const title = PAGE_TITLES[pathname] ?? 'Дашборд';

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ gap: 2, minHeight: 72 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>

        <Box sx={{ flex: 1 }} />

        <TextField
          size="small"
          placeholder="Поиск студента, группы, курса..."
          sx={{
            width: { xs: 180, sm: 280, md: 350 },
            '& .MuiOutlinedInput-root': {
              bgcolor: 'background.default',
              borderRadius: 2,
              fontFamily: '"Roboto", Helvetica, Arial, sans-serif',
            },
          }}
        />

        <IconButton aria-label="Уведомления">
          <NotificationsIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Avatar
            sx={{
              bgcolor: isStudent ? 'secondary.main' : 'primary.main',
              width: 40,
              height: 40,
              fontWeight: 600,
            }}
          >
            {isStudent ? 'А' : 'И'}
          </Avatar>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography sx={{ fontWeight: 600, lineHeight: 1.2 }}>
              {isStudent ? 'Анна Иванова' : 'Иван Петров'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {isStudent ? 'Студент' : 'Профессор'}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
