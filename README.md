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

- Start by envisioning your snippets as an
  ```ts
  Array<{
    enabled: boolean,
    name: string,
    start: string,
    stop?: string,
  }>
  ```
- You should have something like this:
  ```ts
  [
    {
      enabled: true,
      name: 'test snippet 1',
      start: "console.log('hi')",
      stop: "console.log('bye')",
    },
    {
      enabled: true,
      name 'test snippet 2',
      start: 'this is a malformed expression—this is fine—errors will be caught',
    }
  ]
  ```
- Open `DevTools`' console and execute
  ```ts
  replugged.plugins.getExports('lib.evelyn.Quark').config.set('scripts', <insert envisioned array here>);
  ```
- Reload plugin and profit from the swag automation

## Misc

- The snippet's scope is `window`.
- The snippet also has `quark` on its scope
  - `quark.logger`: the plugin's logger
  - `quark.storage`: a `Map` object to store data that persists between the snippet's start script
    and stop script
 array
