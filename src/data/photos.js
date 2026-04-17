// ─────────────────────────────────────────────────────────────────────────────
// GALLERY IMAGES
// Replace the `src` values below with your own photo paths or URLs.
// Put your image files in the /public/images/ folder, then use:
//   src: '/images/your-photo.jpg'
//
// `date` is the shoot date shown in the tab filters.
//
// `span` controls the grid size:
//   span: 1  → small square
//   span: 2  → wide / landscape
//   tall: true → tall / portrait
// ─────────────────────────────────────────────────────────────────────────────

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&q=80',
    alt: 'Basketball action',
    date: 'Jan 12, 2025',
    span: 2,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80',
    alt: 'Runner in motion',
    date: 'Jan 12, 2025',
    span: 1,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80',
    alt: 'Football play',
    date: 'Jan 12, 2025',
    span: 1,
    tall: true,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
    alt: 'Soccer match',
    date: 'Feb 28, 2025',
    span: 1,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=900&q=80',
    alt: 'Swimming competition',
    date: 'Feb 28, 2025',
    span: 2,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    alt: 'Athlete training',
    date: 'Feb 28, 2025',
    span: 1,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600&q=80',
    alt: 'Baseball pitch',
    date: 'Mar 15, 2025',
    span: 1,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=900&q=80',
    alt: 'Tennis match',
    date: 'Mar 15, 2025',
    span: 2,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=600&q=80',
    alt: 'Wrestling match',
    date: 'Mar 15, 2025',
    span: 1,
    tall: true,
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1486128105845-91daff43f404?w=600&q=80',
    alt: 'Cycling race',
    date: 'Apr 5, 2025',
    span: 1,
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80',
    alt: 'Skateboarding trick',
    date: 'Apr 5, 2025',
    span: 1,
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=900&q=80',
    alt: 'Volleyball spike',
    date: 'Apr 5, 2025',
    span: 2,
  },
]

export default photos
