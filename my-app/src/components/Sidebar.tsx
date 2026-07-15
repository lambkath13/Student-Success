import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WarningIcon from '@mui/icons-material/Warning';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';

import { NavLink } from 'react-router-dom';

const items = [
  ['/', 'Дашборд', <DashboardIcon />],
  ['/students', 'Студенты', <SchoolIcon />],
  ['/teachers', 'Преподаватели', <PersonIcon />],
  ['/analytics', 'Аналитика', <AnalyticsIcon />],
  ['/ai-predictions', 'AI-Прогнозы', <SmartToyIcon />],
  ['/risk', 'Оценка рисков', <WarningIcon />],
  ['/tasks', 'Задания', <AssignmentIcon />],
  ['/exams', 'Экзамены', <QuizIcon />],
  ['/courses', 'Онлайн-Курсы', <MenuBookIcon />],
  ['/reports', 'Отчеты', <DescriptionIcon />],
  ['/settings', 'Настройки', <SettingsIcon />],
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 260,
        bgcolor: 'white',
        borderRight: '1px solid #e5e7eb',
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600}} >
        AI-Ассистент
      </Typography>

      <List>
        {items.map(([path, label, icon]) => (
          <ListItemButton
            key={String(path)}
            component={NavLink}
            to={String(path)}
            sx={{
              mb: 1,
              borderRadius: 2,
              '&.active': {
                bgcolor: '#2563eb',
                color: 'white',
                '& .MuiListItemIcon-root': { color: 'white' },
              },
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={String(label)} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

