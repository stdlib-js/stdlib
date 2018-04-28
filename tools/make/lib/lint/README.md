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

# Lint

> Lint commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for linting project files.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### lint

Lints files.

<!-- run-disable -->

```bash
$ make lint
```

The command supports the environment variables supported by each language-specific (`lint-<lang>`) command documented below.

This command is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained files.

#### lint-src

Lints source files.

<!-- run-disable -->

```bash
$ make lint-src
```

The command supports the environment variables supported by the `lint-javascript-src` command documented below.

This command is useful when wanting to glob for source files for a particular package in order to lint all contained source files.

#### lint-tests

Lints test files.

<!-- run-disable -->

```bash
$ make lint-tests
```

The command supports the environment variables supported by the `lint-javascript-tests` command documented below.

This command is useful when wanting to glob for test files for a particular package in order to lint all contained test files.

#### lint-examples

Lints examples files.

<!-- run-disable -->

```bash
$ make lint-examples
```

The command supports the environment variables supported by the `lint-javascript-examples` command documented below.

This command is useful when wanting to glob for examples files for a particular package in order to lint all contained examples files.

#### lint-benchmarks

Lints benchmark files.

<!-- run-disable -->

```bash
$ make lint-benchmarks
```

The command supports the environment variables supported by the `lint-javascript-benchmarks` command documented below.

This command is useful when wanting to glob for benchmark files for a particular package in order to lint all contained benchmark files.

* * *

### Configuration Files

#### lint-conf

Lints configuration files.

<!-- run-disable -->

```bash
$ make lint-conf
```

#### lint-conf-codecov

Lints a [Codecov][codecov-yaml] configuration file.

<!-- run-disable -->

```bash
$ make lint-conf-codecov
```

#### lint-conf-travis

Lints a [Travis CI][travis-ci-conf] configuration file

<!-- run-disable -->

```bash
$ make lint-conf-travis
```

* * *

### JavaScript

#### lint-javascript

Lints JavaScript files.

<!-- run-disable -->

```bash
$ make lint-javascript
```

The command supports the environment variables supported by each language-specific (`lint-javascript-<lang>`) command documented below.

This command is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained JavaScript files.

#### lint-javascript-src

Lints JavaScript source files.

<!-- run-disable -->

```bash
$ make lint-javascript-src
```

The command supports the following environment variables:

-   **SOURCES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error

This command is useful when wanting to glob for JavaScript source files (e.g., lint all JavaScript source files for a particular package).

#### lint-javascript-tests

Lints JavaScript test files.

<!-- run-disable -->

```bash
$ make lint-javascript-tests
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error

This command is useful when wanting to glob for JavaScript test files (e.g., lint all JavaScript test files for a particular package).

#### lint-javascript-examples

Lints JavaScript examples files.

<!-- run-disable -->

```bash
$ make lint-javascript-examples
```

The command supports the following environment variables:

-   **EXAMPLES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error

This command is useful when wanting to glob for JavaScript examples files (e.g., lint all JavaScript examples files for a particular package).

#### lint-javascript-benchmarks

Lints JavaScript benchmark files.

<!-- run-disable -->

```bash
$ make lint-javascript-src
```

The command supports the following environment variables:

-   **BENCHMARKS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error

This command is useful when wanting to glob for JavaScript benchmark files (e.g., lint all JavaScript benchmark files for a particular package).

#### lint-javascript-files

Lints a specified list of JavaScript files.

<!-- run-disable -->

```bash
$ make lint-javascript-files FILES='/foo/index.js /bar/index.js'
```

The command supports the following environment variables:

-   **FILES**: list of JavaScript files.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error

This command is useful when wanting to lint a list of JavaScript files generated by some other command (e.g., a list of changed JavaScript files obtained via `git diff`).

</section>

<!-- /.usage -->

<!-- Section to include notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make/

[codecov-yaml]: https://github.com/codecov/support/wiki/Codecov-Yaml

[travis-ci-conf]: https://docs.travis-ci.com/user/customizing-the-build

</section>

<!-- /.links -->
