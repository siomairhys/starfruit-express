import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const clientDir = path.join(distDir, "client");
const staticDir = path.join(distDir, "static");
const viteBin = path.join(root, "node_modules", "vite", "bin", "vite.js");

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      env: { ...process.env, ...options.env },
      shell: false,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
      }
    });
  });
}

async function renderRoute(pathname) {
  const serverPath = path.join(distDir, "server", "server.js");
  const server = await import(`${pathToFileURL(serverPath).href}?t=${Date.now()}`);
  const response = await server.default.fetch(
    new Request(`https://static.local${pathname}`),
    {},
    {},
  );

  if (!response.ok) {
    throw new Error(`Static render failed for ${pathname}: ${response.status}`);
  }

  return response.text();
}

function normalizeStaticHtml(html) {
  return html.replaceAll("/./assets/", "./assets/");
}

await run(process.execPath, [viteBin, "build"], {
  env: {
    VITE_BASE_PATH: "./",
  },
});

await rm(staticDir, { recursive: true, force: true });
await mkdir(staticDir, { recursive: true });
await cp(clientDir, staticDir, { recursive: true });

const html = normalizeStaticHtml(await renderRoute("/"));

await writeFile(path.join(staticDir, "index.html"), html);
await writeFile(path.join(staticDir, "404.html"), html);
await writeFile(path.join(staticDir, ".nojekyll"), "");

console.log("Static export generated at dist/static");
