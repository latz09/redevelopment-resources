// utils/formatDate.js
//
// Shared "Month Year" formatter for blog dates (hero featured panel, card
// grid, article detail eyebrow) — e.g. "2026-02-14" -> "February 2026".
export const formatArticleDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};