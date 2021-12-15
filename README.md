


# About

A Vue component library based on CodyHouse UI. This package includes components for assembling website blocks and admin ui. This package was built using [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup).


## Install from NPM

```bash
npm install [coming-soon]
```


## Install Locally

If you want to use this package in another local Vue project, you can "link" it to that project. This creates a symbolic link from your other projects' node_modules to your local clone of this package. This way, changes to this package can immediately be reflected in your consuming project.

From within this packages' directory, run:

```bash
npm link
```

From within your consuming projects' directory, run:

```bash
npm link v-codyhouse-components
```

Now you can install via your local path to the library:

```bash
npm install [the-package-local-path]

#Example: npm install /Users/heyharmon/Documents/Code/vue-component-library
```

Use the package like any other package you installed from NPM:

```js
<script>
import { AppButton } from 'v-codyhouse-components'
...
</script>
```

Dependency not found? Delete "package.lock" and run:

## Uninstall Locally

Run:

```bash
npm unlink @bloomcu/vue-component-library
```

And:
```bash
npm remove @bloomcu/vue-component-library
```


## Local Package Development

Contributing to this package? Clone it anywhere you keep your projects and work on the package like you would any typical Vue project.

Clone repository:

```bash
git clone https://github.com/bloomcu/vue-component-library.git
```

Install dependencies:

```bash
npm install
```

Build the package:

```bash
npm run build
```

Preview package without a consuming app:

```bash
npm run serve
```

View package dev screen at: http://localhost:7000



## Updating Package

When you are finished developing, semantically bump the version in package.json:

```json
{
"version": "0.0.3",
...
}
```

Build the package:

```bash
npm run build
```


## Publishing to NPM

You must be a user on BloomCU's NPM organization to publish new versions of the package. If you are not, you can submit a pull request to the repository and someone else will review your code and publish it to NPM.

Log into NPM if you are not already:

```bash
npm adduser
```

Publish:

```bash
npm publish
```
