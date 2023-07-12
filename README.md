<p>
  <h1 align="center">Quark</h1>
</p>

<p align="center">
  <a href="https://github.com/Socketlike/Quark/releases/latest">
    <img alt="latest release" src="https://img.shields.io/github/v/release/Socketlike/Quark?label=version&sort=semver">
  </a>
  <a href="https://github.com/Socketlike/Quark/actions/workflows/lint.yml">
    <img alt="lint status" src="https://img.shields.io/github/actions/workflow/status/Socketlike/Quark/lint.yml?label=lint">
  </a>
  <a href="https://github.com/Socketlike/Quark/actions/workflows/release.yml">
    <img alt="build status" src="https://img.shields.io/github/actions/workflow/status/Socketlike/Quark/release.yml?label=build">
  </a>
  <a href="https://github.com/Socketlike/Quark/actions/workflows/nightly.yml">
    <img alt="nightly status" src="https://img.shields.io/github/actions/workflow/status/Socketlike/Quark/nightly.yml?label=nightly&color=blueviolet">
  </a>
</p>

<p align="center">
  <a href="https://replugged.dev/install?identifier=Socketlike/Quark&source=github">
    <img alt="install" src="https://img.shields.io/github/v/release/Socketlike/Quark?label=Install&sort=semver&style=for-the-badge">
  </a>
</p>

<p align="center">
  a post-swc Replugged plugin that allows you to create persistent JavaScript snippets.
</p>

## How secure is this?

Not very. I would consider this plugin a gigantic security flaw.

## How the f\*\*k do I use this?

There is no editor UI at the moment.  
However the syntax is simple enough that you can write the snippet data on your own.

## Okay, how do I write snippets?

- Open `DevTools`' console.
- Execute
  `` replugged.plugins.getExports('lib.evelyn.Quark').config.set('scripts', [{ enabled: true, name: 'snippet-name', start: `<insert javascript code>`, stop: `<insert javascript code or remove this key>` }])  ``
- Reload plugin
- Profit???

## Misc

- The snippet's scope is `window`.
- The snippet also has `quark` on its scope
  - `quark.logger`: the plugin's logger
  - `quark.storage`: a `Map` object to store data that persists between the snippet's start script
    and stop script
