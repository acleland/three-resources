import { client, checkError } from './client';

export async function getMovies() {
  const resp = await client.from('movies').select('*');
  return checkError(resp);
}
