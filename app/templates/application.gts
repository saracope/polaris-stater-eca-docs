import { DocsHeader } from 'ember-cli-addon-docs';
import pageTitle from 'ember-page-title/helpers/page-title';
import Route from 'ember-route-template';



export default Route(
  <template>
    {{pageTitle "PolarisStarter"}}

    <DocsHeader />

    {{outlet}}
  </template>
);
