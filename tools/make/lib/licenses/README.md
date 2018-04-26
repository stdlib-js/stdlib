# Licenses

> License commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for managing project licenses, including those of its dependencies.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### check-licenses

Checks the license for each package dependency against a list of permitted licenses.

<!-- run-disable -->

```bash
$ make check-licenses
```

#### check-licenses-production

Checks the license for each "production" (i.e., non-development) package dependency against a list of permitted licenses.

<!-- run-disable -->

```bash
$ make check-licenses-production
```

#### remove-license-headers

Removes file license headers.

<!-- run-disable -->

```bash
$ make remove-license-headers
```

The command supports the following environment variables:

-   **FILES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FILES_PATTERN**: filename pattern; e.g., `*.js`.

#### insert-license-headers

Inserts file license headers.

<!-- run-disable -->

```bash
$ make insert-license-headers
```

The command supports the following environment variables:

-   **FILES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FILES_PATTERN**: filename pattern; e.g., `*.js`.

#### update-license-headers

Updates file license headers.

<!-- run-disable -->

```bash
$ make update-license-headers
```

The command supports the following environment variables:

-   **FILES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FILES_PATTERN**: filename pattern; e.g., `*.js`.

#### list-licenses

Lists the license for each package dependency in the package dependency tree.

<!-- run-disable -->

```bash
$ make list-licenses
```

#### list-licenses-group

Groups the licenses of package dependencies by license type.

<!-- run-disable -->

```bash
$ make list-licenses-group
```

#### list-deps-licenses

Lists the license for each **root** package dependency.

<!-- run-disable -->

```bash
$ make list-deps-licenses
```

#### list-missing-licenses

Lists package dependencies missing license information.

<!-- run-disable -->

```bash
$ make list-missing-licenses
```

#### list-ambiguous-licenses

Lists package dependencies having ambiguous license information (e.g., conflicting or unknown licenses).

<!-- run-disable -->

```bash
$ make list-ambiguous-licenses
```

#### list-excluded-licenses

Lists package dependencies having excluded license information (as determined by a license whitelist).

<!-- run-disable -->

```bash
$ make list-excluded-licenses
```

#### list-licenses-summary

Prints a summary of package dependency license information.

<!-- run-disable -->

```bash
$ make list-licenses-summary
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

</section>

<!-- /.links -->
