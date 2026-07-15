import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { PerformancePoint } from '../../types/student';

export type PerformancePeriod = '6m' | '3m' | '1y';

interface PerformanceLineChartProps {
  data: PerformancePoint[];
  title?: string;
}

const PERIOD_LABELS: Record<PerformancePeriod, string> = {
  '6m': 'За 6 месяцев',
  '3m': 'За 3 месяца',
  '1y': 'За 1 год',
};

export default function PerformanceLineChart({
  data,
  title = 'Динамика успеваемости',
}: PerformanceLineChartProps) {
  const [period, setPeriod] = useState<PerformancePeriod>('6m');

  const handlePeriodChange = (event: SelectChangeEvent<PerformancePeriod>) => {
    setPeriod(event.target.value as PerformancePeriod);
  };

  const filteredData = period === '3m' ? data.slice(0, 3) : data;

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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1.5,
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 16,
              color: '#0F172A',
            }}
          >
            {title}
          </Typography>
          <FormControl size="small" sx={{ minWidth: 148 }}>
            <Select
              value={period}
              onChange={handlePeriodChange}
              sx={{
                fontFamily: 'Roboto',
                fontSize: 13,
                borderRadius: '10px',
                bgcolor: '#F8FAFC',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#E2E8F0' },
              }}
            >
              {(Object.keys(PERIOD_LABELS) as PerformancePeriod[]).map((key) => (
                <MenuItem key={key} value={key} sx={{ fontFamily: 'Roboto', fontSize: 13 }}>
                  {PERIOD_LABELS[key]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: '100%', flex: 1, minHeight: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filteredData} margin={{ top: 16, right: 12, left: -12, bottom: 0 }}>
              <defs>
                <linearGradient id="performanceFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity={0.22} />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="0" stroke="#EEF2F7" vertical={false} />
              <XAxis
                dataKey="month"
                tick={{ fill: '#94A3B8', fontSize: 12, fontFamily: 'Roboto' }}
                axisLine={false}
                tickLine={false}
                dy={8}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tick={{ fill: '#94A3B8', fontSize: 12, fontFamily: 'Roboto' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  fontFamily: 'Roboto',
                  borderRadius: 8,
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(15,23,42,0.08)',
                }}
                formatter={(value) => [`${value}`, 'Балл']}
                labelStyle={{ fontFamily: 'Roboto' }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#2563EB"
                strokeWidth={3}
                fill="url(#performanceFill)"
                dot={{ r: 5, fill: '#2563EB', stroke: '#FFFFFF', strokeWidth: 2 }}
                activeDot={{ r: 7, fill: '#2563EB', stroke: '#FFFFFF', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
