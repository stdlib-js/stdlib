Makefile
===

> Development utility.

This project uses [`make`][make] as its development utility. For an overview of `make`, see the `make` [manual][make]. 


## Usage

#### Help

To view a list of available `Makefile` targets,

``` bash
$ make help
```

===

#### REPL

To launch a REPL,

``` bash
$ make repl
```

===

#### Notes

Annotating source code is a useful means for inlining action items and notes. For example,

``` javascript
// FIXME: don't release the zalgo!
function foo( cb ) {
    if ( bar ) {
        return async( cb );
    }
    cb();
} 
```

To retrieve source code annotations,

``` bash
$ make notes
```

The following annotations are recognized:

* __TODO__: annotates a future task.
* __FIXME__: annotates a problem.
* __HACK__: annotates fragile/non-general solutions.
* __WARNING__: annotates possible pitfalls or gotchas.
* __OPTIMIZE__: annotates code which needs optimizing.
* __NOTE__: annotates questions, comments, or anything which does not fit under `TODO`/`FIXME`/`HACK`/`WARNING`/`OPTIMIZE` and should be brought to a reader's attention.

===

#### Files

The `Makefile` exposes several targets (also used internally) for finding project files. For example, to list all project files, excluding `node_modules`, `build`, `reports`, and hidden directories,

``` bash
$ make list-files
```

To filter based on a file name or pattern,

``` bash
# List only README.md files...
$ make FILES_PATTERN=README.md list-files
```

To filter based on a file path,

``` bash
# List all files in the is-nan utils directory...
$ make FILES_FILTER=.*/utils/is-nan/.* list-files
```

__Notes__:

* Most filters should begin with `.*/` and end with `/.*`, as a filter is used as a regular expression to test a file path.

* The `*_PATTERN` and `*_FILTER` environment variables map to `-name` and `-regex` options, respectively, for the `find` command. For certain types of operations, like regular expressions using `|` for alternative matches, you may need to use `*_FILTER` over `*_PATTERN`. For instance,

    ``` bash
    # List all `R` test fixtures...
    $ make TESTS_FIXTURES_PATTERN=*.R

    # List all `R` and `Julia` test fixtures...
    $ make TESTS_FIXTURES_FILTER='.*/*\.(jl|R)' list-test-fixtures
    ```

The `Makefile` includes the following common recipes for listing different file types...


##### Sources

To list all source files, excluding examples and tests,

``` bash
$ make list-sources
```

To filter based on a file name or pattern,

``` bash
# List only source files having the filename `index.js`...
$ make SOURCES_PATTERN=index.js list-sources
```

To filter based on a file path,

``` bash
# List only source files found in a math directory...
$ make SOURCES_FILTER=.*/math/.* list-sources
```

##### Tests

To list all test files,

``` bash
$ make list-tests
```

To filter based on a file name or pattern,

``` bash
# List only the main test files...
$ make TESTS_PATTERN=test.js list-tests
```

To filter based on a file path,

``` bash
# List only test files in the fs utils directory...
$ make TESTS_FILTER=.*/utils/fs/.* list-tests
```

##### Test Fixtures

To list all test fixture files,

``` bash
$ make list-tests-fixtures
```

To filter based on a file name or pattern,

``` bash
# List only the Julia test fixtures...
$ make TESTS_FIXTURES_PATTERN=*.jl list-tests-fixtures
```

To filter based on a file path,

``` bash
# List only test fixture files in the base math directory for special functions...
$ make TESTS_FIXTURES_FILTER=.*/math/special/.* list-tests-fixtures
```

##### Examples

To list all examples files,

``` bash
$ make list-examples
```

To filter based on a file name or pattern,

``` bash
# List only those examples having a filename `index.js`...
$ make EXAMPLES_PATTERN=index.js list-examples
```

To filter based on a file path,

``` bash
# List only the example files for special functions in the base math directory...
$ make EXAMPLES_FILTER=.*/math/base/special/.* list-examples
```

##### Modules

To list all modules,

``` bash
$ make list-modules
```

To filter based on a file path,

``` bash
# List only the special function modules in the base math directory...
$ make MODULES_FILTER=.*/math/base/special/.* list-modules
```

===

#### Module Examples

To run module examples,

``` bash
$ make examples
```

To limit which examples are run, use the same environment variables recognized by `list-examples`.

``` bash
# Only run the examples for special functions in the base math directory...
$ make EXAMPLES_FILTER=.*/math/base/special/.* EXAMPLES_PATTERN=index.js examples
```

===

#### Unit Tests

To run unit tests,

``` bash
$ make test
```

To generate a test summary,

``` bash
$ make test-summary
```

To limit which tests are run, use the same environment variables recognized by `list-tests`.

``` bash
# Run only the main test file for base math utils...
$ make TESTS_FILTER=.*/math/base/utils/.* TESTS_PATTERN=test.js test

# Run all blas tests...
$ make TESTS_FILTER=.*/math/base/blas/.*  test-summary
```

#### Test Coverage

To generate a test coverage report,

``` bash
$ make test-cov
```

To limit which tests are run, use the same environment variables recognized by `list-tests`.

``` bash
# Generate a coverage report for base math utils...
$ make TESTS_FILTER=.*/math/base/utils/.* test-cov
```

To view a generated report in a local web browser,

``` bash
$ make view-cov
```

#### Browser Tests

To run browser tests in a (headless) local web browser,

``` bash
$ make test-browsers
```

To run and view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

To limit which tests are run, use the same environment variables recognized by `list-tests`.

``` bash
# Run base math utils tests in a headless local web browser...
$ make TESTS_FILTER=.*/math/base/utils/.* test-browsers

# Run @stdlib utils tests in a local web browser...
$ make TESTS_FILTER=.*/\@stdlib/utils/.* test-view-browsers
```

===

#### Documentation

To generate documentation from [JSDoc][jsdoc] source code comments,

``` bash
$ make docs-src
```

To view the documentation in a local web browser,

``` bash
$ make view-src-docs
```

===

#### Lint

To lint files, including tests, examples, filenames, and Markdown,

``` bash
$ make SOURCES_FILTER=... TESTS_FILTER=... EXAMPLES_FILTER=... MARKDOWN_FILTER=... lint
```

To lint only source files,

``` bash
$ make SOURCES_FILTER=... lint-src
```

To lint only test files,

``` bash
$ make TESTS_FILTER=... lint-tests
``` 

To lint only example files,

``` bash
$ make EXAMPLES_FILTER=... lint-examples
```

To lint only Markdown files,

``` bash
$ make MARKDOWN_FILTER=... lint-markdown
```

To lint only JavaScript files,

``` bash
$ make SOURCES_FILTER=... TESTS_FILTER=... EXAMPLES_FILTER=... lint-javascript
```

===

#### Dependencies

To check whether dependencies are up-to-date,

``` bash
$ make check-deps
```


<!-- <links> -->
[make]: https://www.gnu.org/software/make/manual/make.html#Introduction
[jsdoc]: http://usejsdoc.org/
<!-- </links> -->

