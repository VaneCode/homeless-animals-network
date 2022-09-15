import { petFinderKey, petFinderSecret } from './apiKeys';

export default async (res) => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', petFinderKey);
  params.append('client_secret', petFinderSecret);
  const petfinderRes = await fetch(
    'https://api.petfinder.com/v2/oauth2/token',
    {
      method: 'POST',
      body: params,
    },
  );
  const data = await petfinderRes.json();
  res.send(data);
};
