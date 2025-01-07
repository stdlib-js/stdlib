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

<!-- lint disable first-heading-level -->

<!-- Section to include announcements. If section is included, add a horizontal rule *after* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="announcement">

</section>

<!-- /.announcement -->

<!-- Section to include assets such as the project logo, etc. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="banner">
    <div class="image" align="center">
        <br>
        <br>
        <a href="https://stdlib.io/" />
            <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@9f7d30f089ecc458a8b836a75afab75caf5c0b36/docs/assets/logo_banner.svg" alt="stdlib logo">
        </a>
        <br>
        <br>
        <br>
        <br>
    </div>
</section>

<!-- /.banner -->

* * *

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib.

stdlib ([/ˈstændərd lɪb/][ipa-english] "standard lib") is a standard library with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js. The library provides a collection of robust, high performance libraries for mathematics, statistics, data processing, streams, and more and includes many of the utilities you would expect from a standard library.

What sets stdlib apart is its fully decomposable architecture, which allows you to swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.

When you use stdlib, you can be confident that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code available.

Want to join us in bringing numerical computing to the web? **Start by starring the project.** :star2:

Explore this GitHub repository for stdlib's source code and documentation. For guidance on developing stdlib, refer to the [development guide][stdlib-development].

Thank you for being a part of our community! Your support is invaluable to us!

## Resources

