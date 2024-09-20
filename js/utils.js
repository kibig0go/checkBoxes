import { getState } from './state.js';

export function updateCheckedIdsInURL() {
  const { selectedIds } = getState();
  const searchParams = new URLSearchParams();
  searchParams.set('ids', selectedIds.join(','));
  history.pushState(null, '', `?${searchParams.toString()}`);
}

export function getCheckedIdsFromURL() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('ids')?.split(',') || [];
}
