# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **single-page profile website** for a Senior Research Scientist. It's a data-driven bilingual (Korean/English) portfolio site built with vanilla HTML, Tailwind CSS, and JavaScript.

### Key Characteristics
- **Single file**: All code is in `index.html` (~850 lines)
- **No build process**: Open directly in a browser
- **Data-driven**: All content lives in a `SITE_CONTENT` JavaScript object
- **Responsive**: Mobile-first design using Tailwind CSS
- **Bilingual**: Korean (ko) and English (en) support with localStorage persistence

## Architecture & Code Organization

### Content Management System (Lines 415-472)

All website content is stored in a single `SITE_CONTENT` object structured as:

```javascript
const SITE_CONTENT = {
  personal: { name, role, tagline, email, year },      // Personal info
  about: { bio: [...], tags: [...] },                   // About section
  skills: [...],                                        // Skills array
  projects: [...],                                      // Projects array
  blog: [...],                                          // Blog posts array
  contact: { subtitle },                                // Contact section
  footer: { copyright }                                 // Footer
}
```

**Important pattern**: Text fields use bilingual objects: `{ ko: "...", en: "..." }`

### Rendering System (Lines 481-585)

Separate `render*()` functions for each section:
- `renderHeader()` - Updates header name
- `renderHero()` - Personal info display
- `renderAbout()` - Bio and tags
- `renderSkills()` - Skill cards (grid)
- `renderProjects()` - Project cards (grid)
- `renderBlog()` - Blog post cards (grid)
- `renderContact()` - Contact form labels
- `renderFooter()` - Copyright notice

**Pattern**: Each function updates the DOM based on `SITE_CONTENT` and `currentLanguage`

### Language System (Lines 477-479, 650-676)

- `currentLanguage`: Global variable ('ko' or 'en')
- `DEFAULT_LANGUAGE`: 'ko'
- LocalStorage key: `'language'`
- `setLanguage(lang)`: Switches language and re-renders all sections
- Language preference persists across sessions

### Color System (Lines 531-540)

**Color mapping helper** (`getColorClasses(color)`) maps color names to Tailwind classes because Tailwind requires static class names:

```javascript
const colorMap = {
  teal: { bg: 'bg-teal-100', text: 'text-teal-800' },
  green: { bg: 'bg-green-100', text: 'text-green-800' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-800' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-800' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-800' }
}
```

Used for project status badges and blog category badges. Only these 5 colors are supported.

## Common Development Tasks

### 1. Modify Content

All content changes happen in the `SITE_CONTENT` object (lines 415-472). Examples:

**Change personal info:**
```javascript
personal: {
  name: "New Name",
  email: "newemail@example.com"
}
```

**Add a project:**
Append to `projects` array with required fields:
```javascript
{
  status: { ko: "진행중", en: "In Progress" },
  statusColor: "teal",  // One of: teal, green, purple, cyan, blue
  title: { ko: "프로젝트명", en: "Project Name" },
  description: { ko: "설명...", en: "Description..." },
  tags: ["Tag1", { ko: "태그2", en: "Tag2" }]
}
```

**Add a blog post:**
Append to `blog` array:
```javascript
{
  date: { ko: "2024년 2월 15일", en: "Feb 15, 2024" },
  category: { ko: "카테고리", en: "Category" },
  categoryColor: "blue",  // One of: teal, green, purple, cyan, blue
  title: { ko: "제목", en: "Title" },
  summary: { ko: "요약...", en: "Summary..." },
  link: "https://blog.example.com/post"
}
```

**Modify a skill:**
Edit the `skills` array (already structured with icon, title, description).

### 2. Preview Changes

**Option A: Direct browser** (simplest)
- Open `index.html` in any browser
- Hard refresh with Cmd+Shift+R (Mac) or Ctrl+Shift+F5 (Windows)

**Option B: Local HTTP server** (for CORS issues with external resources)
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server

# Then open: http://localhost:8000
```

### 3. Test Language Switching

1. Open the site in a browser
2. Click the language button (top-right)
3. Verify all sections switch between Korean and English
4. Refresh the page and verify language preference persists

### 4. Validate Before Committing

1. **Check console errors**: F12 → Console tab, no red errors
2. **Test all sections**:
   - Hero section displays correctly
   - About section bio and tags visible
   - Skills cards render in a grid
   - Projects cards render in a grid
   - Blog cards render in a grid
   - Contact form displays
   - Footer shows copyright
3. **Test responsiveness**:
   - Mobile (375px): 1 column layouts
   - Tablet (768px): 2 column layouts
   - Desktop (1280px): 3 column layouts
4. **Test interactivity**:
   - Language switching works
   - Mobile menu toggle works
   - Form submission works
   - Email copy button works

## Important Patterns & Conventions

### Bilingual Text Pattern

Always use this pattern for user-facing text:
```javascript
{ ko: "한국어 텍스트", en: "English text" }
```

The current language is accessed via `currentLanguage` variable and used like:
```javascript
text[currentLanguage]  // Returns the appropriate language version
```

### Array Items with Tags

Tags can be simple strings or bilingual objects:
```javascript
tags: [
  "Python",                          // Simple string
  { ko: "생물의약", en: "Biotech" }  // Bilingual
]
```

When rendering, check if it's a string or object and handle accordingly.

### Color Values

Only use these values for `statusColor` and `categoryColor`:
- `teal` (teal-blue) - recommended default
- `green` (bright green)
- `purple` (purple)
- `cyan` (light cyan)
- `blue` (blue)

### DOM Selectors

Use specific CSS selectors for reliability:
- Avoid overly complex selectors
- Use element IDs when available (#hero, #about, etc.)
- Use querySelectorAll for multiple elements and access by index

## File Locations

| File | Purpose | Lines |
|------|---------|-------|
| `index.html` | Main file with HTML, CSS, JS | - |
| `SITE_CONTENT` | All website content | 415-472 |
| Rendering functions | Dynamic DOM updates | 481-585 |
| Styles (CSS) | Custom styles + Tailwind | 18-200 |
| HTML structure | Page layout | 230-350 |
| Event listeners | Interactivity | 677-750 |
| Init code | Page load logic | 751-850 |
| `QUICK_START.md` | Quick content modification guide | - |
| `REFACTORING_GUIDE.md` | Detailed architecture documentation | - |

## Future Enhancements Considerations

When adding new features, consider:

1. **New sections**: Add data to `SITE_CONTENT`, create a `render*()` function, add HTML container, call function in initialization
2. **New data fields**: Always add both `ko` and `en` versions
3. **New colors**: Update `getColorClasses()` mapping and `colorMap`
4. **Performance**: Current single-file approach scales well for ~50 projects/blogs. Consider splitting if larger
5. **SEO**: Update `<meta>` tags in `<head>` for different descriptions

## Debugging Tips

1. **Content not updating?**
   - Check JavaScript syntax in SITE_CONTENT object (trailing commas, quotes)
   - Hard refresh browser cache
   - Open browser console (F12) and check for errors

2. **Styling issues?**
   - Check color name spelling (typo check)
   - Verify Tailwind classes are valid static class names
   - Check `getColorClasses()` has the color defined

3. **Language switching broken?**
   - Check localStorage isn't corrupted: `localStorage.clear()` in console
   - Verify all text fields have both `ko` and `en`
   - Check `currentLanguage` variable in console

4. **Mobile layout broken?**
   - Check grid classes: `grid md:grid-cols-2 lg:grid-cols-3`
   - Verify Tailwind responsive prefixes (sm:, md:, lg:)
   - Test with actual mobile device, not just browser dev tools resize
