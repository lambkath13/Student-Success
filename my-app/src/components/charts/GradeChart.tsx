import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { grade: '2', students: 56 },
  { grade: '3', students: 189 },
  { grade: '4', students: 492 },
  { grade: '5', students: 283 },
];

export default function GradeChart() {
  return (
    <Card sx={{ borderRadius: 3, height: '100%' }}>
      <CardContent>
        <Typography sx={{ fontWeight: 700, mb: 1 }}>
          Прогноз итоговой оценки (AI)
        </Typography>

        <Box sx={{ width: '100%', height: 260 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="grade" />
              <YAxis />
              <Bar dataKey="students" fill="#93c5fd" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}