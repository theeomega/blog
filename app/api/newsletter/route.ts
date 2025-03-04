import { NewsletterAPI } from 'pliny/newsletter';
import siteMetadata from '@/data/siteMetadata';

const handler = NewsletterAPI({
  provider: 'buttondown', // Directly specify the provider
  apiKey: process.env.BUTTONDOWN_API_KEY, // Pass the API key directly
  //provider: siteMetadata.newsletter.provider,
});

export { handler as GET, handler as POST };
