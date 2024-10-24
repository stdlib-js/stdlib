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
    -   [Boost](#boost)
    -   [Cephes](#cephes)
    -   [Cppcheck](#cppcheck)
    -   [Electron](#electron)
    -   [Emscripten SDK](#emscripten-sdk)
    -   [LLVM](#llvm)
    -   [OpenBLAS](#openblas)
    -   [Python](#python)
    -   [R](#r)
    -   [ShellCheck](#shellcheck)
    -   [WebAssembly Binary Toolkit](#wabt)
    -   [WASI libc](#wasi-libc)

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

<a name="install"></a>

#### install

Runs the project's (minimal) install sequence.

<!-- run-disable -->

```bash
$ make install
```

Optional and development dependencies are **not** installed.

#### install-all

Runs the project's full install sequence.

<!-- run-disable -->

```bash
$ make install-all
```

**Warning**: only run this command if absolutely necessary. Most project development does **not** require a full installation.

#### install-deps-all

Installs external library dependencies and development dependencies.

<!-- run-disable -->

```bash
$ make install-deps-all
```

**Warning**: only run this command if absolutely necessary. Most project development does **not** require a full installation of external library dependencies and development dependencies.

#### clean-deps-all

Removes all external library dependencies.

<!-- run-disable -->

```bash
$ make clean-deps-all
```

#### clean-deps-tests-all

Removes all external library installation test artifacts.

<!-- run-disable -->

```bash
$ make clean-deps-tests-all
```

#### install-deps

Installs external library dependencies.

<!-- run-disable -->

```bash
$ make install-deps
```

**Warning**: only run this command if absolutely necessary.

#### clean-deps

Removes external library dependencies.

<!-- run-disable -->

```bash
$ make clean-deps
```

#### clean-deps-tests

Removes external library installation test artifacts.

<!-- run-disable -->

```bash
$ make clean-deps-tests
```

#### install-deps-dev

Installs external library dependencies used during development.

<!-- run-disable -->

```bash
$ make install-deps-dev
```

**Warning**: only run this command if absolutely necessary (e.g., if needing to test against reference numerical libraries).

#### clean-deps-dev

Removes external library development dependencies.

<!-- run-disable -->

```bash
$ make clean-deps-dev
```

#### clean-deps-dev-tests

Removes all external development library installation test artifacts.

<!-- run-disable -->

```bash
$ make clean-deps-dev-tests
```

#### clean-deps-downloads-all

Removes all external library downloads.

<!-- run-disable -->

```bash
$ make clean-deps-downloads-all
```

#### clean-deps-builds-all

Removes all external library build artifacts.

<!-- run-disable -->

```bash
$ make clean-deps-builds-all
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

<a name="boost"></a>

### Boost

#### install-deps-boost

Installs [Boost][boost].

```bash
$ make install-deps-boost
```

#### clean-deps-boost

Removes an installed [Boost][boost] distribution.

```bash
$ make clean-deps-boost
```

#### clean-deps-boost-tests

Removes compiled [Boost][boost] installation tests.

```bash
$ make clean-deps-boost-tests
```

* * *

<a name="cephes"></a>

### Cephes

#### install-deps-cephes

Installs [Cephes][cephes].

```bash
$ make install-deps-cephes
```

#### clean-deps-cephes

Removes an installed [Cephes][cephes] distribution.

```bash
$ make clean-deps-cephes
```

#### clean-deps-cephes-tests

Removes compiled [Cephes][cephes] installation tests.

```bash
$ make clean-deps-cephes-tests
```

* * *

<a name="cppcheck"></a>

### Cppcheck

#### install-deps-cppcheck

Installs [Cppcheck][cppcheck].

```bash
$ make install-deps-cppcheck
```

#### clean-deps-cppcheck

Removes an installed [Cppcheck][cppcheck] distribution.

```bash
$ make clean-deps-cppcheck
```

#### clean-deps-cppcheck-tests

Removes [Cppcheck][cppcheck] installation tests.

```bash
$ make clean-deps-cppcheck-tests
```

* * *

<a name="electron"></a>

### Electron

#### install-deps-electron

Installs [Electron][electron].

```bash
$ make install-deps-electron
```

#### clean-deps-electron

Removes an installed [Electron][electron] distribution.

```bash
$ make clean-deps-electron
```

#### clean-deps-electron-tests

Removes [Electron][electron] installation tests.

```bash
$ make clean-deps-electron-tests
```

* * *

<a name="emscripten-sdk"></a>

### Emscripten SDK

#### install-deps-emscripten

Installs [Emscripten SDK][emscripten-sdk].

```bash
$ make install-deps-emscripten
```

#### clean-deps-emscripten

Removes an installed [Emscripten SDK][emscripten-sdk] distribution.

```bash
$ make clean-deps-emscripten
```

#### clean-deps-emscripten-tests

Removes [Emscripten SDK][emscripten-sdk] installation tests.

```bash
$ make clean-deps-emscripten-tests
```

* * *

<a name="llvm"></a>

### LLVM

#### install-deps-llvm

Installs [LLVM][llvm].

```bash
$ make install-deps-llvm
```

#### clean-deps-llvm

Removes an installed [LLVM][llvm] distribution.

```bash
$ make clean-deps-llvm
```

#### clean-deps-llvm-tests

Removes [LLVM][llvm] installation tests.

```bash
$ make clean-deps-llvm-tests
```

* * *

<a name="openblas"></a>

### OpenBLAS

#### install-deps-openblas

Installs [OpenBLAS][openblas].

```bash
$ make install-deps-openblas
```

#### clean-deps-openblas

Removes an installed [OpenBLAS][openblas] distribution.

```bash
$ make clean-deps-openblas
```

#### clean-deps-openblas-tests

Removes compiled [OpenBLAS][openblas] installation tests.

```bash
$ make clean-deps-openblas-tests
```

* * *

<a name="python"></a>

### Python Dependencies

#### install-deps-python

Installs Python dependencies.

```bash
$ make install-deps-python
```

#### update-deps-python

Updates Python dependencies.

```bash
$ make update-deps-python
```

#### clean-deps-python

Removes an installed Python dependencies.

```bash
$ make clean-deps-python
```

* * *

<a name="r"></a>

### R Dependencies

#### install-deps-r

Installs R dependencies.

```bash
$ make install-deps-r
```

#### update-deps-r

Updates R dependencies.

```bash
$ make update-deps-r
```

#### clean-deps-r

Removes an installed R dependencies.

```bash
$ make clean-deps-r
```

* * *

<a name="shellcheck"></a>

### ShellCheck

#### install-deps-shellcheck

Installs [ShellCheck][shellcheck].

```bash
$ make install-deps-shellcheck
```

#### clean-deps-shellcheck

Removes an installed [ShellCheck][shellcheck] distribution.

```bash
$ make clean-deps-shellcheck
```

#### clean-deps-shellcheck-tests

Removes [ShellCheck][shellcheck] installation tests.

```bash
$ make clean-deps-shellcheck-tests
```

* * *

<a name="wabt"></a>

### WebAssembly Binary Toolkit

#### install-deps-wabt

Installs [WebAssembly Binary Toolkit (WABT)][wabt].

```bash
$ make install-deps-wabt
```

#### clean-deps-wabt

Removes an installed [WebAssembly Binary Toolkit][wabt] distribution.

```bash
$ make clean-deps-wabt
```

#### clean-deps-wabt-tests

Removes [WebAssembly Binary Toolkit][wabt] installation tests.

```bash
$ make clean-deps-wabt-tests
```

* * *

<a name="wasi-libc"></a>

### WASI libc

#### install-deps-wasi-libc

Installs a [WASI libc][wasi-libc] implementation for WebAssembly.

```bash
$ make install-deps-wasi-libc
```

#### clean-deps-wasi-libc

Removes an installed [WASI libc][wasi-libc] distribution.

```bash
$ make clean-deps-wasi-libc
```

#### clean-deps-wasi-libc-tests

Removes [WASI libc][wasi-libc] installation tests.

```bash
$ make clean-deps-wasi-libc-tests
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

[boost]: http://www.boost.org/

[cephes]: http://www.moshier.net/#Cephes

[cppcheck]: http://cppcheck.sourceforge.net/

[electron]: https://www.electronjs.org/

[emscripten-sdk]: https://github.com/emscripten-core/emsdk

[llvm]: https://llvm.org

[node-js]: https://nodejs.org/en/

[node-js-add-ons]: https://nodejs.org/api/addons.html

[openblas]: https://github.com/xianyi/OpenBLAS

[shellcheck]: https://github.com/koalaman/shellcheck

[wabt]: https://github.com/WebAssembly/wabt

[wasi-libc]: https://github.com/WebAssembly/wasi-libc

</section>

<!-- /.links -->
