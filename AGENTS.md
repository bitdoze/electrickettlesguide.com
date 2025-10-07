# Agents Guide for Electric Kettles Guide

Date: 01 October 2025

## Commands

- **dev**: `npm run dev` - Start development server on localhost:4321
- **build**: `npm run build` - Build for production
- **preview**: `npm run preview` - Preview production build
- **no tests**: No test scripts configured in package.json

## Architecture

- **Astro v5** blog site with MDX, RSS, sitemap generation
- **Content Collections**: posts/, authors/, pages/, about/ in src/content/
- **Config**: site.ts, menu.json, social.json in src/config/
- **Layouts**: Layout.astro (main), PostLayout.astro (blog posts)
- **Styling**: Tailwind CSS v4 with @tailwindcss/typography
- **Search**: Client-side with Fuse.js
- **Assets**: Images in src/assets/, public/ for static files

## Code Style

- **TypeScript**: Strict mode via astro/tsconfigs/strict
- **Path aliases**: @components/_, @layouts/_, @config/_, @utils/_, @styles/_, @assets/_
- **Content schema**: Zod validation in src/content/config.ts
- **Naming**: kebab-case for files, camelCase for variables, PascalCase for components
- **Imports**: Use path aliases, group by external/internal
- **Types**: Define schema with Zod for content collections
- **Frontmatter**: Required title, optional meta_title, description, image, authors[], categories[], tags[]

## Tools for Amazon Product

- **Amazon Product Search** - use brightdata-mcp to search amazon products, choose the best ones. you can use their tools like:
- - web_data_amazon_product - Product details, specs, pricing
- - web_data_amazon_product_reviews - Customer reviews and ratings
- - web_data_amazon_product_search - Search results with products

## Content Guidelines for Electric Kettles Articles

- **Focus**: Informative, practical content about Electric Kettles, recipes, nutrition, maintenance
- **Structure**: Use clear headings, bullet points, step-by-step instructions where applicable
- **SEO**: Include relevant Electric Kettles keywords naturally in titles and content
- **Helpful tone**: Write as an expert guide helping readers make informed decisions
- **Product reviews**: Include pros/cons, specifications, comparison tables
- **Recipes**: List ingredients, nutritional benefits, preparation steps
- **Tags**: Don't use more then 3 tags per article.
- **Links**: Include internal links in article as natural as possible, aim for 3 to 5 links per article, the public/links.txt has the list with articles.
- **Widgets**: Include in article the widgets created under widget section, don't use to much to not make the article not readable.
- **Image**: Create an svg image for the mdx article and store it in the assets/images. Make it simple and look nice without to much elements and a short text that is bigger and visible on any device with maximum 5 words. Use a nice background with a lighter colour that looks nice 16:9 format.
- **Amazon Products**: You add the amazon products with the needed details for the box: `<AmazonProduct productName="Kettle Name" productDescription="Description" productFeatures={["Feature 1", "Feature 2"]} productLink="https://amazon.com/dp/ASIN" productImage="https://example.com/image.jpg" productRating={4.5} importantConsiderations={["Note 1", "Note 2"]} pros={["Pro 1", "Pro 2"]} cons={["Con 1", "Con 2"]} recommendedBadge="Best Budget" />` the image is the one from amazon and the link should be with "https://amazon.com/dp/ASIN". The `recommendedBadge` parameter is optional and displays a colored badge in the product header (e.g., "Best Budget", "Best Overall", "Editor's Choice", "Best for Professionals", "Best Premium", etc.)


## Available Widgets (import from @components/widgets/)

- **Accordion**: `<Accordion label="FAQ Title" group="faq" expanded="true">content</Accordion>`
- **Button**: `<Button text="Click Here" link="/url" variant="solid" color="blue" size="md" icon="arrow-right" />`
- **Notice**: `<Notice type="info|success|warning|error" title="Important">content</Notice>`
- **ListCheck**: `<ListCheck><ul><li>Checkmark item 1</li><li>Item 2</li></ul></ListCheck>`
- **YouTubeEmbed**: `<YouTubeEmbed url="https://youtube.com/embed/..." label="Video Title" />`
- **Tabs/Tab**: `<Tabs><Tab name="Tab 1">content</Tab><Tab name="Tab 2">content</Tab></Tabs>`
- **AmazonProduct**: `<AmazonProduct productName="Kettle Name" productDescription="Description" productFeatures={["Feature 1", "Feature 2"]} productLink="https://amazon.com/dp/ASIN" productImage="https://example.com/image.jpg" productRating={4.5} importantConsiderations={["Note 1", "Note 2"]} pros={["Pro 1", "Pro 2"]} cons={["Con 1", "Con 2"]} recommendedBadge="Best Budget" />`
  - **Badge Options**: Use `recommendedBadge` parameter for awards (optional):
    - "Best Budget" / "Best Value" / "Most Affordable" - Green badge
    - "Best Premium" / "Best for Professionals" / "Best Pro" - Purple badge
    - "Editor's Choice" / "Editor's Pick" - Orange/Amber badge
    - "Best Overall" / "Top Rated" / "Bestseller" - Blue badge
    - "Best Compact" / "Best Small" / "Best Portable" - Teal badge
    - "Best for Beginners" / "Best Starter" - Pink badge
    - Custom text supported with default blue styling
