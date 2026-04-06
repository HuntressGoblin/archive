<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fresh Note</title>
  <!-- Link your custom theme CSS -->
  <link rel="stylesheet" href="/styles/differentthemes.css">
  <!-- Optional: default Quartz CSS -->
  <link rel="stylesheet" href="/styles/quartz.css">
</head>
<body data-theme="sepia-library">
  <div id="app">
    <!-- Page Header / Title -->
    <header>
      <h1>Fresh Note</h1>
      <p class="subtitle">A fully themed page example using sepia-library</p>
    </header>
    <!-- Main content -->
    <main class="markdown-preview-view">
      <h2>Introduction</h2>
      <p>This is a brand new note using the "sepia-library" theme from differentthemes.css. The main background, secondary surfaces, text, and accents are all defined by your CSS variables.</p>
      <h2>Example Sections</h2>
      <p>Secondary surfaces like this blockquote will adopt <code>--lightgray</code>:</p>
      <blockquote>
        “This is a sample blockquote styled by the theme.”
      </blockquote>
      <h3>Code Block</h3>
      <pre><code>
function helloWorld() {
  console.log("Cosmic Library Theme!");
}
      </code></pre>
      <h3>Links</h3>
      <p>
        Check out <a href="#">a themed link</a> — it uses <code>--secondary</code> from your theme.
      </p>
    </main>
    <!-- Optional footer -->
    <footer>
      <p>© 2026 My Quartz Notes</p>
    </footer>
  </div>
</body>
</html>