-   [**Installation**](#installation)
-   [**Homepage**][stdlib-homepage]
-   [**Documentation**][stdlib-documentation]
-   [**Source code**][stdlib-source]
-   [**Code coverage**][stdlib-code-coverage]
-   [**FAQ**][stdlib-faq]

### External Resources

-   [**Google Calendar**][stdlib-public-calendar]: calendar of public events, including [open office hours][stdlib-office-hours].
-   [**Open Collective**][open-collective-stdlib]: financially support the project.
-   [**Twitter**][stdlib-twitter]: follow us on social media.
-   [**Gitter**][stdlib-gitter]: chat with project maintainers and other community members.

## Features

-   150+ [special math functions][@stdlib/math/base/special].

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@203839353bc74297fe641207270f7917d2bda560/docs/assets/readme/base_special_math.png" alt="Demo showcasing special math functions">
    </div>

-   35+ [probability distributions][@stdlib/stats/base/dists], with support for evaluating probability density functions (PDFs), cumulative distribution functions (CDFs), quantiles, moments, and more.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e13885087939c064c69aa43ee80ea52710de5591/docs/assets/readme/base_dists.png" alt="Demo showcasing probability distributions">
    </div>

-   40+ [seedable pseudorandom number generators][@stdlib/random/base] (PRNGs).

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@83dcd0fad98883320a8b1efc801b2fc1ed2a003d/docs/assets/readme/base_prngs.png" alt="Demo showcasing PRNGs">
    </div>

-   200+ general [utilities][@stdlib/utils] for data transformation, functional programming, and asynchronous control flow.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e6eeea31e49d6db1b6f57ae59d2988d4b427e285/docs/assets/readme/utils.png" alt="Demo showcasing general utilities">
    </div>

-   200+ [assertion utilities][@stdlib/assert] for data validation and feature detection.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6970c8b4eb546a10712734d225c15863db9b2c92/docs/assets/readme/assert.png" alt="Demo showcasing assertion utilities">
    </div>

-   50+ [sample datasets][@stdlib/datasets] for testing and development.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@f71a38e62247e31dc47d248f6f1b3e434abeb971/docs/assets/readme/datasets.png" alt="Demo showcasing sample datasets">
    </div>

-   A [plot API][@stdlib/plot/ctor] for data visualization and exploratory data analysis.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@39d75174b24ea2a84828d9624643776a164478e4/docs/assets/readme/plot.png" alt="Demo showcasing plot API">
    </div>

-   Native add-ons for interfacing with BLAS libraries, with pure JavaScript fallbacks.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@efede6af3ef957da08838903b0558441263adf85/docs/assets/readme/base_blas.png" alt="Demo showcasing BLAS APIs">
    </div>

-   A [benchmark framework][@stdlib/bench/harness] supporting TAP.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@4833049f8d1895585bd51ec6fa97b8ca0d37c6fb/docs/assets/readme/benchmark.gif" alt="Demo showcasing benchmark framework">
    </div>

-   REPL environment with integrated help and examples.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3864ae6f86bbc215956c0e667d82d49a6eaca780/docs/assets/readme/repl.gif" alt="Demo showcasing REPL environment">
    </div>

-   Can be bundled using [Browserify][browserify], [Webpack][webpack], and other bundlers for use in web browsers.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e54894a93697653dda22d11cd0aec1ccb292b7b8/docs/assets/readme/bundled.png" alt="Demo showcasing browser support">
    </div>

-   Every function is accompanied by [TypeScript][typescript] declaration files, ensuring type safety and facilitating intelligent code completion in IDEs.

    <div class="image" align="center">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@f5f1f915a7178d9bc76a95d34afd799e6092ec3a/docs/assets/readme/typescript.png" alt="Demo showcasing TypeScript declaration files" >
    </div>

* * *

## Installation

To accommodate various use cases, stdlib can be used in multiple ways. The preferred method of use depends on your individual use case. We've provided some user stories to help you identify the best approach. 😃

While this project's installation instructions defaults to using [npm][npm] for package management, installation via other package managers, such as [yarn][yarn], should be a matter of simply swapping out [npm][npm] commands with those of the relevant package manager.

### User Stories

-   I want to perform **data analysis** and **data science** tasks in JavaScript and Node.js, similar to how I might use Python, Julia, R, and MATLAB.

    -   Install the entire project as a [command-line utility](#install_command_line_utility).

-   I am building a **web application**.

    -   I plan on using [Browserify][browserify], [Webpack][webpack], and other bundlers for use in web browsers.

        -   Install [individual packages](#install_individual_packages). Installing the entire project is likely unnecessary and will lead to slower installation times.

    -   I would like to **vendor** a custom bundle containing various stdlib functionality.

        -   Follow the steps for creating [custom bundles](#install_custom_bundles).

    -   I would like to include stdlib functionality by just using a `script` tag.

        -   I would like to use ES Modules.

            -   Use an individual package's ES Module [build](#install_env_builds_esm).

        -   I would like to use a pre-built bundle (possibly via a CDN, such as [unpkg][unpkg] or [jsDelivr][jsdelivr]).

            -   Install (or consume via a CDN) an individual package's pre-built UMD [browser bundle](#install_env_builds_umd).

    -   I am interested in using a substantial amount of functionality found in a top-level stdlib namespace and don't want to separately install hundreds of individual packages (e.g., if building an on-line calculator application and wanting all of stdlib's math functionality).

        -   Install one or more top-level [namespaces](#install_namespaces). Installing the entire project is likely unnecessary and will lead to slower installation times. Installing a top-level namespace is likely to mean installing functionality which will never be used; however, installing a top-level namespace is likely to be easier and less time-consuming than installing many individual packages separately.

            When bundling, installing a top-level namespace should not be a concern, as individual functionality can still be independently required/imported. Project installation times may, however, be somewhat slower.

-   I am building a [Node.js][node-js] **server application**.

    -   I am interested in using various functionality found in stdlib.

        -   Install [individual packages](#install_individual_packages). Installing the entire project is likely unnecessary and will lead to slower installation times.

    -   I would like to **vendor** stdlib functionality and avoid dependency trees.

        -   Install individual package UMD [bundles](#install_env_builds_nodejs).

    -   I am interested in using a _substantial_ amount of functionality found in a top-level stdlib namespace and don't want to separately install hundreds of individual packages.

        -   Install one or more top-level [namespaces](#install_namespaces). Installing the entire project is likely unnecessary and will lead to slower installation times. Installing a top-level namespace is likely to mean installing functionality which will never be used; however, installing a top-level namespace is likely to be easier and less time-consuming than installing many individual packages separately.

-   I am using **Deno**.

    -   Import [individual packages](#install_env_builds_deno) using pre-built Deno builds.

-   I would like to use stdlib functionality in an [Observable][observable] notebook.

    -   Consume a pre-built [browser bundles](#install_env_builds_umd) via a CDN, such as [unpkg][unpkg] or [jsDelivr][jsdelivr].

-   I want to hack at stdlib, possibly even creating **customized** builds to link to platform-specific native libraries (such as Intel's MKL or some other numerical library).

    -   Install the project as a [system library](#install_system_library) by cloning this repository and following the [installation][stdlib-development] instructions as described in the [development guide][stdlib-development].

<a name="install_complete_library"></a>

### Complete Library

To install the entire project as a library or application dependency,

<!-- run-disable -->

```bash
$ npm install @stdlib/stdlib
```

Once installed, stdlib packages can be individually required/imported to minimize load times and decrease bundle sizes. For example, to use `require`

```javascript
var ndarray = require( '@stdlib/ndarray/array' );

var arr = ndarray( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>
```

and to use `import`

<!-- run-disable -->

```javascript
import ndarray from '@stdlib/ndarray/array';

var arr = ndarray( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>
```

<a name="install_individual_packages"></a>

### Individual Packages

stdlib is designed to allow decomposition of the main project into individual packages which can be independently consumed. Accordingly, users of the project can avoid installing all project functionality and only install the exact functionality they need.

To install individual packages, replace forward slashes `/` after `@stdlib/` with hyphens `-`. For example,

<!-- run-disable -->

```bash
$ npm install @stdlib/ndarray-array
```

Once installed, individual packages can be required/imported. For example, to use `require`

```javascript
var ndarray = require( '@stdlib/ndarray-array' );

var arr = ndarray( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>
```

and to use `import`

<!-- run-disable -->

```javascript
import ndarray from '@stdlib/ndarray-array';

var arr = ndarray( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>
```

<a name="install_namespaces"></a>

### Namespaces

stdlib is comprised of various top-level namespaces (i.e., collections of related functionality united by common themes). For example, to install all math functionality found in the top-level `math` namespace,

<!-- run-disable -->

```bash
$ npm install @stdlib/math
```

Once installed, packages within a top-level namespace can be individually required/imported to minimize load times and decrease bundle sizes. For example, to use `require`

```javascript
var sin = require( '@stdlib/math/base/special/sin' );

var v = sin( 3.14 );
// returns <number>
```

and to use `import`

<!-- run-disable -->

```javascript
import sin from '@stdlib/math/base/special/sin';

var v = sin( 3.14 );
// returns <number>
```

**Note**: installing nested namespaces found within top-level namespaces (e.g., `math/base`) is **not** supported. Consider installing individual packages or the relevant top-level namespace.

<a name="install_command_line_utility"></a>

### Command-line Utility

To install globally for use as a command-line utility and/or use the [REPL][@stdlib/repl],

<!-- run-disable -->

```bash
$ npm install -g @stdlib/stdlib
```

which will expose the `stdlib` command. For example, to see available sub-commands

<!-- run-disable -->

```bash
$ stdlib help
```

and to run the [REPL][@stdlib/repl]

<!-- run-disable -->

```bash
$ stdlib repl
```

<a name="install_env_builds"></a>

### Environment Builds

<a name="install_env_builds_esm"></a>

#### ES Modules

To use ES Modules via a `<script>` tag, use **ES Module builds** available in each package's repository via a dedicated `esm` branch (e.g., see the [`esm`][@stdlib/math-base-special-erf-esm] branch for [`@stdlib/math-base-special-erf`][@stdlib/math-base-special-erf-esm]). For example,

<!-- run-disable -->

```html
<script type="module">
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import erf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erf@esm/index.mjs';

const x = linspace( -10.0, 10.0, 100 );

for ( let i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, erf(x): %d', x[ i ], erf( x[ i ] ) );
}
</script>
```

<a name="install_env_builds_deno"></a>

#### Deno

To use individual packages in Deno, use **Deno builds** available in each package's repository via a dedicated `deno` branch (e.g., see the [`deno`][@stdlib/ndarray-array-deno] branch for [`@stdlib/ndarray-array`][@stdlib/ndarray-array-deno]). For example,

<!-- run-disable -->

```javascript
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var arr = ndarray( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>
````


<a name="install_env_builds_jquery"></a>

#### jQuery-like Bundle

For those wanting a jQuery-like bundle, one can use pre-built distributable UMD bundles for use in browser environments or as shared ("vendored") libraries in server environments available in each package's repository via a dedicated `umd` branch. See sections [UMD](#install_env_builds_umd) and [Node.js](#install_env_builds_nodejs) for more details.

<a name="install_env_builds_umd"></a>

#### UMD

To use UMD bundles either via a `<script>` tag or in [Observable][observable], use UMD **browser builds** available in each package's repository via a dedicated `umd` branch (e.g., see the [`umd`][@stdlib/math-base-special-erf-umd] branch for [`@stdlib/math-base-special-erf`][@stdlib/math-base-special-erf-umd]). For example,

<!-- run-disable -->

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = linspace( -10.0, 10.0, 100 );

for ( var i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, erf(x): %d', x[ i ], erf( x[ i ] ) );
}

})();
</script>
```

<a name="install_env_builds_nodejs"></a>

#### Node.js

To **vendor** stdlib functionality and avoid installing dependency trees, use UMD **server builds** available in each package's repository via a dedicated `umd` branch (e.g., see the [`umd`][@stdlib/math-base-special-erf-umd] branch for [`@stdlib/math-base-special-erf`][@stdlib/math-base-special-erf-umd]). For example,

<!-- run-disable -->

```javascript
var linspace = require( '/path/to/vendor/umd/@stdlib/array-base-linspace' );
var erf = require( '/path/to/vendor/umd/@stdlib/math-base-special-erf' );

var x = linspace( -10.0, 10.0, 100 );

for ( var i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, erf(x): %d', x[ i ], erf( x[ i ] ) );
}
```

<a name="install_custom_bundles"></a>

### Custom Bundles

To create a custom bundle based on project needs,

1.  follow the [download][stdlib-development], [configuration][stdlib-development], and [installation][stdlib-development] instructions as described in the [development guide][stdlib-development].

2.  navigate to the local installation directory.

3.  run the following command to print help documentation for providing a list of stdlib package names to bundle

    <!-- run-disable -->

    ```bash
    $ NODE_PATH=./lib/node_modules node ./bin/cli bundle-pkg-list -- -h
    ```

4.  modify and run the above command with the list of packages to bundle

    <!-- run-disable -->

    ```bash
    $ NODE_PATH=./lib/node_modules node ./bin/cli bundle-pkg-list -- <pkg> <pkg> <pkg> ...
    ```

<!-- FIXME: the following is not possible atm as we don't publish `@stdlib/_tools` which is needed in order for the command-line utility to work!

Alternatively, install stdlib as a command-line utility (as described above) and run the following command
-->

<!-- run-disable -->

<!--
```bash
$ stdlib bundle-pkg-list -- <pkg> <pkg> <pkg> ...
```
-->

Upon generating a bundle, the bundle can be loaded via a `<script>` tag as described above for pre-built distributable UMD bundles.

<a name="install_system_library"></a>

### System Library

To install as a system library (e.g., for the purposes of creating custom builds), follow the [download][stdlib-development], [configuration][stdlib-development], and [installation][stdlib-development] instructions as described in the [development guide][stdlib-development].

* * *

## Prerequisites

Installing and running stdlib for use in [Node.js][node-js] **requires** the following prerequisites:

-   [Node.js][node-js]: JavaScript runtime (version `>= 0.10`)
-   [npm][npm]: package manager (version `> 2.7.0`; if Node `< 1.0.0`, version `> 2.7.0` and `< 4.0.0`; if Node `<= 10.x.x`, version `> 2.7.0` and `< 6.0.0`)

Most functionality in stdlib is implemented in JavaScript and no further prerequisites are required to use stdlib (i.e., you can safely avoid installing any additional prerequisites); however, some implementations try to capture performance benefits by using [native bindings][node-js-add-ons] and/or [WebAssembly][webassembly]. While **not** required to run stdlib, as **every** stdlib implementation has a JavaScript fallback, the following dependencies are **required** for building native add-ons, including linking to BLAS and LAPACK libraries:

-   [GNU make][make]: development utility and task runner
-   [GNU bash][bash]: an sh-compatible shell
-   [gcc & g++][gcc] or [Clang][clang]: C/C++ compilation and linking (g++ version `>= 4.8`; clang version `>= 3.5`, Xcode version `>=8.3.1` on OS X)
-   [gfortran][gfortran]: Fortran compilation and linking (version `>= 4.8`)

While **not** required to run stdlib, the following dependencies are **required** for automatically downloading external libraries:

-   [curl][curl], [wget][wget], or [fetch][fetch] (FreeBSD): utilities for downloading remote resources

The following external libraries can be automatically downloaded and compiled from source using `make`:

-   [OpenBLAS][openblas]: optimized BLAS library
-   [Electron][electron]: framework for cross-platform desktop applications

* * *

## Contributing

First time contributor?

-   See the [contributing guidelines][stdlib-contributing].

Already an expert?

-   Fork the repository.

-   Clone the forked repository

    ```bash
    $ git clone --depth=1 https://github.com/<username>/stdlib.git
    ```

    where `<username>` is your GitHub username.

-   Navigate to the `stdlib` directory

    ```bash
    $ cd stdlib
    ```

-   Install dependencies

    ```bash
    $ make install-node-modules
    ```

-   Initialize your stdlib development environment

    ```bash
    $ make init
    ```

<!-- Project sponsors. If sponsors are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="sponsors">

## Sponsors

stdlib development is generously supported by the following sponsors:

<div class="image" align="center">
    <br>
    <a href="https://labs.quansight.org/">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@2719e1d3ecab2cc29985bca35fd33594e65adb55/docs/assets/sponsors/quansight_labs_logo.png" alt="Quansight Labs">
    </a>
    <br>
    <br>
</div>

Are you interested in supporting stdlib? If so, join our [Open Collective][open-collective-stdlib]!

</section>

<!-- /.sponsors -->

<!-- Project users. If users are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="users">

## Users

The following organizations and key stakeholders trust and rely on stdlib:

<div class="image" align="center">
    <br>
    <a href="https://www.cmu.edu/">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@1c8c7dbc9d081eeb13e16c62764f27a65c6553f8/docs/assets/misc/cmu_logo.png" alt="Carnegie Mellon University">
    </a>
    <br>
    <br>
</div>

Does your organization use stdlib? If so, we'd love to hear from you!

</section>

<!-- /.users -->

* * *

## Governance

For information about the governance of the stdlib project, see [GOVERNANCE.md][stdlib-governance].

## License

See [LICENSE][stdlib-license].

## Copyright

Copyright © 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.intro -->

<!-- Project badges. If badges are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="badges">

## Status

#### Version

<!-- lint disable no-paragraph-content-indent -->

[![git tag][tag-image]][tag-url] [![NPM version][npm-image]][npm-url] [![Node.js version][node-image]][node-url]

<!-- lint enable no-paragraph-content-indent -->

<!-- #### Build -->

<!-- TODO: distinguish between Linux and Windows code coverage -->

<!-- lint disable table-pipe-alignment -->

<!-- | OS         | Build (master)                                                                           | Coverage (master)                                                  | Build (develop)                                                                             | Coverage (develop)                                                    |
| ---------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Linux/OS X | [![Linux/OS X build status (master)][build-image-master]][build-url-master]              | [![coverage (master)][coverage-image-master]][coverage-url-master] | [![Linux/OS X build status (develop)][build-image-develop]][build-url-develop]              | [![coverage (develop)][coverage-image-develop]][coverage-url-develop] |
| Windows    | [![Windows build status (master)][windows-build-image-master]][windows-build-url-master] | [![coverage (master)][coverage-image-master]][coverage-url-master] | [![Windows build status (develop)][windows-build-image-develop]][windows-build-url-develop] | [![coverage (develop)][coverage-image-develop]][coverage-url-develop] | -->

<!-- lint enable table-pipe-alignment -->

<!-- #### Dependencies -->

<!-- lint disable no-paragraph-content-indent -->

<!-- [![Dependencies][dependencies-image]][dependencies-url] [![DevDependencies][dev-dependencies-image]][dev-dependencies-url] -->

<!-- lint enable no-paragraph-content-indent -->

#### Community

[![Chat][chat-image]][chat-url]

Have something you want to discuss? In addition to the community chat, we hold regular [office hours][stdlib-office-hours] over video conferencing, which is a great opportunity to ask questions, share ideas, and engage directly with the stdlib team.

You can also subscribe to our [project calendar][stdlib-public-calendar] to stay informed about the latest public community events.

</section>

<!-- /.badges> -->

<!-- Project acknowledgments. If section is included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<!-- * * *

<section class="acknowledgments">

## Acknowledgments

### Build Infrastructure

Test and build infrastructure is generously provided by the following services:

<div class="image" align="center">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3de52540666d1635df046d7e5dd07a1fc5b87d85/docs/assets/misc/ci_logo_banner.svg" alt="Continuous Integration Service Logos">
    <br>
</div>

</section> -->

<!-- /.acknowledgments -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: https://img.shields.io/npm/v/@stdlib/stdlib.svg

[npm-url]: https://npmjs.com/package/@stdlib/stdlib

[tag-image]: https://img.shields.io/github/v/tag/stdlib-js/stdlib.svg

[tag-url]: https://github.com/stdlib-js/stdlib/tags

[node-image]: https://img.shields.io/node/v/@stdlib/stdlib.svg

[node-url]: https://github.com/stdlib-js/stdlib

<!-- [build-image-develop]: https://img.shields.io/travis/stdlib-js/stdlib/develop.svg

[build-url-develop]: https://travis-ci.org/stdlib-js/stdlib

[coverage-image-develop]: https://img.shields.io/codecov/c/github/stdlib-js/stdlib/develop.svg

[coverage-url-develop]: https://codecov.io/github/stdlib-js/stdlib/branch/develop

[dependencies-url]: https://socket.dev/npm/package/@stdlib/stdlib/dependencies

[dev-dependencies-url]: https://socket.dev/npm/package/@stdlib/stdlib/dependencies -->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg

[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[make]: https://www.gnu.org/software/make/

[bash]: https://www.gnu.org/software/bash/

[curl]: https://curl.se/

[wget]: https://www.gnu.org/software/wget/

[fetch]: https://www.freebsd.org/cgi/man.cgi?fetch%281%29

[node-js]: https://nodejs.org/en/

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[gcc]: http://gcc.gnu.org/

[clang]: https://clang.llvm.org/

[gfortran]: https://gcc.gnu.org/fortran/

[openblas]: https://github.com/xianyi/OpenBLAS

[electron]: https://www.electronjs.org/

[webassembly]: https://webassembly.org/

[node-js-add-ons]: https://nodejs.org/api/addons.html

[browserify]: https://github.com/substack/node-browserify

[webpack]: https://webpack.js.org/

[typescript]: https://www.typescriptlang.org/

[unpkg]: https://unpkg.com/#/

[jsdelivr]: https://www.jsdelivr.com/

[observable]: https://observablehq.com/

[ipa-english]: https://en.wikipedia.org/wiki/Help:IPA/English

[stdlib-contributing]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[stdlib-development]: https://github.com/stdlib-js/stdlib/blob/develop/docs/development.md

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stdlib/develop/LICENSE

[stdlib-governance]: https://raw.githubusercontent.com/stdlib-js/stdlib/develop/GOVERNANCE.md

[stdlib-homepage]: https://stdlib.io

[stdlib-documentation]: https://stdlib.io/docs/api

[stdlib-faq]: https://github.com/stdlib-js/stdlib/blob/develop/FAQ.md

[stdlib-source]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib

[stdlib-code-coverage]: https://codecov.io/github/stdlib-js/stdlib/branch/develop

[stdlib-public-calendar]: https://calendar.google.com/calendar/embed?src=a72677fe2820c833714b8b9a2aa87393f742bcaf0d0f6c9499eee6661795eae0%40group.calendar.google.com

[stdlib-office-hours]: https://github.com/stdlib-js/meetings/issues?q=sort%3Aupdated-desc%20is%3Aissue%20is%3Aopen%20label%3A%22Office%20Hours%22

[open-collective-stdlib]: https://opencollective.com/stdlib

[stdlib-twitter]: https://twitter.com/stdlibjs

[stdlib-gitter]: https://gitter.im/stdlib-js/stdlib

[@stdlib/math/base/special]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special

[@stdlib/stats/base/dists]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/stats/base/dists

[@stdlib/random/base]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base

[@stdlib/assert]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/assert

[@stdlib/datasets]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets

[@stdlib/utils]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/utils

[@stdlib/plot/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/plot/ctor

[@stdlib/bench/harness]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/bench/harness

[@stdlib/repl]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/repl

[@stdlib/ndarray-array-deno]: https://github.com/stdlib-js/ndarray-array/tree/deno

[@stdlib/math-base-special-erf-esm]: https://github.com/stdlib-js/math-base-special-erf/tree/esm

[@stdlib/math-base-special-erf-umd]: https://github.com/stdlib-js/math-base-special-erf/tree/umd

</section>

<!-- /.links -->
