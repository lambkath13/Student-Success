import { Box, Card, CardContent, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import type { GradeForecast, RiskAssessment } from '../../types/student';

interface AiForecastCardsProps {
  forecast: GradeForecast;
  risk: RiskAssessment;
}

function SemiCircleGauge({ value, max }: { value: number; max: number }) {
  const size = 148;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = Math.PI * radius;
  const progress = Math.min(Math.max(value / max, 0), 1);
  const dash = circumference * progress;

  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size / 2 + 8,
        flexShrink: 0,
      }}
    >
      <svg width={size} height={size / 2 + stroke} viewBox={`0 0 ${size} ${size / 2 + stroke}`}>
        <path
          d={`M ${stroke / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - stroke / 2} ${size / 2}`}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        <path
          d={`M ${stroke / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - stroke / 2} ${size / 2}`}
          fill="none"
          stroke="#10B981"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
        />
      </svg>

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          pb: 0.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 28,
            lineHeight: 1,
            color: '#0F172A',
          }}
        >
          {value.toFixed(1)}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: 12,
            color: '#64748B',
            mt: 0.25,
          }}
        >
          из {max.toFixed(1)}
        </Typography>
      </Box>
    </Box>
  );
}

export default function AiForecastCards({ forecast, risk }: AiForecastCardsProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
      <Card
        sx={{
          flex: 1,
          borderRadius: '16px',
          boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
          border: '1px solid #EEF2F7',
        }}
      >
        <CardContent sx={{ p: 2.5, height: '100%' }}>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 15,
              color: '#0F172A',
              mb: 2,
            }}
          >
            {forecast.label}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2.5,
              flexWrap: 'wrap',
            }}
          >
            <SemiCircleGauge value={forecast.value} max={forecast.max} />

            <Box sx={{ minWidth: 140, flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 600,
                  fontSize: 14,
                  color: '#0F172A',
                  mb: 1,
                  lineHeight: 1.35,
                }}
              >
                {forecast.likelihood}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#059669',
                }}
              >
                {forecast.trendLabel}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          flex: 1,
          borderRadius: '16px',
          boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
          border: '1px solid #EEF2F7',
        }}
      >
        <CardContent sx={{ p: 2.5, height: '100%' }}>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 15,
              color: '#0F172A',
              mb: 2,
              lineHeight: 1.35,
            }}
          >
            Оценка риска академической неуспеваемости (AI)
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '14px',
                bgcolor: 'rgba(37, 99, 235, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <SecurityIcon sx={{ color: '#2563EB', fontSize: 30 }} />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#0F172A',
                  mb: 0.5,
                  lineHeight: 1.2,
                }}
              >
                {risk.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 13,
                  color: '#64748B',
                  mb: 1,
                  lineHeight: 1.4,
                }}
              >
                {risk.description}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#059669',
                }}
              >
                {risk.trendLabel}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
