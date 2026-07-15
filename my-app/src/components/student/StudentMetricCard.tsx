import { ReactNode } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import type { MetricTone, StudentMetric } from '../../types/student';

const ICON_STYLES: Record<MetricTone, { iconBg: string; iconColor: string }> = {
  primary: { iconBg: 'rgba(37, 99, 235, 0.12)', iconColor: '#2563EB' },
  success: { iconBg: 'rgba(16, 185, 129, 0.12)', iconColor: '#10B981' },
  purple: { iconBg: 'rgba(139, 92, 246, 0.12)', iconColor: '#8B5CF6' },
  warning: { iconBg: 'rgba(245, 158, 11, 0.12)', iconColor: '#F59E0B' },
  stress: { iconBg: 'rgba(244, 63, 94, 0.12)', iconColor: '#F43F5E' },
};

const BADGE_STYLES: Record<
  StudentMetric['badgeVariant'],
  Partial<Record<MetricTone, { color: string; bgcolor?: string }>>
> = {
  pill: {
    primary: { color: '#059669', bgcolor: '#ECFDF5' },
    success: { color: '#059669', bgcolor: '#ECFDF5' },
    warning: { color: '#059669', bgcolor: '#ECFDF5' },
    purple: { color: '#059669', bgcolor: '#ECFDF5' },
    stress: { color: '#059669', bgcolor: '#ECFDF5' },
  },
  text: {
    purple: { color: '#8B5CF6' },
    warning: { color: '#F59E0B' },
    stress: { color: '#F59E0B' },
    primary: { color: '#2563EB' },
    success: { color: '#10B981' },
  },
};

function MetricIcon({ icon, color }: { icon: StudentMetric['icon']; color: string }): ReactNode {
  const props = { sx: { color, fontSize: 22 } };
  switch (icon) {
    case 'hours':
      return <AccessTimeIcon {...props} />;
    case 'attendance':
      return <GroupsIcon {...props} />;
    case 'courses':
      return <MenuBookIcon {...props} />;
    case 'assignments':
      return <AssignmentIcon {...props} />;
    case 'stress':
      return <FavoriteBorderIcon {...props} />;
    default:
      return null;
  }
}

interface StudentMetricCardProps {
  metric: StudentMetric;
}

export default function StudentMetricCard({ metric }: StudentMetricCardProps) {
  const iconTone = ICON_STYLES[metric.tone];
  const badgeTone = BADGE_STYLES[metric.badgeVariant][metric.tone] ?? {
    color: '#059669',
    bgcolor: '#ECFDF5',
  };

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
            bgcolor: iconTone.iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1.75,
          }}
        >
          <MetricIcon icon={metric.icon} color={iconTone.iconColor} />
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
          {metric.title}
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
          {metric.value}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          {metric.badgeVariant === 'pill' ? (
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 1,
                py: 0.4,
                borderRadius: '999px',
                bgcolor: badgeTone.bgcolor,
                color: badgeTone.color,
                fontFamily: 'Roboto',
                fontSize: 11,
                fontWeight: 600,
                lineHeight: 1.3,
                whiteSpace: 'nowrap',
              }}
            >
              {metric.badgeLabel}
            </Box>
          ) : (
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: 13,
                fontWeight: 600,
                color: badgeTone.color,
              }}
            >
              {metric.badgeLabel}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
