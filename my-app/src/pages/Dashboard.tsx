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

export default function Dashboard() {
    return (
        <Box sx={{ width: '100%', p: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }} >
                Добро пожаловать, Иван Петров!
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                Обзор успеваемости и активности студентов
            </Typography>

            {/* Главная обертка для всего контента */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                
           
                <Box sx={{ 
                    display: 'grid', 
                    gap: 2, 
                    gridTemplateColumns: {
                        xs: '1fr',          // На мобилках в 1 колонку
                        sm: '1fr 1fr',      // На планшетах в 2 колонки
                        md: 'repeat(5, 1fr)' // На компах РОВНО 5 колонок в ряд!
                    }
                }}>
                    <StatsCard
                        icon={<AccessTimeIcon color="primary" />}
                        title="Среднее время обучения"
                        value="18.6 ч"
                        change="+8.5%"
                    />
                    <StatsCard
                        icon={<GroupsIcon color="success" />}
                        title="Посещаемость"
                        value="92.4%"
                        change="+4.3%"
                    />
                    <StatsCard
                        icon={<MenuBookIcon color="secondary" />}
                        title="Онлайн-курсы"
                        value="72.1%"
                        change="+6.7%"
                    />
                    <StatsCard
                        icon={<AssignmentTurnedInIcon color="warning" />}
                        title="Выполнение заданий"
                        value="87.3%"
                        change="+5.1%"
                    />
                    <StatsCard
                        icon={<EmojiEventsIcon color="error" />}
                        title="Средний балл"
                        value="78.6"
                        change="-2.4%"
                    />
                </Box>

                {/* СТРОКА 2: Графики */}
                <Box sx={{ 
                    display: 'grid', 
                    gap: 2, 
                    gridTemplateColumns: {
                        xs: '1fr',         // На мобилках вертикально друг под другом
                        lg: '4fr 5fr 3fr'  // На компах пропорции 4:5:3 (как твои lg={4}, lg={5}, lg={3})
                    }
                }}>
                    <StressChart />
                    <GradeChart />
                    <RiskGauge />
                </Box>

                {/* СТРОКА 3: Таблица/Список рисков */}
                <Box>
                    <Card sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                Студенты с высоким риском
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}
