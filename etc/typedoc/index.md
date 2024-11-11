<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

<!-- Section to include assets such as the project logo, etc. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="banner">
    <div class="image" align="center">
        <br>
        <br>
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@9f7d30f089ecc458a8b836a75afab75caf5c0b36/docs/assets/logo_banner.svg" alt="stdlib logo">
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

stdlib ([/ˈstændərd lɪb/][ipa-english] "standard lib") is a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing applications. The library provides a collection of robust, high performance libraries for mathematics, statistics, data processing, streams, and more and includes many of the utilities you would expect from a standard library.

This is the TypeScript documentation for exported functions, methods, properties, classes, and variables. For help developing stdlib, see the [development guide][stdlib-development].

## Resources

-   [**Installation**](#installation)
-   [**Homepage**][stdlib-homepage]
-   [**Documentation**][stdlib-documentation]
-   [**Source code**][stdlib-source]
-   [**Code coverage**][stdlib-code-coverage]
-   [**FAQ**][stdlib-faq]

### External Resources

-   [**Twitter**][stdlib-twitter]
-   [**Gitter**][stdlib-gitter]

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

* * *

## Installation

To accommodate various use cases, stdlib can be consumed in multiple ways. The preferred means of consumption depends on your individual use case. We've provided some user stories to help you identify the best approach. 😃

While this project's installation instructions defaults to using [npm][npm] for package management, installation via other package managers, such as [yarn][yarn], should be a matter of simply swapping out [npm][npm] commands with those of the relevant package manager.

### User Stories

-   I want to perform **data analysis** and/or **data science** related tasks in JavaScript and Node.js, similar to how I might use IPython, Julia, R, and/or MATLAB.

    -   Install the entire project as a [command-line utility](#install_command_line_utility).

-   I am building a **web application**.

    -   I plan on using [Browserify][browserify], [Webpack][webpack], and other bundlers for use in web browsers.

        -   Install [individual packages](#install_individual_packages). Installing the entire project is likely unnecessary and will lead to slower installation times.

    -   I would like to **vendor** a custom bundle containing various stdlib functionality.

        -   Follow the steps for creating [custom bundles](#install_custom_bundles).

    -   I would like to include stdlib functionality by just using a `script` tag.

        -   Install one of the pre-built UMD [browser bundles](#install_browser_bundles) or consume one of the pre-built bundles via a CDN, such as [unpkg][unpkg].

    -   I am interested in using a substantial amount of functionality found in a top-level stdlib namespace and don't want to separately install hundreds of individual packages (e.g., if building an on-line calculator application and wanting all of stdlib's math functionality).

        -   Install one or more top-level [namespaces](#install_namespaces). Installing the entire project is likely unnecessary and will lead to slower installation times. Installing a top-level namespace is likely to mean installing functionality which will never be used; however, installing a top-level namespace is likely to be easier and less time-consuming than installing many individual packages separately.

            Concerning bundling, installing a top-level namespace should not be a concern, as individual functionality can still be independently required/imported. Project installation times may, however, be somewhat slower.

-   I am building a [Node.js][node-js] **server application**.

    -   I am interested in using various functionality found in stdlib.

        -   Install [individual packages](#install_individual_packages). Installing the entire project is likely unnecessary and will lead to slower installation times.

    -   I am interested in using a substantial amount of functionality found in a top-level stdlib namespace and don't want to separately install hundreds of individual packages.

        -   Install one or more top-level [namespaces](#install_namespaces). Installing the entire project is likely unnecessary and will lead to slower installation times. Installing a top-level namespace is likely to mean installing functionality which will never be used; however, installing a top-level namespace is likely to be easier and less time-consuming than installing many individual packages separately.

-   I am using **Deno**.

    -   Use [skypack][skypack] to import [individual packages](#install_individual_packages).

-   I would like to use stdlib functionality in an [Observable][observable] notebook.

    -   Consume one of the pre-built [browser bundles](#install_browser_bundles) via a CDN, such as [unpkg][unpkg].

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
var ndarray = require( '@stdlib/ndarray/ctor' );

var arr = ndarray( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>
```

and to use `import`

<!-- run-disable -->

```javascript
import ndarray from '@stdlib/ndarray/ctor';

var arr = ndarray( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>
```

<a name="install_individual_packages"></a>

### Individual Packages

stdlib is designed to allow decomposition of the main project into individual packages which can be independently consumed. Accordingly, users of the project can avoid installing all project functionality and only install the exact functionality they need.

To install individual packages, replace forward slashes `/` after `@stdlib/` with hyphens `-`. For example,

<!-- run-disable -->

```bash
$ npm install @stdlib/ndarray-ctor
```

Once installed, individual packages can be required/imported. For example, to use `require`

```javascript
var ndarray = require( '@stdlib/ndarray-ctor' );

var arr = ndarray( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>
```

and to use `import`

<!-- run-disable -->

```javascript
import ndarray from '@stdlib/ndarray-ctor';

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

<a name="install_browser_bundles"></a>

### Browser Bundles

For pre-built distributable UMD bundles for use in browser environments or as shared ("vendored") libraries in server environments, see the [`dist`][stdlib-bundles] directory and associated [guide][stdlib-bundles].

As an example, to include a UMD bundle exposing lower-level special [math functions][@stdlib/math/base/special] in a webpage, we can first locally install the UMD bundle package using [npm][npm]

```bash
$ npm install @stdlib/dist-math-base-special-flat
```

and then include the following `<script>` tag in our HTML document

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-math-base-special-flat/build/bundle.min.js"></script>
```

making sure to modify the script path based on the local installation directory.

If no recognized module system is present, one can access bundle contents in another `<script>` tag via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var erf = stdlib_math_base_special_flat.erf;
    console.log( erf( 0.5 ) );
</script>
```

For more details and available bundles, see the [`dist`][stdlib-bundles] directory and associated [guide][stdlib-bundles]. The [guide][stdlib-bundles] includes instructions for consuming via CDNs, such as [unpkg][unpkg].

<a name="install_custom_bundles"></a>

### Custom Bundles

To create a custom bundle based on project needs,

1.  follow the [download][stdlib-development], [configuration][stdlib-development], and [installation][stdlib-development] instructions as described in the [development guide][stdlib-development].

2.  navigate to the local installation directory.

3.  run the following command to print help documentation for providing a list of stdlib package names to bundle

    <!-- run-disable -->

    ```bash
    $ node ./bin/cli bundle-pkg-list -- -h
    ```

4.  modify and run the above command with the list of packages to bundle

    <!-- run-disable -->

    ```bash
    $ node ./bin/cli bundle-pkg-list -- <pkg> <pkg> <pkg> ...
    ```

Alternatively, install stdlib as a command-line utility (as described above) and run the following command

<!-- run-disable -->

```bash
$ stdlib bundle-pkg-list -- <pkg> <pkg> <pkg> ...
```

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

See the [contributing guidelines][stdlib-contributing].

## License

See [LICENSE][stdlib-license].

## Copyright

Copyright © 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.intro -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make

[bash]: https://www.gnu.org/software/bash/

[curl]: http://curl.haxx.se/

[wget]: http://www.gnu.org/software/wget

[fetch]: http://www.freebsd.org/cgi/man.cgi?fetch%281%29

[node-js]: https://nodejs.org/en/

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[gcc]: http://gcc.gnu.org/

[clang]: http://clang.llvm.org/

[gfortran]: https://gcc.gnu.org/fortran/

[openblas]: https://github.com/xianyi/OpenBLAS

[electron]: https://electron.atom.io/

[webassembly]: http://webassembly.org/

[node-js-add-ons]: https://nodejs.org/api/addons.html

[browserify]: https://github.com/substack/node-browserify

[webpack]: https://webpack.js.org/

[unpkg]: https://unpkg.com/#/

[ipa-english]: https://en.wikipedia.org/wiki/Help:IPA/English

[stdlib-contributing]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[stdlib-development]: https://github.com/stdlib-js/stdlib/blob/develop/docs/development.md

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stdlib/develop/LICENSE

[stdlib-homepage]: https://github.com/stdlib-js/stdlib

[stdlib-documentation]: https://github.com/stdlib-js/stdlib

[stdlib-faq]: https://github.com/stdlib-js/stdlib/blob/develop/FAQ.md

[stdlib-source]: https://github.com/stdlib-js/stdlib

[stdlib-bundles]: https://github.com/stdlib-js/stdlib/tree/develop/dist

[stdlib-code-coverage]: https://codecov.io/github/stdlib-js/stdlib/branch/develop

[stdlib-twitter]: https://x.com/stdlibjs

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

</section>

<!-- /.links -->
