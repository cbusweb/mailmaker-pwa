// import { Link } from 'react-router-dom';

// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
// import Auth from '@/components/Auth';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Jotform() {
  return (
    <>
      <Meta title="Jotform Integration" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">Jotform</Typography>
        <script src="https://js.jotform.com/JotForm.js"></script>
        <script>
          JF.login( function success(){' '}
          {JF.getForms((response: unknown) => {
            for (let i = 0; i < response.length; i++) {
              document.write('<li> ' + response[i].title);
            }
          })}
          , function error() {console.log('Could not authorize user')}
          );
        </script>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Jotform;
