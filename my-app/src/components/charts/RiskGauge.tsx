import { Card, CardContent, Typography, Box } from '@mui/material';

export default function RiskGauge() {
  return (
    <Card sx={{ borderRadius: 3, height: '100%' }}>
      <CardContent>
        <Typography sx={{ fontWeight: 700, mb: 1 }}>
          Оценка риска академической неуспеваемости (AI)
        </Typography>

        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
            23%
          </Typography>
          <Typography color="text.secondary">
            Средний риск
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
