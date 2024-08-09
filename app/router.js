import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from 'polaris-starter/config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function() {  });
});
