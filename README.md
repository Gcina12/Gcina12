# Gcina Lucky Rololo — Portfolio

A responsive, static portfolio made with HTML, CSS and vanilla JavaScript. No build step, backend or package installation is required.

## Run locally

Open `index.html` in a browser, or serve this folder with any static-file server. For example, from this directory run `python -m http.server 8000` and visit `http://localhost:8000`.

## Edit the content

Update the `PORTFOLIO` object near the top of `script.js`:

- Add or change the `skills`, `projects`, `certificates` and `experience` entries.
- Set project `categories` to any of `web`, `mobile`, `fintech` or `group` to control the filters.
- Set a project's `demo` or `source` URL to enable its link.
- Add certificates as objects in `certificates`; set `year` and `url` when available.
- Set `contact.cv` to a hosted PDF URL or a relative PDF path to enable the downloadable CV button.
- Update the contact email and social links in `contact`.
- Edit `responsibleAI` for the AI-use cards and `assistantAnswers` to extend the local portfolio assistant.

Links without a URL are intentionally displayed as unavailable rather than pointing to a broken or unrelated destination. The assistant uses local, pre-written answers; it does not send questions to a server.

## Deploy

### Vercel

Import the repository in Vercel, or use the Vercel CLI from this folder. Choose **Other** as the framework preset and leave the build command empty; the project root is the output directory.

### Netlify

Import the repository in Netlify and set the publish directory to `.`. No build command is needed. Alternatively, drag this folder into Netlify Drop.

Keep `index.html`, `style.css`, `script.js`, `favicon.svg` and `Certificate_Gcina_Rololo.pdf` together in the published root so the certificate link works after deployment.
