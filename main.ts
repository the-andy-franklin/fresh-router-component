/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

const wildcards = [];
for (const key in manifest.routes) {
  if (key.endsWith("/*.tsx")) {
    wildcards.push(key);
  }
}

wildcards.reverse().forEach((key) => {
  // @ts-ignore manifest.routes doesn't like being modified but it's okay
  const temp = manifest.routes[key];
  // @ts-ignore manifest.routes doesn't like being modified but it's okay
  delete manifest.routes[key];
  // @ts-ignore manifest.routes doesn't like being modified but it's okay
  manifest.routes[key] = temp;
});

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
