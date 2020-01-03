import { FuseBox, WebIndexPlugin, SassPlugin, CSSPlugin } from "fuse-box";

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name.js",
  plugins: [
      WebIndexPlugin({
          templateString: `<!DOCTYPE html>
<html>

<head>
  <title></title>
  $css
</head>

<body>
  <div id="root"></div>
  $bundles
</body>

</html>`
      }),
      [SassPlugin(), CSSPlugin()],
  ],
  cache: false,
});

fuse.dev({ port: 4444 });

fuse.bundle("vendor")
  .instructions(" ~ index.tsx")
  .sourceMaps(true) // does not work
  .hmr();

fuse.bundle("app")
  .instructions(" !> [index.tsx]")
  .sourceMaps(true)
  .watch()
  .hmr({ reload: true }); // monkey patch

fuse.run();