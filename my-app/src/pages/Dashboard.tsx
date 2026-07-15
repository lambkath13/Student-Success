import { Box, Typography, Card, CardContent } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import StatsCard from '../components/StatsCard';
import StressChart from '../components/charts/StressChart';
import GradeChart from '../components/charts/GradeChart';
import RiskGauge from '../components/charts/RiskGauge';

const CARD_SHELL = {
  borderRadius: '16px',
  boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
  border: '1px solid #EEF2F7',
} as const;

export default function Dashboard() {
  return (
    <Box sx={{ width: '100%', fontFamily: 'Roboto' }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: { xs: 26, md: 30 },
            color: '#0F172A',
            letterSpacing: '-0.02em',
            mb: 0.75,
            lineHeight: 1.2,
          }}
        >
          Добро пожаловать, Иван Петров!
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: 14,
            color: '#64748B',
          }}
        >
          Обзор успеваемости и активности студентов
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {/* Row 1 — KPI cards (same grid system as StudentDashboard) */}
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
            alignItems: 'stretch',
          }}
        >
          <StatsCard
            icon={<AccessTimeIcon sx={{ color: '#2563EB', fontSize: 22 }} />}
            iconBg="rgba(37, 99, 235, 0.12)"
            title="Среднее время обучения"
            value="18.6 ч"
            change="+8.5%"
          />
          <StatsCard
            icon={<GroupsIcon sx={{ color: '#10B981', fontSize: 22 }} />}
            iconBg="rgba(16, 185, 129, 0.12)"
            title="Посещаемость"
            value="92.4%"
            change="+4.3%"
          />
          <StatsCard
            icon={<MenuBookIcon sx={{ color: '#8B5CF6', fontSize: 22 }} />}
            iconBg="rgba(139, 92, 246, 0.12)"
            title="Онлайн-курсы"
            value="72.1%"
            change="+6.7%"
          />
          <StatsCard
            icon={<AssignmentTurnedInIcon sx={{ color: '#F59E0B', fontSize: 22 }} />}
            iconBg="rgba(245, 158, 11, 0.12)"
            title="Выполнение заданий"
            value="87.3%"
            change="+5.1%"
          />
          <StatsCard
            icon={<EmojiEventsIcon sx={{ color: '#EF4444', fontSize: 22 }} />}
            iconBg="rgba(239, 68, 68, 0.12)"
            title="Средний балл"
            value="78.6"
            change="-2.4%"
            changePositive={false}
          />
        </Box>

        {/* Row 2 — analytics charts (aligned card heights / paddings with student) */}
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
              lg: '1.1fr 1.2fr 0.9fr',
            },
            alignItems: 'stretch',
          }}
        >
          <StressChart />
          <GradeChart />
          <RiskGauge />
        </Box>

        {/* Row 3 — high-risk stub (same card shell / padding as student bottom cards) */}
        <Card sx={{ ...CARD_SHELL, minHeight: 220 }}>
          <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 16,
                color: '#0F172A',
                mb: 1,
              }}
            >
              Студенты с высоким риском
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: 13,
                color: '#64748B',
              }}
            >
              Список студентов с повышенным риском академической неуспеваемости
              появится здесь.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
