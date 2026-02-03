export const API_BASE_URL = 'https://lifeion-backend-production.up.railway.app';
export const ASSETS_BASE_URL = `${API_BASE_URL}/assets/images`;

export function resolveAssetUrl(imageUrl?: string): string {
  if (!imageUrl) return '';

  if (imageUrl.startsWith('http://lifeion-backend-production.up.railway.app')) {
    return imageUrl.replace('http://', 'https://');
  }

  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  const normalized = imageUrl.replace(/^\/+/, '');

  if (normalized.startsWith('assets/images/')) {
    return `${API_BASE_URL}/${normalized}`;
  }

  if (normalized.startsWith('assets/')) {
    return `${API_BASE_URL}/${normalized}`;
  }

  return `${ASSETS_BASE_URL}/${normalized}`;
}
