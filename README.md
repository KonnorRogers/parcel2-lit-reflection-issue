# Purpose

Reproduction of reflection issues with Lit + Parcel 2

## Installation

```bash
git clone https://github.com/ParamagicDev/parcel2-lit-reflection-issue.git
cd parcel2-lit-reflection-issue
pnpm install
pnpm start
```

## Notes

There are 2 files, 1 for JS and 1 for TS. The typescript
file is the one with the issue.

## Conclusion

When you assign a property in Typescript outside of the
constructor, Lit's reflection does not work. Example:

```ts
class MyElement {
  readonly: boolean = true // Reflection no longer works

  static get properties () {
    return { readonly: {reflect: true, type: Boolean}}
  }
}
```

However, it will work with the following:

```ts
class MyElement {
  readonly: boolean
  constructor () {
    super()
    this.readonly = false
  }

  static get properties () {
    return { readonly: {reflect: true, type: Boolean}}
  }
}
```
