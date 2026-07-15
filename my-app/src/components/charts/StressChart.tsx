import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { name: 'Низкий', value: 34, color: '#22c55e' },
  { name: 'Средний', value: 41, color: '#facc15' },
  { name: 'Высокий', value: 25, color: '#ef4444' },
];

export default function StressChart() {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: '16px',
        boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
        border: '1px solid #EEF2F7',
      }}
    >
      <CardContent sx={{ p: 2.5, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 16,
            color: '#0F172A',
            mb: 1.5,
          }}
        >
          Распределение по уровню стресса
        </Typography>

        <Box sx={{ width: '100%', flex: 1, minHeight: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius="58%"
                outerRadius="82%"
                paddingAngle={2}
                stroke="#FFFFFF"
                strokeWidth={3}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  fontFamily: 'Roboto',
                  borderRadius: 8,
                  border: '1px solid #E2E8F0',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1.5,
            mt: 1,
          }}
        >
          {data.map((item) => (
            <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: item.color,
                }}
              />
              <Typography sx={{ fontFamily: 'Roboto', fontSize: 12, color: '#64748B' }}>
                {item.name} · {item.value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
