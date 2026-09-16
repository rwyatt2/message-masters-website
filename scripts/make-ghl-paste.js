#!/usr/bin/env node
// Builds gohighlevel-paste.html from gohighlevel-landing.html.
// The paste file is the same page minus the document wrapper, ready to drop
// into a GoHighLevel Custom HTML element. Run: node scripts/make-ghl-paste.js
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'gohighlevel-landing.html');
const dst = path.join(root, 'gohighlevel-paste.html');

const wrapper = /^\s*<(!DOCTYPE|html|\/html|head|\/head|body|\/body|meta|title)\b/i;
const lines = fs.readFileSync(src, 'utf8').split('\n');
const kept = lines.filter((line) => !wrapper.test(line));

const header = '<!-- Message Masters landing page. Generated from gohighlevel-landing.html by scripts/make-ghl-paste.js. Paste this whole block into a GoHighLevel Custom HTML element. -->';
const out = header + '\n' + kept.join('\n').replace(/^\s*\n+/, '').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';

for (const ch of out) {
  if (ch.charCodeAt(0) > 127) {
    console.error('Non-ASCII character found; GoHighLevel rejects it: ' + JSON.stringify(ch));
    process.exit(1);
  }
}

fs.writeFileSync(dst, out);
console.log('Wrote ' + path.relative(root, dst) + ' (' + out.length + ' bytes, ' + kept.length + ' lines)');
