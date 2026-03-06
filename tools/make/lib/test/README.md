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

# Tests

> Test commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for running project unit tests.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### test

Runs unit tests.

<!-- run-disable -->

```bash
$ make test
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-files

Runs a specified list of files containing unit tests.

<!-- run-disable -->

```bash
$ make test-files FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

#### test-local

Runs unit tests in the local environment.

<!-- run-disable -->

```bash
$ make test-local
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-local TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-files-local

Runs, in the local environment, a specified list of files containing unit tests.

<!-- run-disable -->

```bash
$ make test-files-local FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

#### test-summary

Runs unit tests and summarizes aggregated TAP output.

<!-- run-disable -->

```bash
$ make test-summary
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-summary TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-files-summary

Runs, in the local environment, a specified list of files containing unit tests.

<!-- run-disable -->

```bash
$ make test-files-summary FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

#### test-tap

Runs unit tests and generates raw TAP output.

<!-- run-disable -->

```bash
$ make test-tap
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-tap TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-files-tap

Runs, in the local environment, a specified list of files containing unit tests and generates raw TAP output.

<!-- run-disable -->

```bash
$ make test-files-tap FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

#### test-xunit

Runs unit tests and converts TAP output to xUnit XML.

<!-- run-disable -->

```bash
$ make test-xunit
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-xunit TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-files-xunit

Runs, in the local environment, a specified list of files containing unit tests and converts TAP output to xUnit XML.

<!-- run-disable -->

```bash
$ make test-files-xunit FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

* * *

### JavaScript

#### test-javascript

Runs JavaScript unit tests.

<!-- run-disable -->

```bash
$ make test-javascript
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-javascript TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-javascript-files

Runs a specified list of files containing JavaScript unit tests.

<!-- run-disable -->

```bash
$ make test-javascript-files FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

#### test-javascript-local

Runs JavaScript unit tests in the local environment.

<!-- run-disable -->

```bash
$ make test-javascript-local
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-javascript-local TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-javascript-files-local

Runs, in the local environment, a specified list of files containing JavaScript unit tests.

<!-- run-disable -->

```bash
$ make test-javascript-files-local FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

#### test-javascript-summary

Runs JavaScript unit tests and summarizes aggregated TAP output.

<!-- run-disable -->

```bash
$ make test-javascript-summary
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-javascript-summary TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-javascript-files-summary

Runs, in the local environment, a specified list of files containing JavaScript unit tests.

<!-- run-disable -->

```bash
$ make test-javascript-files-summary FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

#### test-javascript-min

Runs JavaScript unit tests and minimizes aggregated TAP output.

<!-- run-disable -->

```bash
$ make test-javascript-min
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-javascript-min TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-javascript-files-min

Runs, in the local environment, a specified list of files containing JavaScript unit tests and minimizes aggregated TAP output.

<!-- run-disable -->

```bash
$ make test-javascript-files-min FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

#### test-javascript-tap

Runs JavaScript unit tests and generates raw TAP output.

<!-- run-disable -->

```bash
$ make test-javascript-tap
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-javascript-tap TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-javascript-files-tap

Runs, in the local environment, a specified list of files containing JavaScript unit tests and generates raw TAP output.

<!-- run-disable -->

```bash
$ make test-javascript-files-tap FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

#### test-javascript-xunit

Runs JavaScript unit tests and converts TAP output to xUnit XML.

<!-- run-disable -->

```bash
$ make test-javascript-xunit
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

<!-- run-disable -->

```bash
$ make test-javascript-xunit TESTS_FILTER='.*/blas/base/dasum/.*'
```

#### test-javascript-files-xunit

Runs, in the local environment, a specified list of files containing JavaScript unit tests and converts TAP output to xUnit XML.

<!-- run-disable -->

```bash
$ make test-javascript-files-xunit FILES='/foo/test.js /bar/test.js'
```

The command supports the following environment variables:

-   **FILES**: list of test file paths.
-   **FAST_FAIL**: flag indicating whether to stop running tests upon encountering a test failure.

</section>

<!-- /.usage -->

<!-- Section to include notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   Commands supporting a `FILES` environment variable are useful when wanting to run a list of test files generated by some other command (e.g., a list of changed test files obtained via `git diff`).
-   Commands supporting a `TESTS_FILTER` environment variable are useful when wanting to glob for test files (e.g., run all tests for a particular package).
-   For `-local` commands, "local" refers to the local development environment, as opposed to running in a headless browser or on CI.

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make/

</section>

<!-- /.links -->
