import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import StudentMetricCard from '../components/student/StudentMetricCard';
import PerformanceLineChart from '../components/student/PerformanceLineChart';
import ActivityDonutChart from '../components/student/ActivityDonutChart';
import CoursePerformanceTable from '../components/student/CoursePerformanceTable';
import AiForecastCards from '../components/student/AiForecastCards';
import {
  ACTIVITY_DISTRIBUTION,
  COURSE_ROWS,
  GRADE_FORECAST,
  PERFORMANCE_TRAJECTORY,
  RISK_ASSESSMENT,
  STUDENT_METRICS,
} from '../types/student';

const DATE_RANGES = ['01.05.2024 – 31.05.2024', '01.04.2024 – 30.04.2024', '01.03.2024 – 31.03.2024'];

export default function StudentDashboard() {
  const [dateRange, setDateRange] = useState(DATE_RANGES[0]);

  const handleDateChange = (event: SelectChangeEvent<string>) => {
    setDateRange(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', fontFamily: 'Roboto' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: 2,
          mb: 3,
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: { xs: 26, md: 30 },
              color: '#0F172A',
              letterSpacing: '-0.02em',
              mb: 0.75,
              lineHeight: 1.2,
            }}
          >
            Привет, Анна! 
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: 14,
              color: '#64748B',
            }}
          >
            Вот ваша учебная активность и прогресс на сегодня.
          </Typography>
        </Box>

        <FormControl size="small" sx={{ minWidth: 220 }}>
          <Select
            value={dateRange}
            onChange={handleDateChange}
            startAdornment={
              <CalendarMonthIcon sx={{ color: '#94A3B8', fontSize: 18, mr: 1, ml: 0.5 }} />
            }
            sx={{
              fontFamily: 'Roboto',
              fontSize: 13,
              borderRadius: '12px',
              bgcolor: '#FFFFFF',
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#E2E8F0' },
            }}
          >
            {DATE_RANGES.map((range) => (
              <MenuItem key={range} value={range} sx={{ fontFamily: 'Roboto', fontSize: 13 }}>
                {range}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
          }}
        >
          {STUDENT_METRICS.map((metric) => (
            <StudentMetricCard key={metric.id} metric={metric} />
          ))}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1.7fr 1fr',
            },
            alignItems: 'stretch',
          }}
        >
          <PerformanceLineChart data={PERFORMANCE_TRAJECTORY} />
          <ActivityDonutChart data={ACTIVITY_DISTRIBUTION} />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1.7fr 1fr',
            },
            alignItems: 'stretch',
          }}
        >
          <CoursePerformanceTable rows={COURSE_ROWS} />
          <AiForecastCards forecast={GRADE_FORECAST} risk={RISK_ASSESSMENT} />
        </Box>
      </Box>
    </Box>
  );
}
