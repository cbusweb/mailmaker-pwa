import type { AuthProps } from './types';

function Auth({
  clientId = '',
  // clientSecret = '',
  // scopes = '',
}: AuthProps) {
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: 'http://localhost:5173/wrike',
    scope: 'wsReadOnly',
  });
  const authorizationUri = 'https://login.wrike.com/oauth2/authorize/v4?' + params.toString();

  return <a href={authorizationUri}>Login to Wrike</a>;
}

export default Auth;
