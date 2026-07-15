import { Card, CardContent, Typography } from '@mui/material';

export default function PlaceholderPage({ title }: { title: string }) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    {title}
                </Typography>

                <Typography color="text.secondary">
                    Эта страница находится в разработке.
                </Typography>
            </CardContent>
        </Card>
    );
}
