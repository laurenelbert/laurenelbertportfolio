# Lauren Elbert Portfolio

A minimalist, responsive portfolio built with plain HTML and CSS.

## Preview

Open `index.html` in a browser, or run a local static server from this folder (for example, `npx serve .`) and visit the local address it prints.

## Updating the site

- The home page is intentionally a one-screen introduction in `index.html`.
- Edit biography and selected work content in `about.html`; detailed projects live in `projects.html`.
- Contact details live in `contact.html`.
- Shared styling is in `home.css`.
- Replace each `.image-placeholder` block with an image when your project images are ready. Keep image descriptions accessible with useful `alt` text.
- To add a project, copy an entire `<article class="project-entry">...</article>` inside the project list in `projects.html`. The existing CSS automatically formats each entry. Change its `id` to a unique, lowercase name.
- To add project links inside that article, use a block like this and replace the example URLs:

  ```html
  <div class="project-links">
    <a href="https://example.com/project">View project ↗</a>
    <a href="assets/project-case-study.pdf">Case study PDF ↗</a>
  </div>
  ```

- Put PDF files in an `assets` folder at the repository root, then link to the file path as shown above.
