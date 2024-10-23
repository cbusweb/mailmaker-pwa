import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import Auth from '@/components/Auth';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function WrikeLogin() {
  return (
    <>
      <Meta title="Wrike Integration" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">Wrike</Typography>
        <Button
          to={`/${Math.random().toString()}`}
          component={Link}
          variant="outlined"
          sx={{ mt: 4 }}
          size="small"
          color="warning"
        >
          Want to check 404?
        </Button>
        <Auth
          clientId="66xWfMQn"
          clientSecret="8hy0TNsOuYPU1Ez9rY98aTU6WvunKjTrxzmjHmFPLZMloN5fsFGO3vx761xZrDPv"
          scopes="readonly"
        />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default WrikeLogin;
