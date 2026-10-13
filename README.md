# clt

## SEO and analytics launch checklist

The static site publishes its crawlable pages in `sitemap.xml`; `robots.txt`
points crawlers to that sitemap. Page titles, descriptions, canonical URLs,
structured data, and article links are maintained in the corresponding HTML
files. Keep the sitemap in sync whenever a public page is added or removed.

Before launch or when the domain changes:

1. Verify `https://www.codelaunchtechnologies.com/` in Google Search Console,
   submit `/sitemap.xml`, and monitor indexing and search performance.
2. Configure a Google Analytics 4 property, measurement ID, and consent
   handling only after reviewing applicable privacy requirements. Conversion
   hooks are included for WhatsApp, phone and email contact, project enquiry
   email starts, discovery-call requests, course registrations, and
   blog-to-service clicks. They call `gtag` only when a consent-aware Google
   tag is present; the site does not load a tracker by default.
3. After configuration, confirm events in GA4 DebugView. The enquiry form
   opens the visitor's email app; it does not submit to or store data on a
   server, so a mailto start is not a confirmed lead.
4. If the business is eligible for a Google Business Profile, claim and verify
   it directly, then ensure its public name, phone, service area, and website
   match the real business details. Request only genuine customer reviews.
5. Replace or supplement the email-based discovery call request with a
   scheduling service only after an approved booking URL is available.

Search Console verification, analytics property setup, business-profile
verification, customer reviews, and any third-party scheduling or form
backend require authorized accounts or business information and are not
performed by this static-site repository.