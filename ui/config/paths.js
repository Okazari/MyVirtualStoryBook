// TODO: we can split this file into several files (pre-eject, post-eject, test)
// and use those instead. This way we don't need to branch here.

var path = require('path');

// True after ejecting, false when used as a dependency
var isEjected = (
  path.resolve(path.join(__dirname, '..')) ===
  path.resolve(process.cwd())
);

// Are we developing create-react-app locally?
var isInCreateReactAppSource = (
  process.argv.some(arg => arg.indexOf('--debug-template') > -1)
);

function resolveOwn(relativePath) {
  return path.resolve(__dirname, relativePath);
}

function resolveApp(relativePath) {
  return path.resolve(relativePath);
}
// after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('../public/app'),
  appHtml: resolveApp('index.html'),
  appFavicon: resolveApp('favicon.ico'),
  appPackageJson: resolveApp('../package.json'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('../node_modules'),
  ownNodeModules: resolveApp('../node_modules')
};
