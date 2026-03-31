export const dynamic = 'force-static'

export default function Sitemap() {
  const baseUrl = 'https://www.viajesenoha.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}