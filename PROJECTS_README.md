# How to Update Projects

Your portfolio automatically loads projects from `projects.json`. To add or update projects, simply edit this file!

## Adding a New Project

Add a new object to the `projects` array in `projects.json`:

```json
{
  "title": "Your Project Name",
  "icon": "fas fa-icon-name",
  "description": "A brief description of your project.",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "features": [
    "Feature 1 description",
    "Feature 2 description",
    "Feature 3 description"
  ]
}
```

## Available Icons

You can use any Font Awesome icon. Common ones include:
- `fas fa-code` - Code/Development
- `fas fa-chart-line` - Analytics/Charts
- `fas fa-mobile-alt` - Mobile App
- `fas fa-globe` - Web App
- `fas fa-database` - Database Project
- `fas fa-robot` - AI/ML Project
- `fas fa-gamepad` - Game
- `fas fa-shopping-cart` - E-commerce

Visit [Font Awesome Icons](https://fontawesome.com/icons) to find more icons.

## Example

```json
{
  "projects": [
    {
      "title": "My New Project",
      "icon": "fas fa-rocket",
      "description": "An amazing new project I built!",
      "technologies": ["React", "Node.js", "MongoDB"],
      "features": [
        "Built with modern technologies",
        "Responsive design",
        "Fast performance"
      ]
    }
  ]
}
```

## Notes

- The projects will automatically appear on your portfolio when you refresh the page
- No need to edit HTML or JavaScript files
- Make sure your JSON is valid (use a JSON validator if needed)
- Projects appear in the order they're listed in the JSON file

