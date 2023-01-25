import backendFetch from './backendFetch';
import Flirt from '../types/Flirt';

export default function () {
  return backendFetch<Flirt[]>('GET', 'flirts');
}
