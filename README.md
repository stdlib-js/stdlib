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

<!-- Section to include assets such as the project logo, etc. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="banner">
    <div class="image" align="center">
        <br>
        <br>
        <a href="https://stdlib.io/" />
            <img src="https://cdn.rawgit.com/stdlib-js/stdlib/9f7d30f089ecc458a8b836a75afab75caf5c0b36/docs/assets/logo_banner.svg" alt="stdlib logo">
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

stdlib ([/ˈstændərd lɪb/][ipa-english] "standard lib") is a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing applications. The library provides a collection of robust, high performance libraries for mathematics, statistics, data processing, streams, and more and includes many of the utilities you would expect from a standard library.

This is the GitHub repository of stdlib source code and documentation. For help developing stdlib, see the [development guide][stdlib-development].

## Features

-   150+ [special math functions][@stdlib/math/base/special].

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/203839353bc74297fe641207270f7917d2bda560/docs/assets/readme/base_special_math.png" alt="Demo showcasing special math functions">
    </div>

-   35+ [probability distributions][@stdlib/stats/base/dists], with support for evaluating probability density functions (PDFs), cumulative distribution functions (CDFs), quantiles, moments, and more.

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/e13885087939c064c69aa43ee80ea52710de5591/docs/assets/readme/base_dists.png" alt="Demo showcasing probability distributions">
    </div>

-   40+ [seedable pseudorandom number generators][@stdlib/random/base] (PRNGs).

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/83dcd0fad98883320a8b1efc801b2fc1ed2a003d/docs/assets/readme/base_prngs.png" alt="Demo showcasing PRNGs">
    </div>

-   200+ general [utilities][@stdlib/utils] for data transformation, functional programming, and asynchronous control flow.

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/e6eeea31e49d6db1b6f57ae59d2988d4b427e285/docs/assets/readme/utils.png" alt="Demo showcasing general utilities">
    </div>

-   200+ [assertion utilities][@stdlib/assert] for data validation and feature detection.

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/6970c8b4eb546a10712734d225c15863db9b2c92/docs/assets/readme/assert.png" alt="Demo showcasing assertion utilities">
    </div>

-   50+ [sample datasets][@stdlib/datasets] for testing and development.

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/f71a38e62247e31dc47d248f6f1b3e434abeb971/docs/assets/readme/datasets.png" alt="Demo showcasing sample datasets">
    </div>

-   A [plot API][@stdlib/plot/ctor] for data visualization and exploratory data analysis.

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/39d75174b24ea2a84828d9624643776a164478e4/docs/assets/readme/plot.png" alt="Demo showcasing plot API">
    </div>

-   Native add-ons for interfacing with BLAS libraries, with pure JavaScript fallbacks.

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/efede6af3ef957da08838903b0558441263adf85/docs/assets/readme/base_blas.png" alt="Demo showcasing BLAS APIs">
    </div>

-   A [benchmark framework][@stdlib/bench/harness] supporting TAP.

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/4833049f8d1895585bd51ec6fa97b8ca0d37c6fb/docs/assets/readme/benchmark.gif" alt="Demo showcasing benchmark framework">
    </div>

-   REPL environment with integrated help and examples.

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/3864ae6f86bbc215956c0e667d82d49a6eaca780/docs/assets/readme/repl.gif" alt="Demo showcasing REPL environment">
    </div>

-   Can be bundled using [Browserify][browserify], [Webpack][webpack], and other bundlers for use in web browsers.

    <div class="image" align="center">
        <img src="https://cdn.rawgit.com/stdlib-js/stdlib/e54894a93697653dda22d11cd0aec1ccb292b7b8/docs/assets/readme/bundled.png" alt="Demo showcasing browser support">
    </div>

## Resources

-   [**Homepage**][stdlib-homepage]
-   [**Documentation**][stdlib-documentation]
-   [**Source code**][stdlib-source]
-   [**Code coverage**][stdlib-code-coverage]
-   [**FAQ**][stdlib-faq]

### External Resources

-   [**Twitter**][stdlib-twitter]
-   [**Gitter**][stdlib-gitter]

## Prerequisites

Running stdlib **requires** the following prerequisites:

