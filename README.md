# Portfolio Website

A modern, responsive portfolio website showcasing my work, experience, and skills as a Software Engineer and Data Analyst.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight**: Pure HTML, CSS, and JavaScript - no heavy frameworks
- 🎯 **Interactive Elements**: Smooth scrolling, animated counters, and hover effects
- 🌈 **Beautiful UI**: Gradient accents, modern typography, and professional color scheme

## Sections

1. **Hero Section**: Introduction with profile photo and social links
2. **About**: Personal introduction and key statistics
3. **Skills**: Technical skills organized by category
4. **Experience**: Timeline of professional experience
5. **Projects**: Showcase of key projects with technologies used
6. **Education**: Academic background and coursework
7. **Leadership**: Organizations and involvement
8. **Contact**: Contact information and social links

## Setup Instructions

1. **Add Your Photo**:
   - Place your profile photo in the root directory
   - Name it `photo.jpg` (or update the filename in `index.html` line 70)
   - Recommended size: 350x350px or larger (square format works best)

2. **Update Social Links**:
   - Edit the social media links in `index.html`:
     - Line 75-85: Hero section social links
     - Line 550-570: Contact section links
   - Replace placeholder URLs with your actual LinkedIn and GitHub profiles

3. **Open the Website**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then visit `http://localhost:8000` in your browser

## Customization

### Colors
Edit the CSS variables in `styles.css` (lines 3-15) to change the color scheme:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Content
- Update personal information in `index.html`
- Modify project descriptions, experience details, etc.
- Add or remove sections as needed

### Fonts
The website uses Google Fonts (Inter & Playfair Display). You can change fonts by updating the `<link>` tag in `index.html` (line 8).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
Portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
├── photo.jpg       # Your profile photo (add this)
└── README.md       # This file
```

## Notes

- The website is front-end only (no backend required)
- All animations and interactions are handled with vanilla JavaScript
- The design is mobile-first and fully responsive
- If the photo doesn't load, a placeholder will be shown automatically

## License

This portfolio template is free to use and modify for personal use.

---

**Built with ❤️ for showcasing your work**

