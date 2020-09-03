<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Makefile

> Development utility.

This project uses [`make`][make] as its development utility. For an overview of `make`, see the `make` [manual][make]. 

## Usage

#### Help

To view a list of available `Makefile` targets,

```bash
$ make help
```

* * *

#### REPL

To launch a REPL,

```bash
$ make repl
```

* * *

#### Notes

Annotating source code is a useful means for inlining action items and notes. For example,

<!-- eslint-disable no-warning-comments -->

```javascript
// FIXME: don't release the zalgo!
function foo( cb ) {
    if ( bar ) {
        return asyncFcn( cb );
    }
    cb();
}
```

To retrieve source code annotations,

```bash
$ make notes
```

The following annotations are recognized:

-   **TODO**: annotates a future task.
-   **FIXME**: annotates a problem.
-   **HACK**: annotates fragile/non-general solutions.
-   **WARNING**: annotates possible pitfalls or gotchas.
-   **OPTIMIZE**: annotates code which needs optimizing.
-   **NOTE**: annotates questions, comments, or anything which does not fit under `TODO`/`FIXME`/`HACK`/`WARNING`/`OPTIMIZE` and should be brought to a reader's attention.

* * *

#### Files

The `Makefile` exposes several targets (also used internally) for finding project files. For example, to list all project files, excluding `node_modules`, `build`, `reports`, and hidden directories,

```bash
$ make list-files
```

To filter based on a file name or pattern,

```bash
# List only README.md files...
$ make FILES_PATTERN=README.md list-files
```

To filter based on a file path,

```bash
# List all files in the is-nan utils directory...
$ make FILES_FILTER=".*/assert/is-nan/.*" list-files
```

**Notes**:

-   Most filters should begin with `.*/` and end with `/.*`, as a filter is used as a regular expression to test a file path.

-   The `*_PATTERN` and `*_FILTER` environment variables map to `-name` and `-regex` options, respectively, for the `find` command. For certain types of operations, like regular expressions using `|` for alternative matches, you may need to use `*_FILTER` over `*_PATTERN`. For instance,

    ```bash
    # List all `R` test fixtures...
    $ make TESTS_FIXTURES_PATTERN=*.R

    # List all `R` and `Julia` test fixtures...
    $ make TESTS_FIXTURES_FILTER='.*/*\.(jl|R)' list-test-fixtures
    ```

The `Makefile` includes the following common recipes for listing different file types...

##### Sources

To list all source files, excluding examples, benchmarks, and tests,

```bash
$ make list-sources
```

To filter based on a file name or pattern,

```bash
# List only source files having the filename `index.js`...
$ make SOURCES_PATTERN=index.js list-sources
```

To filter based on a file path,

```bash
# List only source files found in a math directory...
$ make SOURCES_FILTER=".*/math/.*" list-sources
```

##### Tests

To list all test files,

```bash
$ make list-tests
```

To filter based on a file name or pattern,

```bash
# List only the main test files...
$ make TESTS_PATTERN=test.js list-tests
```

To filter based on a file path,

```bash
# List only test files in the fs directory...
$ make TESTS_FILTER=".*/fs/.*" list-tests
```

##### Test Fixtures

To list all test fixture files,

```bash
$ make list-tests-fixtures
```

To filter based on a file name or pattern,

```bash
# List only the Julia test fixtures...
$ make TESTS_FIXTURES_PATTERN=*.jl list-tests-fixtures
```

To filter based on a file path,

```bash
# List only test fixture files in the base math directory for special functions...
$ make TESTS_FIXTURES_FILTER=".*/math/special/.*" list-tests-fixtures
```

##### Benchmarks

To list all benchmark files,

```bash
$ make list-benchmarks
```

To filter based on a file name or pattern,

```bash
# List only the main benchmark files...
$ make BENCHMARKS_PATTERN=benchmark.js list-benchmarks
```

To filter based on a file path,

```bash
# List only benchmark files for base special math functions...
$ make BENCHMARKS_FILTER=".*/math/base/special/.*" list-benchmarks
```

##### Examples

To list all examples files,

```bash
$ make list-examples
```

To filter based on a file name or pattern,

```bash
# List only those examples having a filename `index.js`...
$ make EXAMPLES_PATTERN=index.js list-examples
```

To filter based on a file path,

```bash
# List only the example files for special functions in the base math directory...
$ make EXAMPLES_FILTER=".*/math/base/special/.*" list-examples
```

##### Packages

To list all packages (as absolute paths),

```bash
$ make list-pkgs
```

To filter based on a file path,

```bash
# List only the special function packages in the base math directory...
$ make PACKAGES_FILTER=".*/math/base/special/.*" list-pkgs
```

To list all package names under the `@stdlib` scope,

```bash
$ make list-pkgs-names
```

To list all package names under a `@stdlib` descendant directory,

```bash
$ make SRC_DIR=./@stdlib/math/base list-pkgs-names
```

* * *

#### Package Examples

To run package examples,

```bash
$ make examples
```

To limit which examples are run, use the same environment variables recognized by `list-examples`.

```bash
# Only run the examples for special functions in the base math directory...
$ make EXAMPLES_FILTER=".*/math/base/special/.*" EXAMPLES_PATTERN=index.js examples
```

* * *

#### Unit Tests

To run unit tests,

```bash
$ make test
```

To generate a test summary,

```bash
$ make test-summary
```

To limit which tests are run, use the same environment variables recognized by `list-tests`.

```bash
# Run only the main test file for base math utils...
$ make TESTS_FILTER=".*/math/base/utils/.*" TESTS_PATTERN=test.js test

# Run all blas tests...
$ make TESTS_FILTER=".*/math/base/blas/.*"  test-summary
```

