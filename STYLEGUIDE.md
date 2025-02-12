# Style Guide for Browser Scroller

This document outlines the coding standards and best practices for contributing to the Browser Scroller extension.

## JavaScript Guidelines

### General
- Use camelCase for variable and function names
- End statements with semicolons

### Functions
- Write descriptive function names
- Keep functions small and focused on a single task
- Add comments for complex logic

An Example **Scroller Function**:

```javascript

{
    isScrolledToBottom: () => {
        threshold: 5,                     // pixel threshold
        return: "check scroll position"   // returns boolean
    },
    
    duplicateContent: () => {
        target: "document.body",         // target element
        action: "clone and append"      // clones all children
    }
}
```

## HTML/CSS Guidelines

### HTML
- Use semantic HTML elements
- Keep indentation consistent (2 spaces)
An Example **HTML Structure**:

```html

{

    container: "<div class='switch-container'>",  // main wrapper

    switch: "<label class='switch'>",            // switch component

    input: "<input type='checkbox'>",           // toggle input

    slider: "<span class='slider'>"            // visual slider element

}

```

### CSS
- Use descriptive class names
- Group related properties together
- Add comments for complex selectors or rules

## Browser Extension Best Practices

- Keep permissions minimal
- Use specific content script matches
- Include clear descriptions
- Test on Firefox
- Implement proper error handling

## Git Guidelines

- Write clear commit messages in the present tense
- Use feature branches for new development
- Keep documentation updated
