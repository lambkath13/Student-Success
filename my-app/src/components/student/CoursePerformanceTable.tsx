import { ReactNode } from 'react';
import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import CodeIcon from '@mui/icons-material/Code';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TranslateIcon from '@mui/icons-material/Translate';
import type { CourseRow } from '../../types/student';

interface CoursePerformanceTableProps {
  rows: CourseRow[];
  title?: string;
}

function CourseIcon({ row }: { row: CourseRow }): ReactNode {
  const props = { sx: { fontSize: 18, color: row.iconColor } };
  switch (row.icon) {
    case 'math':
      return <FunctionsIcon {...props} />;
    case 'code':
      return <CodeIcon {...props} />;
    case 'econ':
      return <AccountBalanceIcon {...props} />;
    case 'writing':
      return <MenuBookIcon {...props} />;
    case 'english':
      return <TranslateIcon {...props} />;
    default:
      return null;
  }
}

const headSx = {
  fontFamily: 'Roboto',
  fontWeight: 600,
  fontSize: 12,
  color: '#94A3B8',
  borderBottomColor: '#EEF2F7',
  py: 1.25,
  whiteSpace: 'nowrap' as const,
};

const cellSx = {
  fontFamily: 'Roboto',
  borderBottomColor: '#EEF2F7',
  py: 1.6,
};

export default function CoursePerformanceTable({
  rows,
  title = 'Успеваемость по дисциплинам',
}: CoursePerformanceTableProps) {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: '16px',
        boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
        border: '1px solid #EEF2F7',
      }}
    >
      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2 } }}>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 16,
            color: '#0F172A',
            mb: 1.5,
          }}
        >
          {title}
        </Typography>

        <TableContainer>
          <Table size="small" aria-label="успеваемость по дисциплинам">
            <TableHead>
              <TableRow>
                <TableCell sx={headSx}>Дисциплина</TableCell>
                <TableCell sx={{ ...headSx, minWidth: 150 }}>Прогресс</TableCell>
                <TableCell align="center" sx={headSx}>
                  Ср. балл
                </TableCell>
                <TableCell align="center" sx={headSx}>
                  Посещаемость
                </TableCell>
                <TableCell sx={headSx}>Задания</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                const isDone = row.assignmentStatus === 'done';
                return (
                  <TableRow key={row.id} hover>
                    <TableCell sx={cellSx}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '8px',
                            bgcolor: row.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <CourseIcon row={row} />
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: 'Roboto',
                            fontWeight: 600,
                            fontSize: 13.5,
                            color: '#0F172A',
                          }}
                        >
                          {row.name}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell sx={cellSx}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, minWidth: 130 }}>
                        <LinearProgress
                          variant="determinate"
                          value={row.progress}
                          sx={{
                            flex: 1,
                            height: 8,
                            borderRadius: 999,
                            bgcolor: '#DBEAFE',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 999,
                              bgcolor: '#2563EB',
                            },
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: 'Roboto',
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#334155',
                            minWidth: 34,
                          }}
                        >
                          {row.progress}%
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="center" sx={{ ...cellSx, fontWeight: 600, color: '#0F172A', fontSize: 13 }}>
                      {row.averageScore.toFixed(1)} / 5
                    </TableCell>

                    <TableCell align="center" sx={{ ...cellSx, color: '#334155', fontSize: 13 }}>
                      {row.attendance}%
                    </TableCell>

                    <TableCell sx={cellSx}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: isDone ? '#10B981' : '#F59E0B',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: 'Roboto',
                            fontSize: 12,
                            color: '#64748B',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {row.assignmentsDone} из {row.assignmentsTotal}{' '}
                          <Box
                            component="span"
                            sx={{
                              color: isDone ? '#059669' : '#D97706',
                              fontWeight: 600,
                            }}
                          >
                            {isDone ? 'Выполнено' : 'В процессе'}
                          </Box>
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 1.75, pb: 0.5 }}>
          <Link
            href="/courses"
            underline="hover"
            sx={{
              fontFamily: 'Roboto',
              fontSize: 13,
              fontWeight: 600,
              color: '#2563EB',
              cursor: 'pointer',
            }}
          >
            Смотреть все курсы
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
