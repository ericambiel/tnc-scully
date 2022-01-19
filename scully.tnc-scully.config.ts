import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import {
  NotionDom,
  NotionDomPluginOptions,
  NotionDomRouter,
  NotionDomRouterPluginOptions,
} from '@notion-stuff/scully-plugin-notion';
import '@notiz/scully-plugin-lazy-images';
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';
import { timeToRead, timeToReadOptions } from 'scully-plugin-time-to-read';
import './scully/plugins/custom-rss.plugin';

setPluginConfig(NotionDom, {
  notionBlocksHtmlParserOptions: {
    mdHighlightingOptions: 'prismjs',
  },
} as NotionDomPluginOptions);

setPluginConfig(timeToRead, {
  path: '/blog',
} as timeToReadOptions);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'tnc-scully',
  outDir: './dist/static',
  defaultPostRenderers: [MinifyHtml, getHttp404Plugin(), 'seoHrefOptimise', 'lazyImages'],
  routes: {
    '/blog/:slug': {
      type: NotionDomRouter,
      postRenderers: [NotionDom],
      databaseId: '65dacf448cd24dc1b1b454f9ffe40a1b',
    } as NotionDomRouterPluginOptions,
  },
};
