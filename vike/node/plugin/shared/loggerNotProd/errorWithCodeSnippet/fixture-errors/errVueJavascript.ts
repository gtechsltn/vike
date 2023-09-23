export const errVueJavascript = {
  code: 'BABEL_PARSER_SYNTAX_ERROR',
  reasonCode: 'MissingSemicolon',
  loc: { line: 2, column: 7, index: 8 },
  pos: 8,
  plugin: 'vite:vue',
  id: '/home/rom/code/vike/examples/vue-full-v1/pages/index/+Page.vue',
  pluginCode:
    "<template>\n  <h1>Welcome to Vike</h1>\n  This page is:\n  <ul>\n    <li>Rendered to HTML.</li>\n    <li>Interactive. <Counter /></li>\n  </ul>\n  <p>\n    <button @click=\"randomNavigation\">Random Page</button>\n  </p>\n</template>\n\n<script lang=\"ts\" setup>\nimeport Counter from '../../components/Counter.vue'\nimport { navigate } from 'vike/client/router'\n\nconst randomNavigation = () => {\n  const randomIndex = Math.floor(Math.random() * 3)\n  navigate(['/markdown', '/star-wars', '/hello/alice.js'][randomIndex])\n}\n</script>\n",
  frame:
    '1  |  <template>\n   |          ^\n2  |    <h1>Welcome to Vike</h1>\n3  |    This page is:',
  message:
    "[@vue/compiler-sfc] Missing semicolon. (2:7)\n\n/home/rom/code/vike/examples/vue-full-v1/pages/index/+Page.vue\n12 |  \n13 |  <script lang=\"ts\" setup>\n14 |  imeport Counter from '../../components/Counter.vue'\n   |         ^\n15 |  import { navigate } from 'vike/client/router.js'\n16 |  ",
  stack:
    "SyntaxError: [@vue/compiler-sfc] Missing semicolon. (2:7)\n\n/home/rom/code/vike/examples/vue-full-v1/pages/index/+Page.vue\n12 |  \n13 |  <script lang=\"ts\" setup>\n14 |  imeport Counter from '../../components/Counter.vue'\n   |         ^\n15 |  import { navigate } from 'vike/client/router.js'\n16 |  \n    at instantiate (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parse-error/credentials.ts:62:21)\n    at toParseError (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parse-error.ts:60:12)\n    at TypeScriptParserMixin.raise (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/tokenizer/index.ts:1490:19)\n    at TypeScriptParserMixin.semicolon (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/util.ts:138:10)\n    at TypeScriptParserMixin.parseExpressionStatement (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:1279:10)\n    at TypeScriptParserMixin.parseExpressionStatement (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/plugins/typescript/index.ts:3044:28)\n    at TypeScriptParserMixin.parseStatementContent (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:643:19)\n    at TypeScriptParserMixin.parseStatementContent (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/plugins/typescript/index.ts:2887:20)\n    at TypeScriptParserMixin.parseStatementLike (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:417:17)\n    at TypeScriptParserMixin.parseModuleItem (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:354:17)"
}
