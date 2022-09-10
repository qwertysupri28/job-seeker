import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const StyledBox = styled(Box)(({ theme, textTransformStyle, ellipsis }) => ({
    textTransform: textTransformStyle || 'none',
    whiteSpace: ellipsis ? 'nowrap' : 'normal',
    overflow: ellipsis ? 'hidden' : '',
    textOverflow: ellipsis ? 'ellipsis' : '',
}));

const ContentBox = styled(JustifyBox)(() => ({
  height: '100%',
  padding: '32px',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRegister = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

const Paragraph = ({ children, className, ellipsis, textTransform, ...props }) => {
    return (
      <StyledBox
        textTransformStyle={textTransform}
        ellipsis={ellipsis}
        className={clsx({
          [className || '']: true,
        })}
        component="p"
        mb={0}
        mt={0}
        fontSize="14px"
        {...props}
      >
        {children}
      </StyledBox>
    );
};

const JwtRegister = () => {
  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <img
                width="100%"
                alt="Register"
                src="/img/dreamer.svg"
              />
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <Formik>
                <form>
                <TextField
                    fullWidth
                    size="small"
                    type="text"
                    name="username"
                    label="Username"
                    variant="outlined"
                    sx={{ mb: 3 }}
                />

                <TextField
                    fullWidth
                    size="small"
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    sx={{ mb: 3 }}
                />
                <TextField
                    fullWidth
                    size="small"
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    sx={{ mb: 2 }}
                />

                <FlexBox gap={1} alignItems="center">
                    <Checkbox
                    size="small"
                    name="remember"
                    sx={{ padding: 0 }}
                    />

                    <Paragraph fontSize={13}>
                    I have read and agree to the terms of service.
                    </Paragraph>
                </FlexBox>

                <LoadingButton
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mb: 2, mt: 3 }}
                >
                    Regiser
                </LoadingButton>

                <Paragraph>
                    Already have an account?
                    <NavLink
                    to="/login"
                    >
                    Login
                    </NavLink>
                </Paragraph>
                </form>
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
};

export default JwtRegister;
