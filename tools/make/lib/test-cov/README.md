<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# Test Coverage

> Test coverage commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for running project unit tests and generating test coverage reports.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### test-cov

Runs unit tests and generates a test coverage report.

<!-- run-disable -->

```bash
$ make test-cov
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-cov TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### view-cov

Opens an HTML test coverage report in a local web browser.

<!-- run-disable -->

```bash
$ make view-cov
```

#### clean-cov

Removes coverage artifacts, such as reports and HTML pages.

<!-- run-disable -->

```bash
$ make clean-cov
```

* * *

### JavaScript

#### test-javascript-cov

Runs JavaScript unit tests and generates a test coverage report.

<!-- run-disable -->

```bash
$ make test-javascript-cov
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-javascript-cov TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### view-javascript-cov

Opens an HTML test coverage report in a local web browser.

<!-- run-disable -->

```bash
$ make view-javascript-cov
```

#### clean-javascript-cov

Removes a JavaScript coverage directory (including all coverage artifacts).

<!-- run-disable -->

```bash
$ make clean-javascript-cov
```

</section>

<!-- /.usage -->

<!-- Section to include notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   Commands supporting a `TESTS_FILTER` environment variable are useful when wanting to glob for test files (e.g., run all tests for a particular package).

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make/

</section>

<!-- /.links -->
