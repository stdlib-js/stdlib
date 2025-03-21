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

# Coverage

> Coverage service commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for sending coverage reports to third-party services.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### coverage

Sends coverage statistics to a hosted code coverage service.

<!-- run-disable -->

```bash
$ make coverage
```

The command supports the following environment variables:

-   **COVERAGE_SERVICE**: code coverage service name (e.g., `codecov`).
-   **LCOV_INFO**: path to `lcov.info` file which will be sent to the coverage service.
-   **COVERAGE_NAME**: coverage report name.
-   **CI_SERVICE**: continuous integration (CI) service from which the coverage report originates.

#### coverage-codecov

Sends coverage statistics to [Codecov][codecov].

<!-- run-disable -->

```bash
$ make coverage-codecov
```

The command supports the following environment variables:

-   **LCOV_INFO**: path to `lcov.info` file which will be sent to the coverage service.
-   **COVERAGE_NAME**: coverage report name.
-   **CI_SERVICE**: continuous integration (CI) service from which the coverage report originates.

#### coverage-coveralls

Sends coverage statistics to [Coveralls][coveralls].

<!-- run-disable -->

```bash
$ make coverage-coveralls
```

The command supports the following environment variables:

-   **LCOV_INFO**: path to `lcov.info` file which will be sent to the coverage service.
-   **COVERALLS_REPO_TOKEN**: the secret repository token from [Coveralls][coveralls].
-   **CI_SERVICE**: continuous integration (CI) service from which the coverage report originates.

</section>

<!-- /.usage -->

<!-- Section to include notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make/

[codecov]: https://codecov.io/

[coveralls]: https://coveralls.io/

</section>

<!-- /.links -->
