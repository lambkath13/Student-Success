import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
    { name: 'Низкий', value: 34, color: '#22c55e' },
    { name: 'Средний', value: 41, color: '#facc15' },
    { name: 'Высокий', value: 25, color: '#ef4444' },
];

export default function StressChart() {
    return (
        <Card sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    Распределение по уровню стресса
                </Typography>

                <Box sx={{ width: '100%', height: 260 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={60}
                                outerRadius={90}
                                paddingAngle={2}
                                dataKey="value"
                            >
                                {data.map((entry) => (
                                    <Cell key={entry.name} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </Box>
            </CardContent>
        </Card>
    );
}