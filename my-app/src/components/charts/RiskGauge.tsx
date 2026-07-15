import { Card, CardContent, Typography, Box } from '@mui/material';

export default function RiskGauge() {
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
            lineHeight: 1.35,
          }}
        >
          Оценка риска академической неуспеваемости (AI)
        </Typography>

        <Box
          sx={{
            flex: 1,
            minHeight: 260,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 48,
              lineHeight: 1,
              color: '#0F172A',
              mb: 1,
            }}
          >
            23%
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: 14,
              fontWeight: 500,
              color: '#64748B',
            }}
          >
            Средний риск
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
