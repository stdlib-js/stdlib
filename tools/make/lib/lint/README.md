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

### JavaScript

#### lint-javascript

Lints JavaScript files.

<!-- run-disable -->

```bash
$ make lint-javascript
```

The command supports the environment variables supported by each context-specific (`lint-javascript-<context>`) command documented below.

This command is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained JavaScript files.

#### lint-javascript-src

Lints JavaScript source files.

<!-- run-disable -->

```bash
$ make lint-javascript-src
```

The command supports the following environment variables:

-   **SOURCES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for JavaScript source files (e.g., lint all JavaScript source files for a particular package).

#### lint-javascript-tests

Lints JavaScript test files.

<!-- run-disable -->

```bash
$ make lint-javascript-tests
```

The command supports the following environment variables:

-   **TESTS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for JavaScript test files (e.g., lint all JavaScript test files for a particular package).

#### lint-javascript-examples

Lints JavaScript examples files.

<!-- run-disable -->

```bash
$ make lint-javascript-examples
```

The command supports the following environment variables:

-   **EXAMPLES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for JavaScript examples files (e.g., lint all JavaScript examples files for a particular package).

#### lint-javascript-benchmarks

Lints JavaScript benchmark files.

<!-- run-disable -->

```bash
$ make lint-javascript-src
```

The command supports the following environment variables:

-   **BENCHMARKS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for JavaScript benchmark files (e.g., lint all JavaScript benchmark files for a particular package).

#### lint-javascript-files

Lints a specified list of JavaScript files.

<!-- run-disable -->

```bash
$ make lint-javascript-files FILES='/foo/index.js /bar/index.js'
```

The command supports the following environment variables:

-   **FILES**: list of JavaScript files.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to lint a list of JavaScript files generated by some other command (e.g., a list of changed JavaScript files obtained via `git diff`).

* * *

### Julia

#### lint-julia

Lints Julia files.

<!-- run-disable -->

```bash
$ make lint-julia
```

The command supports the environment variables supported by each context-specific (`lint-julia-<context>`) command documented below.

This command is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained Julia files.

#### lint-julia-src

Lints Julia source files.

<!-- run-disable -->

```bash
$ make lint-julia-src
```

The command supports the following environment variables:

-   **JULIA_SOURCES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for Julia source files (e.g., lint all Julia source files for a particular package).

#### lint-julia-tests-fixtures

Lints Julia test fixture files.

<!-- run-disable -->

```bash
$ make lint-julia-tests-fixtures
```

The command supports the following environment variables:

-   **JULIA_TESTS_FIXTURES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for Julia test fixture files (e.g., lint all Julia test fixture files for a particular package).

#### lint-julia-examples

Lints Julia examples files.

<!-- run-disable -->

```bash
$ make lint-julia-examples
```

The command supports the following environment variables:

-   **JULIA_EXAMPLES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for Julia examples files (e.g., lint all Julia examples files for a particular package).

#### lint-julia-benchmarks

Lints Julia benchmark files.

<!-- run-disable -->

```bash
$ make lint-julia-src
```

The command supports the following environment variables:

-   **JULIA_BENCHMARKS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for Julia benchmark files (e.g., lint all Julia benchmark files for a particular package).

#### lint-julia-files

Lints a specified list of Julia files.

<!-- run-disable -->

```bash
$ make lint-julia-files FILES='/foo/file.jl /bar/file.jl'
```

The command supports the following environment variables:

-   **FILES**: list of Julia files.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to lint a list of Julia files generated by some other command (e.g., a list of changed Julia files obtained via `git diff`).

* * *

### Python

#### lint-python

Lints Python files.

<!-- run-disable -->

```bash
$ make lint-python
```

The command supports the environment variables supported by each context-specific (`lint-python-<context>`) command documented below.

This command is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained Python files.

#### lint-python-src

Lints Python source files.

<!-- run-disable -->

```bash
$ make lint-python-src
```

The command supports the following environment variables:

-   **PYTHON_SOURCES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for Python source files (e.g., lint all Python source files for a particular package).

#### lint-python-tests-fixtures

Lints Python test fixture files.

<!-- run-disable -->

```bash
$ make lint-python-tests-fixtures
```

The command supports the following environment variables:

-   **PYTHON_TESTS_FIXTURES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for Python test fixture files (e.g., lint all Python test fixture files for a particular package).

#### lint-python-examples

Lints Python examples files.

<!-- run-disable -->

```bash
$ make lint-python-examples
```

The command supports the following environment variables:

