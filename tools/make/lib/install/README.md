<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Install

> Install commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for running the project's installation processes (e.g., managing [Node.js][node-js] environments, including `node_modules` dependencies and Node.js native [add-ons][node-js-add-ons]).

-   [Commands](#commands)

    -   [Install](#install)
    -   [Node.js](#nodejs)

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### install

Runs the project's install sequence.

<!-- run-disable -->

```bash
$ make install
```

* * *

<a name="nodejs"></a>

### Node.js

#### install-node

Installs node modules dependencies and compiles native [add-ons][node-js-add-ons].

<!-- run-disable -->

```bash
$ make install-node
```

#### clean-node

Runs cleanup tasks specific to Node.js, such as removing node modules dependencies and compiled native [add-ons][node-js-add-ons].

<!-- run-disable -->

```bash
$ make clean-node
```

#### install-node-modules

Installs node modules dependencies.

<!-- run-disable -->

```bash
$ make install-node-modules
```

#### clean-node-modules

Removes node modules dependencies.

<!-- run-disable -->

```bash
$ make clean-node-modules
```

#### install-node-addons

Compiles Node.js native [add-ons][node-js-add-ons].

<!-- run-disable -->

```bash
$ make install-node-addons
```

#### clean-node-addons

Removes Node.js native [add-ons][node-js-add-ons].

<!-- run-disable -->

```bash
$ make clean-node-addons
```

* * *

### Electron

##### install-deps-electron

Installs [Electron][electron].

```bash
$ make install-deps-electron
```

##### clean-deps-electron

Removes an installed [Electron][electron] distribution.

```bash
$ make clean-deps-electron
```

##### clean-deps-electron-tests

Removes compiled [Electron][electron] installation tests.

```bash
$ make clean-deps-electron-tests
```

</section>

<!-- /.usage -->

<!-- Section to include notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make/

[node-js]: https://nodejs.org/en/

[node-js-add-ons]: https://nodejs.org/api/addons.html

[electron]: https://www.electronjs.org/

</section>

<!-- /.links -->
