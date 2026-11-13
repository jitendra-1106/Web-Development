# SEO and Core Web Vitals in HTML

## 1. What is SEO?

**SEO (Search Engine Optimization)** is the process of improving a website to increase its visibility in search engine results.

### Important HTML Elements for SEO

**1. Title Tag**
- Defines the title of a webpage.
- Appears in the browser tab.
- Search engines may use it as the title in search results.

```html
<title>HTML Tutorial for Beginners</title>
```

**2. Meta Description**
- Provides a short summary of the webpage.
- Search engines may use it as the description in search results.

```html
<meta name="description" content="Learn HTML with simple examples and tutorials.">
```

**3. Heading Tags**
- HTML provides six heading levels: `h1` to `h6`.
- They organize content into meaningful sections.
- Use a clear main heading and relevant subheadings.

```html
<h1>HTML Tutorial</h1>
<h2>Introduction to HTML</h2>
<h3>HTML Elements</h3>
```

**4. Image Alt Attribute**
- Provides alternative text for an image.
- Helps screen readers describe images.
- Helps search engines understand image content.

```html
<img src="html.png" alt="HTML logo">
```

**5. Semantic HTML**
- Semantic elements clearly describe the purpose of webpage content.
- They improve webpage structure and accessibility.

Important semantic tags:
Examples:
- <header> – Header section
- <nav> – Navigation links
- <main> – Main content
- <section> – A section of content
- <article> – Independent content
- <footer> – Footer section

**6. Responsive Viewport**
- Helps webpages display properly on different screen sizes.
- Important for mobile-friendly webpages.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 2. What are Core Web Vitals?

**Core Web Vitals** are Google's metrics used to measure important aspects of user experience on a webpage.

They measure three main things:

1. Loading performance
2. Interactivity
3. Visual stability

### A. LCP (Largest Contentful Paint)

- Measures the loading time of the largest eligible content element visible in the viewport.
- Examples: A large image or text block.
- Lower LCP means faster loading.

**Good LCP:** 2.5 seconds or less.

### Important: FID (First Input Delay)

- Measures the delay between a user's first interaction and when the browser starts processing it.
- It was an older Core Web Vitals metric.
- FID was replaced by INP on March 12, 2024.

### B. INP (Interaction to Next Paint)

- Measures how quickly a webpage responds visually to user interactions.
- Examples: Clicking a button or selecting an option.
- Lower INP means better responsiveness.

**Good INP:** 200 milliseconds or less.

### C. CLS (Cumulative Layout Shift)

- Measures unexpected movement of webpage elements.
- Example: An image loads and pushes the text below it downward.
- Lower CLS means better visual stability.

**Good CLS:** 0.1 or less.

---

## 3. How to Improve Core Web Vitals?

**To improve LCP:**
- Optimize image sizes.
- Avoid unnecessarily large resources.
- Improve server response time.

**To improve INP:**
- Avoid long-running JavaScript tasks.
- Keep interactions responsive.
- Reduce unnecessary JavaScript work.

**To improve CLS:**
- Specify image `width` and `height`.
- Reserve space for advertisements and embedded content.
- Avoid unexpectedly inserting content above existing content.

### Example: Preventing Layout Shift

```html
<img src="image.png" alt="Sample image" width="400" height="250">
```

Specifying dimensions helps the browser reserve space for the image before it loads, reducing unexpected layout shifts.

---

## 4. SEO vs Core Web Vitals

| SEO | Core Web Vitals |
|---|---|
| Improves website visibility in search engines. | Measures webpage user experience. |
| Includes titles, descriptions and semantic HTML. | Includes LCP, INP and CLS. |
| Helps search engines understand webpage content. | Measures loading, responsiveness and stability. |

**Important:** Good Core Web Vitals contribute to page experience, but they do not guarantee higher Google rankings.

---

## 5. Useful Tools

1. **Google PageSpeed Insights** – Checks website performance and Core Web Vitals.
2. **Google Search Console** – Monitors search performance, indexing and website issues.
3. **Lighthouse** – Audits performance, accessibility, SEO and other areas.

---

## 6. Quick Revision

- SEO = Search Engine Optimization.
- Title tag defines the webpage title.
- Meta description summarizes webpage content.
- Alt attribute describes an image.
- Semantic HTML gives meaning to webpage structure.
- LCP = Largest Contentful Paint.
- INP = Interaction to Next Paint.
- CLS = Cumulative Layout Shift.
- Core Web Vitals measure loading, responsiveness and visual stability.