To run unit tests against specific Node.js versions (assuming [`nvm`][nvm] is installed),

```bash
$ make test-node-versions
```

By default, tests are run against supported Node.js versions. To run against alternative versions, set the `NODE_VERSIONS` environment variable.

```bash
$ make NODE_VERSIONS='0.10 4 6' TESTS_FILTER=".*/fs/exists/.*" test-node-versions
```

To run units tests for project tools,

```bash
$ make tools-test
```

To limit which tests are run, use the same environment variables recognized by `list-tests`.

```bash
$ make tools-test TESTS_FILTER=".*/search/.*" TESTS_PATTERN=test.js
```

#### Test Coverage

To generate a test coverage report,

```bash
$ make test-cov
```

To limit which tests are run, use the same environment variables recognized by `list-tests`.

```bash
# Generate a coverage report for base math utils...
$ make TESTS_FILTER=".*/math/base/utils/.*" test-cov
```

To generate a coverage report for project tools,

```bash
$ make tools-test-cov
```

To limit which tests are run, use the same environment variables recognized by `list-tests`.

```bash
$ make tools-test-cov TESTS_FILTER=".*/search/.*" TESTS_PATTERN=test.js
```

To view a generated report in a local web browser,

```bash
$ make view-cov
```

#### Browser Tests

To run browser tests in a (headless) local web browser,

```bash
$ make test-browsers
```

To run and view the tests in a local web browser,

```bash
$ make view-browser-tests
```

To limit which tests are run, use the same environment variables recognized by `list-tests`.

```bash
# Run base math utils tests in a headless local web browser...
$ make TESTS_FILTER=".*/math/base/utils/.*" test-browsers

# Run @stdlib utils tests in a local web browser...
$ make TESTS_FILTER=".*/\@stdlib/utils/.*" test-view-browsers
```

* * *

#### Benchmarks

To run benchmarks,

```bash
$ make benchmark
```

To limit which benchmarks are run, use the same environment variables recognized by `list-benchmarks`.

```bash
# Run only the benchmarks for base special math functions...
$ make BENCHMARKS_FILTER=".*/math/base/special/.*" BENCHMARKS_PATTERN=benchmark.js benchmark
```

* * *

#### Documentation

To generate documentation from [JSDoc][jsdoc] source code comments,

```bash
$ make docs-src
```

To view the documentation in a local web browser,

```bash
$ make view-src-docs
```

* * *

#### Lint

To lint files, including tests, examples, filenames, `package.json`, and Markdown,

```bash
$ make SOURCES_FILTER=... TESTS_FILTER=... EXAMPLES_FILTER=... BENCHMARKS_FILTER=... MARKDOWN_FILTER=... lint
```

To lint only source files,

```bash
$ make SOURCES_FILTER=... lint-src
```

To lint only test files,

```bash
$ make TESTS_FILTER=... lint-tests
```

To lint only example files,

```bash
$ make EXAMPLES_FILTER=... lint-examples
```

To lint only benchmark files,

```bash
$ make BENCHMARKS_FILTER=... lint-benchmarks
```

To lint only Markdown files,

```bash
$ make MARKDOWN_FILTER=... lint-markdown
```

To lint only JavaScript files,

```bash
$ make SOURCES_FILTER=... TESTS_FILTER=... EXAMPLES_FILTER=... BENCHMARKS_FILTER=... lint-javascript
```

To lint filenames,

```bash
$ make lint-filenames
```

To lint `package.json` files,

```bash
$ make lint-pkg-json
```

* * *

#### Complexity

To analyze code complexity,

```bash
$ make SOURCES_FILTER=... TESTS_FILTER=... EXAMPLES_FILTER=... complexity
```

To analyze only source files,

```bash
$ make SOURCES_FILTER=... complexity-src
```

To analyze only test files,

```bash
$ make TESTS_FILTER=... complexity-tests
```

To analyze only example files,

```bash
$ make EXAMPLES_FILTER=... complexity-examples
```

To analyze only benchmark files,

```bash
$ make BENCHMARKS_FILTER=... complexity-benchmarks
```

To analyze only JavaScript files,

```bash
$ make SOURCES_FILTER=... TESTS_FILTER=... EXAMPLES_FILTER=... complexity-javascript
```

* * *

#### Dependencies

To check whether dependencies are up-to-date,

```bash
$ make check-deps
```

To check licenses of installed package dependencies,

```bash
$ make check-licenses
```

* * *

#### Bash Completion

To enable [bash completion][bash-completion] of Makefile targets, add

```text
complete -W "\`find . ! \( -path \"*/node_modules/*\" -prune \) -and \( -name 'Makefile' -o -name '*.mk' \) | xargs grep '^.PHONY: ' | awk '{print $2}'\`" make
```

to your `~/.bash_profile` or `~/.bashrc`. Note that completion is **not** exhaustive, as the above only includes targets which have been **explicitly** declared phony targets

```text
.PHONY: beep-boop
```

and does not include targets declared via variables. Excluded targets could be included by mining the Makefile database `make -qp`, but such inclusion has a performance cost and is unnecessary due to the predominant use of `PHONY`.

<section class="links">

[make]: https://www.gnu.org/software/make/manual/make.html#Introduction

[jsdoc]: http://usejsdoc.org/

[nvm]: https://github.com/creationix/nvm

[bash-completion]: https://www.gnu.org/software/bash/manual/bashref.html#Programmable-Completion

</section>

<!-- /.links -->
