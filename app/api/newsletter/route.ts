import { NewsletterAPI } from 'pliny/newsletter';
import siteMetadata from '@/data/siteMetadata';

const handler = NewsletterAPI({
  provider: siteMetadata.newsletter.provider
  apiKey: process.env.BUTTONDOWN_API_KEY,
  console.log('Request body:', JSON.parse(req.body));
});

export { handler as GET, handler as POST };
