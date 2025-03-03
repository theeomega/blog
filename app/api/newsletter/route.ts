import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

const handler = NewsletterAPI({
   providers: {
    buttondown: {
      apiKey: process.env.BUTTONDOWN_API_KEY,
    },
    // Add other providers if needed
  },
  // @ts-ignore
  provider: siteMetadata.newsletter.provider,
})

export { handler as GET, handler as POST }