-   [Node.js][node-js]: JavaScript runtime (version `>= 0.10`)
-   [npm][npm]: package manager (version `> 2.7.0`; if Node `< 1.0.0`, version `> 2.7.0` and `< 4.0.0`; if Node `< 6.0.0`, version `> 2.7.0` and `< 6.0.0`)

Most functionality in stdlib is implemented exclusively in JavaScript; however, some implementations try to capture performance benefits by using [native bindings][node-js-add-ons] and/or [WebAssembly][webassembly]. While **not** required to run stdlib, as **every** stdlib implementation has a JavaScript fallback, the following dependencies are **required** for building native add-ons, including linking to BLAS and LAPACK libraries:

-   [GNU make][make]: development utility and task runner
-   [GNU bash][bash]: an sh-compatible shell
-   [gcc & g++][gcc] or [Clang][clang]: C/C++ compilation and linking (g++ version `>= 4.8`; clang version `>= 3.5`, Xcode version `>=8.3.1` on OS X)
-   [gfortran][gfortran]: Fortran compilation and linking (version `>= 4.8`)

While **not** required to run stdlib, the following dependencies are **required** for automatically downloading external libraries:

-   [curl][curl], [wget][wget], or [fetch][fetch] (FreeBSD): utilities for downloading remote resources

The following external libraries can be automatically downloaded and compiled from source using `make`:

-   [OpenBLAS][openblas]: optimized BLAS library
-   [Electron][electron]: framework for cross-platform desktop applications

## Installation

To install as a library or application dependency,

<!-- run-disable -->

```bash
$ npm install @stdlib/stdlib
```

Once installed, stdlib packages can be individually required/imported to minimize load times and decrease bundle sizes. For example,

```javascript
var dswap = require( '@stdlib/blas/base/dswap' );
```

To install globally for use as a command-line utility,

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

For distributable bundles for use in browser environments or as shared ("vendored") libraries in server environments, see the [`dist`][stdlib-bundles] directory and associated [guide][stdlib-bundles].

Otherwise, to install as a system library, follow the [download][stdlib-development], [configuration][stdlib-development], and [installation][stdlib-development] instructions as described in the [development guide][stdlib-development].

* * *

## Contributing

See the [contributing guidelines][stdlib-contributing].

## License

See [LICENSE][stdlib-license].

## Copyright

Copyright © 2016-2020. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.intro -->

<!-- Project badges. If badges are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="badges">

## Status

[![stability-experimental][stability-image]][stability-url]

#### Version

<!-- lint disable no-paragraph-content-indent -->

[![git tag][tag-image]][tag-url] [![NPM version][npm-image]][npm-url] [![Node.js version][node-image]][node-url]

<!-- lint enable no-paragraph-content-indent -->

#### Build

<!-- TODO: distinguish between Linux and Windows code coverage -->

<!-- lint disable table-pipe-alignment -->

| OS         | Build (master)                                                                           | Coverage (master)                                                  | Build (develop)                                                                             | Coverage (develop)                                                    |
| ---------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Linux/OS X | [![Linux/OS X build status (master)][build-image-master]][build-url-master]              | [![coverage (master)][coverage-image-master]][coverage-url-master] | [![Linux/OS X build status (develop)][build-image-develop]][build-url-develop]              | [![coverage (develop)][coverage-image-develop]][coverage-url-develop] |
| Windows    | [![Windows build status (master)][windows-build-image-master]][windows-build-url-master] | [![coverage (master)][coverage-image-master]][coverage-url-master] | [![Windows build status (develop)][windows-build-image-develop]][windows-build-url-develop] | [![coverage (develop)][coverage-image-develop]][coverage-url-develop] |

<!-- lint enable table-pipe-alignment -->

#### Dependencies

<!-- lint disable no-paragraph-content-indent -->

[![Dependencies][dependencies-image]][dependencies-url] [![DevDependencies][dev-dependencies-image]][dev-dependencies-url]

<!-- lint enable no-paragraph-content-indent -->

#### Community

[![Chat][chat-image]][chat-url]

</section>

<!-- /.badges> -->

<!-- Project sponsors. If sponsors are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="sponsors">

</section>

<!-- /.sponsors -->

<!-- Project acknowledgments. If section is included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="acknowledgments">

## Acknowledgments

### Build Infrastructure

Test and build infrastructure is generously provided by the following services:

