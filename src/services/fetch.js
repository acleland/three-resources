import { client, checkError } from './client';

export async function getMovies() {
  const resp = await client.from('movies').select('*');
  return checkError(resp);
}

export async function getBunnies() {
  const resp = await client.from('fuzzy_bunnies').select('*');
  return checkError(resp);
}

export async function getFamilies() {
  // fetch all families and their bunnies
  const response = await client.from('loving_families').select('*, fuzzy_bunnies(*)');
  return checkError(response);
}

export async function getDonutShops() {
  const response = await client.from('doughnut-shops').select('*');
  return checkError(response);
}