-   **PYTHON_EXAMPLES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for Python examples files (e.g., lint all Python examples files for a particular package).

#### lint-python-benchmarks

Lints Python benchmark files.

<!-- run-disable -->

```bash
$ make lint-python-src
```

The command supports the following environment variables:

-   **PYTHON_BENCHMARKS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for Python benchmark files (e.g., lint all Python benchmark files for a particular package).

#### lint-python-files

Lints a specified list of Python files.

<!-- run-disable -->

```bash
$ make lint-python-files FILES='/foo/file.py /bar/file.py'
```

The command supports the following environment variables:

-   **FILES**: list of Python files.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to lint a list of Python files generated by some other command (e.g., a list of changed Python files obtained via `git diff`).

* * *

### R

#### lint-r

Lints R files.

<!-- run-disable -->

```bash
$ make lint-r
```

The command supports the environment variables supported by each context-specific (`lint-r-<context>`) command documented below.

This command is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained R files.

#### lint-r-src

Lints R source files.

<!-- run-disable -->

```bash
$ make lint-r-src
```

The command supports the following environment variables:

-   **R_SOURCES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for R source files (e.g., lint all R source files for a particular package).

#### lint-r-tests-fixtures

Lints R test fixture files.

<!-- run-disable -->

```bash
$ make lint-r-tests-fixtures
```

The command supports the following environment variables:

-   **R_TESTS_FIXTURES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for R test fixture files (e.g., lint all R test fixture files for a particular package).

#### lint-r-examples

Lints R examples files.

<!-- run-disable -->

```bash
$ make lint-r-examples
```

The command supports the following environment variables:

-   **R_EXAMPLES_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for R examples files (e.g., lint all R examples files for a particular package).

#### lint-r-benchmarks

Lints R benchmark files.

<!-- run-disable -->

```bash
$ make lint-r-src
```

The command supports the following environment variables:

-   **R_BENCHMARKS_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for R benchmark files (e.g., lint all R benchmark files for a particular package).

#### lint-r-files

Lints a specified list of R files.

<!-- run-disable -->

```bash
$ make lint-r-files FILES='/foo/file.R /bar/file.R'
```

The command supports the following environment variables:

-   **FILES**: list of R files.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to lint a list of R files generated by some other command (e.g., a list of changed R files obtained via `git diff`).

* * *

### Shell

#### lint-shell

Lints shell script files.

<!-- run-disable -->

```bash
$ make lint-shell
```

The command supports the following environment variables:

-   **SHELL_FILTER**: file path pattern; e.g., `.*/_tools/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for shell script files (e.g., lint all shell scripts files in a particular directory).

#### lint-shell-files

Lints a specified list of shell script files.

<!-- run-disable -->

```bash
$ make lint-shell-files FILES='/foo/file.sh /bar/file.sh'
```

The command supports the following environment variables:

-   **FILES**: list of shell script files.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to lint a list of shell script files generated by some other command (e.g., a list of changed shell script files obtained via `git diff`).

* * *

### Markdown

#### lint-markdown

Lints Markdown files.

<!-- run-disable -->

```bash
$ make lint-markdown
```

The command supports the following environment variables:

-   **MARKDOWN_FILTER**: file path pattern; e.g., `.*/blas/base/dasum/.*`.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to glob for Markdown files (e.g., lint all Markdown files for a particular package).

#### lint-markdown-files

Lints a specified list of Markdown files.

<!-- run-disable -->

```bash
$ make lint-markdown-files FILES='/foo/README.md /bar/README.md'
```

The command supports the following environment variables:

-   **FILES**: list of Markdown files.
-   **FAST_FAIL**: flag indicating whether to stop linting upon encountering a lint error.

This command is useful when wanting to lint a list of Markdown files generated by some other command (e.g., a list of changed Markdown files obtained via `git diff`).

* * *

### package.json

#### lint-pkg-json

Lints `package.json` files.

<!-- run-disable -->

```bash
$ make lint-pkg-json
```

* * *

### REPL Help

#### lint-repl-help

Lints REPL help files.

<!-- run-disable -->

```bash
$ make lint-repl-help
```

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

### Filenames

#### lint-filenames

Lints filenames.

<!-- run-disable -->

```bash
$ make lint-filenames
```

#### lint-header-filenames

Lints header filenames.

<!-- run-disable -->

```bash
$ make lint-header-filenames
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

[codecov-yaml]: https://docs.codecov.com/docs/codecovyml-reference

[travis-ci-conf]: https://docs.travis-ci.com/user/customizing-the-build

</section>

<!-- /.links -->
