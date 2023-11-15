# Spelkatalog för Kodsnacks Tvåveckorssyltar

Kolla in spelen här: https://scmx.github.io/kodsnack-spelsylt-all-games-catalog

## Alla tidigare spelsyltar

- [Kodsnacks Tvåveckorssylt][spelsylt_01]
- [Kodsnacks Tvåveckorssylt - Andra Omgången][spelsylt_02]
- [Kodsnacks Tvåveckorssylt - Tredje Omgången][spelsylt_03]
- [Kodsnacks Tvåveckorssylt - Fjärde Omgången][spelsylt_04]
- [Kodsnacks Spelsylt 5: Norrland][spelsylt_05]
- [Kodsnacks Spelsylt 6: Hopp][spelsylt_06]
- [Kodsnacks Tvåveckorssylt - #7][spelsylt_07]
- [Kodsnacks Tvåveckorssylt - #8][spelsylt_08]
- [Kodsnacks Tvåveckorssylt - #9][spelsylt_09]

[spelsylt_01]: https://itch.io/jam/kodsnacks-2veckorssylt/results
[spelsylt_02]: https://itch.io/jam/spelsylt/results
[spelsylt_03]: https://itch.io/jam/spelsylt3/results
[spelsylt_04]: https://itch.io/jam/spelsylt4/results
[spelsylt_05]: https://itch.io/jam/spelsylt5/results
[spelsylt_06]: https://itch.io/jam/spelsylt6/results
[spelsylt_07]: https://itch.io/jam/spelsylt7/results
[spelsylt_08]: https://itch.io/jam/spelsylt8/results
[spelsylt_09]: https://itch.io/jam/spelsylt9/results

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
