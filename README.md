
<!-- <badges> -->

## Status

[![stability-experimental][stability-image]][stability-url]

#### Version

[![git tag][tag-image]][tag-url] [![NPM version][npm-image]][npm-url] [![Node.js version][node-image]][node-url]

#### Build

<!-- TODO: distinguish between Linux and Windows code coverage -->

| OS | Build (master) | Coverage (master) | Build (develop) | Coverage (develop) |
| --- | --- | --- | --- | --- |
| Linux/OS X | [![Linux/OS X build status (master)][build-image-master]][build-url-master] | [![coverage (master)][coverage-image-master]][coverage-url-master] | [![Linux/OS X build status (develop)][build-image-develop]][build-url-develop] | [![coverage (develop)][coverage-image-develop]][coverage-url-develop]
| Windows | [![Windows build status (master)][windows-build-image-master]][windows-build-url-master] | [![coverage (master)][coverage-image-master]][coverage-url-master] | [![Windows build status (develop)][windows-build-image-develop]][windows-build-url-develop] | [![coverage (develop)][coverage-image-develop]][coverage-url-develop] |


#### Dependencies

[![Dependencies][dependencies-image]][dependencies-url] [![DevDependencies][dev-dependencies-image]][dev-dependencies-url]


#### Community

[![Chat][chat-image]][chat-url]

---

<!-- </badges> -->


# stdlib

> Standard library for JavaScript.

Stdlib is a collection of robust, high performance libraries for numeric computing, streams, and more. This is the GitHub repository of stdlib source code and documentation. For stdlib development notes, see below.


## Development

### Prerequisites

Developing and running stdlib __requires__ the following prerequisites:

* [git][git]: version control
* [GNU make][gnu-make]: development utility and task runner
* [Node.js][node-js]: JavaScript runtime (version `>= 0.10`)

While not required to run stdlib, the following dependencies may be required for testing, benchmarking, and general development:

* [Julia][julia]: language for technical computing (version `>= 0.4`)
* [R][r]: language for statistical computing (version `>= 3.0.0`)
* [Python][python]: general purpose language (version `>= 2.7`)
* [gcc &amp; g++][gcc] or [clang][clang]: C/C++ compilation and linking (g++ version `>= 4.7`; clang version `>= 3.1`)
* [pandoc][pandoc]: universal document converter

<!--
The following external libraries are automatically downloaded and the compiled from source the first you run `make`:

* [Boost][boost]: portable C++ libraries

!-->


### Download

To acquire the source code, clone the git repository.

``` bash
$ git clone https://github.com/stdlib-js/stdlib
```

If you are behind a firewall, you may need to use the `https` protocol, rather than the `git` protocol.

``` bash
$ git config --global url."https://".insteadOf git://
```

### Installation

To install development dependencies,

``` bash
$ make install
```

To initialize the development environment,

``` bash
$ make init
```

### Update

If you have previously downloaded stdlib using `git clone`, you can update an existing source tree using `git pull`.

``` bash
$ cd ./path/to/stdlib
$ git pull
```

If you have initialized the development environment using `make init`, updating the source tree will trigger hooks to ensure all development dependencies are up-to-date.


### Organization

The stdlib source code is organized as follows:

``` text
bin        executable binaries
docs       top-level documentation
etc        configuration files
examples   top-level library examples
lib        library source code
test       top-level tests
tools      development utilities
workshops  workshops
```


### Troubleshooting

* Occasionally, new versions of external dependencies may cause conflicts with existing builds. Most of the time, running

  ``` bash
  $ make clean
  $ make install
  ```

  will be enough to resolve these conflicts. Otherwise, remove the git repository, clone, and reinstall.


### Editors

* This repository uses [EditorConfig][editorconfig] to maintain consistent coding styles between different editors and IDEs, including [browsers][editorconfig-chrome]. 



---

## Contributing

See the [contributing guidelines][contributing].


## License

See [LICENSE][license].


## Copyright

Copyright &copy; 2016. The Stdlib [Authors][authors].


<section class="links">

[stability-image]: https://img.shields.io/badge/stability-experimental-orange.svg
[stability-url]: https://github.com/stdlib-js/stdlib

[npm-image]: https://img.shields.io/npm/v/@stdlib-js/stdlib.svg
[npm-url]: https://npmjs.org/package/@stdlib-js/stdlib

[tag-image]: https://img.shields.io/github/tag/stdlib-js/stdlib.svg
[tag-url]: https://github.com/stdlib-js/stdlib/tags

[node-image]: https://img.shields.io/node/v/@stdlib-js/stdlib.svg
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

[dependencies-image]: https://img.shields.io/david/stdlib-js/stdlib/develop.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stdlib/develop

[dev-dependencies-image]: https://img.shields.io/david/dev/stdlib-js/stdlib/develop.svg
[dev-dependencies-url]: https://david-dm.org/stdlib-js/stdlib/develop#info=devDependencies

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[git]: http://git-scm.com/
[gnu-make]: https://www.gnu.org/software/make
[node-js]: https://nodejs.org/en/
[julia]: http://julialang.org/
[r]: https://www.r-project.org/
[python]: https://www.python.org/
[gcc]: http://gcc.gnu.org/
[clang]: http://clang.llvm.org/
[boost]: http://www.boost.org/
[pandoc]: http://pandoc.org/

[editorconfig]: http://editorconfig.org/
[editorconfig-chrome]: https://chrome.google.com/webstore/detail/github-editorconfig/bppnolhdpdfmmpeefopdbpmabdpoefjh?hl=en-US

[contributing]: https://github.com/stdlib-js/stdlib/blob/master/CONTRIBUTING.md
[authors]: https://github.com/stdlib-js/stdlib/graphs/contributors
[license]: https://raw.githubusercontent.com/stdlib-js/stdlib/master/LICENSE

</section>

<!-- /.links -->
