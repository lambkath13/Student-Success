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
import FaceIcon from '@mui/icons-material/Face';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WarningIcon from '@mui/icons-material/Warning';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';

import { NavLink } from 'react-router-dom';
import type { ReactNode } from 'react';

interface NavItem {
  path: string;
  label: string;
  icon: ReactNode;
}

const items: NavItem[] = [
  { path: '/', label: 'Дашборд', icon: <DashboardIcon /> },
  { path: '/student', label: 'Кабинет студента', icon: <FaceIcon /> },
  { path: '/students', label: 'Студенты', icon: <SchoolIcon /> },
  { path: '/teachers', label: 'Преподаватели', icon: <PersonIcon /> },
  { path: '/analytics', label: 'Аналитика', icon: <AnalyticsIcon /> },
  { path: '/ai-predictions', label: 'AI-Прогнозы', icon: <SmartToyIcon /> },
  { path: '/risk', label: 'Оценка рисков', icon: <WarningIcon /> },
  { path: '/tasks', label: 'Задания', icon: <AssignmentIcon /> },
  { path: '/exams', label: 'Экзамены', icon: <QuizIcon /> },
  { path: '/courses', label: 'Онлайн-Курсы', icon: <MenuBookIcon /> },
  { path: '/reports', label: 'Отчеты', icon: <DescriptionIcon /> },
  { path: '/settings', label: 'Настройки', icon: <SettingsIcon /> },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 260,
        flexShrink: 0,
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        p: 2,
        fontFamily: '"Roboto", Helvetica, Arial, sans-serif',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, px: 1 }}>
        AI-Ассистент
      </Typography>

      <List disablePadding>
        {items.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            end={item.path === '/'}
            sx={{
              mb: 0.75,
              borderRadius: 2,
              '&.active': {
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
                '&:hover': { bgcolor: 'primary.dark' },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
