import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://deadrails.robloxwikihub.com';

  const routes = [
    '',
    '/fuel-calculator',
    '/calculator',
    '/weapons-tier-list',
    '/codes',
    '/zombies-guide',
    '/routes-map',
    '/beginner-guide',
    '/class-roles',
    '/night-survival-simulator',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' || route === '/codes' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/fuel-calculator' || route === '/codes' ? 0.9 : 0.8,
  }));
}
