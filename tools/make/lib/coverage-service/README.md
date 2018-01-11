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
