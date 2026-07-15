import { Card, CardContent, Typography, Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
  change: string;
  iconBg?: string;
  changePositive?: boolean;
}

export default function StatsCard({
  icon,
  title,
  value,
  change,
  iconBg = 'rgba(37, 99, 235, 0.12)',
  changePositive = true,
}: Props) {
  const trendColor = changePositive ? '#059669' : '#DC2626';
  const trendBg = changePositive ? '#ECFDF5' : '#FEF2F2';

  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: '16px',
        boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
        border: '1px solid #EEF2F7',
      }}
    >
      <CardContent
        sx={{
          p: 2.25,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:last-child': { pb: 2.25 },
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '10px',
            bgcolor: iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1.75,
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: 13,
            fontWeight: 500,
            color: '#64748B',
            mb: 0.75,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 1.2,
            color: '#0F172A',
            letterSpacing: '-0.02em',
            mb: 1.5,
          }}
        >
          {value}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          <Box
            component="span"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 1,
              py: 0.4,
              borderRadius: '999px',
              bgcolor: trendBg,
              color: trendColor,
              fontFamily: 'Roboto',
              fontSize: 11,
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            {change}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
