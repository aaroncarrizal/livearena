import { Category } from '@/api/streamed/types/match.response';

export const categoryMapper = (categoryId: Category): string => {
  const map: Record<Category, string> = {
    afl: 'AFL',
    'american-football': 'American Football',
    baseball: 'Baseball',
    basketball: 'Basketball',
    billiards: 'Billiards',
    cricket: 'Cricket',
    darts: 'Darts',
    fight: 'Fight',
    football: 'Football',
    golf: 'Golf',
    hockey: 'Hockey',
    'motor-sports': 'Motor Sports',
    other: 'Other',
    rugby: 'Rugby',
    tennis: 'Tennis'
  };

  return map[categoryId];
};
