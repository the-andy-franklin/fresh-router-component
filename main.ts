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

if ("./routes/*.tsx" in manifest.routes) {
  const temp = manifest.routes["./routes/*.tsx"];
  // @ts-ignore the asterisk makes it produce an error but it's fine
  delete manifest.routes["./routes/*.tsx"];
  manifest.routes["./routes/*.tsx"] = temp;
}

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
