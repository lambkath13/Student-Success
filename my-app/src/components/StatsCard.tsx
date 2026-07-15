import { Card, CardContent, Typography, Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
    icon: ReactNode;
    title: string;
    value: string;
    change: string;
}

export default function StatsCard({ icon, title, value, change }: Props) {
    return (
        <Card sx={{ borderRadius: 3, height: '100%' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    {icon}
                    <Typography color="text.secondary">{title}</Typography>
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    {value}
                </Typography>

                <Typography color="success.main">
                    {change}
                </Typography>
            </CardContent>
        </Card>
    );
}