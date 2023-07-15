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

## Configuration

You can add / remove / edit snippets in the plugin's settings menu.
It cannot get any easier than that.

## Scope

You can access these things from your snippets:

```ts
{
  this: window,
  quark: {
    logger: (...args: unknown[]) => void,
    storage: Map<string, unknown>, // default: ['snippetName' => <quark's name>]
  }
}
```
