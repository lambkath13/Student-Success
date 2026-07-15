import { Box, Card, CardContent, Typography } from '@mui/material';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import type { ActivitySlice } from '../../types/student';

interface ActivityDonutChartProps {
  data: ActivitySlice[];
  centerValue?: string;
  centerLabel?: string;
  title?: string;
}

export default function ActivityDonutChart({
  data,
  centerValue = '16.4',
  centerLabel = 'ч/нед.',
  title = 'Распределение по активностям',
}: ActivityDonutChartProps) {
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
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Box sx={{ position: 'relative', width: '100%', flex: 1, minHeight: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="58%"
                outerRadius="82%"
                paddingAngle={2}
                stroke="#FFFFFF"
                strokeWidth={3}
                startAngle={90}
                endAngle={-270}
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
                formatter={(value, name) => [`${value}%`, String(name)]}
              />
            </PieChart>
          </ResponsiveContainer>

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 28,
                lineHeight: 1.15,
                color: '#0F172A',
              }}
            >
              {centerValue}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: 13,
                fontWeight: 500,
                color: '#64748B',
              }}
            >
              {centerLabel}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 0.5 }}>
          {data.map((item) => (
            <Box
              key={item.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: item.color,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    color: '#64748B',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#334155',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.value}% · {item.hours}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
