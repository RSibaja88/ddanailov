const { src, dest, series } = require('gulp');

const {
  PUBLIC_DIR,
  STATIC_DIR,
  NEXT_BUILD_DIR,
  PUBLIC_DIR_CHUNKS,
} = require('./utils/folders');
const getBuildNumber = require('./utils/nextjs/getBuildNumber');

async function copyChunk() {
  const path = `${NEXT_BUILD_DIR}/static/chunks/*.js`;
  return src(path).pipe(dest(PUBLIC_DIR_CHUNKS));
}

async function copyNextResources() {
  const buildNumber = await getBuildNumber();
  const path = `${NEXT_BUILD_DIR}/server/static/${buildNumber}/pages/*.{js,html}`;

  return src(path).pipe(dest(PUBLIC_DIR));
}

function copyPage404() {
  return src(`${STATIC_DIR}/404.html`).pipe(dest(PUBLIC_DIR));
}

exports.default = series(copyChunk, copyNextResources, copyPage404);
