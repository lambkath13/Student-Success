import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { grade: '2', students: 56 },
  { grade: '3', students: 189 },
  { grade: '4', students: 492 },
  { grade: '5', students: 283 },
];

export default function GradeChart() {
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
          Прогноз итоговой оценки (AI)
        </Typography>

        <Box sx={{ width: '100%', flex: 1, minHeight: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
              <CartesianGrid strokeDasharray="0" stroke="#EEF2F7" vertical={false} />
              <XAxis
                dataKey="grade"
                tick={{ fill: '#94A3B8', fontSize: 12, fontFamily: 'Roboto' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#94A3B8', fontSize: 12, fontFamily: 'Roboto' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  fontFamily: 'Roboto',
                  borderRadius: 8,
                  border: '1px solid #E2E8F0',
                }}
              />
              <Bar dataKey="students" fill="#93c5fd" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