<div class="image" align="center">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/3de52540666d1635df046d7e5dd07a1fc5b87d85/docs/assets/misc/ci_logo_banner.svg" alt="Continuous Integration Service Logos">
    <br>
</div>

</section>

<!-- /.acknowledgments -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[stability-image]: https://img.shields.io/badge/stability-experimental-orange.svg

[stability-url]: https://github.com/stdlib-js/stdlib

[npm-image]: https://img.shields.io/npm/v/@stdlib/stdlib.svg

[npm-url]: https://npmjs.org/package/@stdlib/stdlib

[tag-image]: https://img.shields.io/github/tag/stdlib-js/stdlib.svg

[tag-url]: https://github.com/stdlib-js/stdlib/tags

[node-image]: https://img.shields.io/node/v/@stdlib/stdlib.svg

[node-url]: https://github.com/@stdlib-js/stdlib

[build-image-master]: https://img.shields.io/travis/stdlib-js/stdlib/master.svg

[build-url-master]: https://travis-ci.org/stdlib-js/stdlib

[build-image-develop]: https://img.shields.io/travis/stdlib-js/stdlib/develop.svg

[build-url-develop]: https://travis-ci.org/stdlib-js/stdlib

<!-- FIXME: shields.io AppVeyor badges do not seem to work -->

[windows-build-image-master]: https://ci.appveyor.com/api/projects/status/github/stdlib-js/stdlib?branch=master&svg=true

[windows-build-url-master]: https://ci.appveyor.com/api/projects/status/github/stdlib-js/stdlib?branch=master&svg=true

[windows-build-image-develop]: https://ci.appveyor.com/api/projects/status/github/stdlib-js/stdlib?branch=develop&svg=true

[windows-build-url-develop]: https://ci.appveyor.com/api/projects/status/github/stdlib-js/stdlib?branch=develop&svg=true

[coverage-image-master]: https://img.shields.io/codecov/c/github/stdlib-js/stdlib/master.svg

[coverage-url-master]: https://codecov.io/github/stdlib-js/stdlib/branch/master

[coverage-image-develop]: https://img.shields.io/codecov/c/github/stdlib-js/stdlib/develop.svg

[coverage-url-develop]: https://codecov.io/github/stdlib-js/stdlib/branch/develop

[dependencies-image]: https://img.shields.io/david/stdlib-js/stdlib

[dependencies-url]: https://david-dm.org/stdlib-js/stdlib/develop

[dev-dependencies-image]: https://img.shields.io/david/dev/stdlib-js/stdlib

[dev-dependencies-url]: https://david-dm.org/stdlib-js/stdlib/develop?type=dev

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg

[chat-url]: https://gitter.im/stdlib-js/stdlib/

[make]: https://www.gnu.org/software/make

[bash]: https://www.gnu.org/software/bash/

[curl]: http://curl.haxx.se/

[wget]: http://www.gnu.org/software/wget

[fetch]: http://www.freebsd.org/cgi/man.cgi?fetch%281%29

[node-js]: https://nodejs.org/en/

[npm]: https://www.npmjs.com/

[gcc]: http://gcc.gnu.org/

[clang]: http://clang.llvm.org/

[gfortran]: https://gcc.gnu.org/fortran/

[openblas]: https://github.com/xianyi/OpenBLAS

[electron]: https://electron.atom.io/

[webassembly]: http://webassembly.org/

[node-js-add-ons]: https://nodejs.org/api/addons.html

[browserify]: https://github.com/substack/node-browserify

[webpack]: https://webpack.js.org/

[ipa-english]: https://en.wikipedia.org/wiki/Help:IPA/English

[stdlib-contributing]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[stdlib-development]: https://github.com/stdlib-js/stdlib/blob/develop/docs/development.md

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stdlib/develop/LICENSE

[stdlib-homepage]: https://stdlib.io

[stdlib-documentation]: https://stdlib.io/docs/api

[stdlib-faq]: https://github.com/stdlib-js/stdlib/blob/develop/FAQ.md

[stdlib-source]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib

[stdlib-bundles]: https://github.com/stdlib-js/stdlib/tree/develop/dist

[stdlib-code-coverage]: https://codecov.io/github/stdlib-js/stdlib/branch/develop

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

</section>

<!-- /.links -->
