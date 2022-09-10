import { Box, Button, Card, Grid, styled, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: 'center',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  padding: 32,
  background: theme.palette.background.default,
}));

const ForgotPasswordRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    margin: '1rem',
    borderRadius: 12,
  },
}));

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <ForgotPasswordRoot>
        <Card className="card">
            <Grid container>
            <Grid item xs={12}>
                <JustifyBox p={4}>
                <img width="300" src="/img/dreamer.svg" alt="" />
                </JustifyBox>

                <ContentBox>
                <form>
                    <TextField
                    type="email"
                    name="email"
                    size="small"
                    label="Email"
                    variant="outlined"
                    sx={{ mb: 3, width: '100%' }}
                    />

                    <Button fullWidth variant="contained" color="primary">
                    Reset Password
                    </Button>

                    <Button
                    fullWidth
                    color="primary"
                    variant="outlined"
                    onClick={() => navigate(-1)}
                    sx={{ mt: 2 }}
                    >
                    Go Back
                    </Button>
                </form>
                </ContentBox>
            </Grid>
            </Grid>
        </Card>
        </ForgotPasswordRoot>
    );
};

export default ForgotPassword;