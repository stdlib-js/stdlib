<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Contributing FAQs

> Frequently Asked Questions (FAQs) by First-Time Contributors to stdlib.

-   [Introduction](#intro)
-   [As a first-time contributor to stdlib, where should I start?](#first-time-contributor)
-   [How can I set up my development environment to contribute to stdlib?](#setup-dev-environment)
-   [How can I install cppcheck?](#install-cppcheck)
-   [I am seeing different return values in the JavaScript and C implementation for the same implementation.](#js-vs-c-return-values)
-   [What should I do if linting on my commits fails because my headings or lines exceed the maximum permissible length?](#markdown-heading-length)
-   [What should I do if JavaScript linting on my commits fails because my function exceeds the maximum permissible number of parameters?](#max-params)
-   [I have opened a pull request, where can I seek feedback?](#pr-feedback)
-   [I need to generate fixtures for my tests. How can I do that, and what are the best references for inspiration?](#generate-fixtures)
-   [I am facing a `Shadowed declaration` linting error in my C files, how can I fix it?](#shadowed-declaration)
-   [I am facing a `Uninitialized variable` linting error in my C files, how can I fix it?](#uninitialized-variable)
-   [I have the required packages in the expected paths, but I am still encountering an error like this while compiling the native add-on.](#compilation-error)
-   [When should I use decimals in examples, benchmarks, and documentation, and when should I avoid them?](#decimal-usage)
-   [How should I name my pull request?](#pr-naming)
-   [How do I call the stdlib bot on my PR?](#stdlib-bot)
-   [Why were many unrelated files automatically pushed to my PR when I committed my changes?](#auto-push)
-   [Frequently used `make` commands](#freq-make-commands)
-   [Other Links](#other-links)

<!-- lint disable no-heading-punctuation -->

<a name="intro"></a>

## Introduction

We appreciate your interest in contributing to stdlib! Below, we've compiled answers to some frequently asked questions (FAQs) from first-time contributors. If you're new to the project or encounter any challenges, this guide is a great place to start.

<a name="first-time-contributor"></a>

## As a first-time contributor to stdlib, where should I start?

We recommend first familiarizing yourself with the stdlib codebase by reading the [contributing][contributing-guide] and [development][development-guide] guides. Once comfortable, you can start by working on a [good first issue][good-first-issues], fixing a bug, or resolving a TODO in the source code.

<a name="setup-dev-environment"></a>

## How can I set up my development environment to contribute to stdlib?

There are primarily two options for setting up your development environment to contribute to stdlib:

1. [Manually setting up the development environment][manual-setup]
2. [Setting up the dev container][devcontainer-setup]

Note: The dev container does not yet support ARM64 architectures. For more information, or if you're interested in adding ARM64 support, you can visit this [issue][devcontainer-issue].

<a name="install-cppcheck"></a>

## How can I install cppcheck?

We use `cppcheck` in our project to perform linting on C/C++ code. To install `cppcheck` according to our project conventions, follow the specified installation step.

```bash
$ make deps-install-cppcheck
```

For more installation commands, visit this [link][install-link].

<a name="js-vs-c-return-values"></a>

## I am seeing different return values in the JavaScript and C implementation for the same implementation.

First, verify that your implementation is truly the same and does not contain any bugs. Second, check whether your compiler is performing optimizations that may affect accuracy. A common optimization is rearranging terms. To check this, compile the add-on while disabling the optimization:

```sh
CFLAGS="-ffp-contract=off" make install-node-addons NODE_ADDONS_PATTERN="math/base/special/foo"
```

Then, run the tests:

```sh
make test TESTS_FILTER=".*/math/base/special/foo/.*"
```

If they pass, adjust the tolerance and add a note to the C tests indicating that the tolerance is higher compared to the JavaScript implementation due to compiler optimizations. If they fail, raise an issue with the maintainers to get feedback.

- [Reference Discussion][ref-discussion]
- [Reference Comment][ref-comment]

<a name="markdown-heading-length"></a>

## What should I do if linting on my commits fails because my headings or lines exceed the maximum permissible length?

Consider whether the heading/line can be shortened by renaming variables (e.g., changing `strideX` to `sx`). If shortening is not possible, disable the lint rule at the top level using:

- For JavaScript files:

```javascript
// eslint-disable-line max-len
```

[Reference Comment][javascript-len-ref]

- For Markdown files:

```markdown
<!-- lint disable maximum-heading-length -->
```

[Reference Comment][markdown-len-ref]

<a name="markdown-heading-length"></a>

## What should I do if JavaScript linting on my commits fails because my function exceeds the maximum permissible number of parameters?

Consider whether the number of parameters can be reduced. If reduction is not possible, disable the lint rule at the top level using:

```javascript
// eslint-disable-line max-params
```

[Reference Comment][javascript-params-ref]

<a name="pr-feedback"></a>

## I have opened a pull request, where can I seek feedback?

Consider joining our [Gitter channel][stdlib-gitter]! We are proud to have a very active community where members help each other by asking and answering questions. A maintainer will review your pull request soon and provide feedback. You can also discuss it during our [weekly office hours meeting][stdlib-office-hours]!

<a name="generate-fixtures"></a>

## I need to generate fixtures for my tests. How can I do that, and what are the best references for inspiration?

Tests are a crucial part of any standard library package. We take our goal of achieving 100% test coverage very seriously and expect your work to be backed by tests. Often, you may need to generate fixtures to validate your implementation against an existing reliable source. You can use Julia, R, Python, or other languages to generate fixtures. To see how we do this, refer to these example scripts: [Python fixture script][python-fixtures], [Julia fixture script][julia-fixtures].

<a name="shadowed-declaration"></a>

## I am facing a `Shadowed declaration` linting error in my C files, how can I fix it?

```bash
STDLIB_MATH_BASE_NAPI_MODULE_FF_F( stdlib_base_gcdf ) ^
/home/runner/work/stdlib/stdlib/lib/node_modules/@stdlib/math/base/special/gcdf/include/stdlib/math/base/special/gcdf.h:32:7:
note: Shadowed declaration float stdlib_base_gcdf( const float a, const float b );
```

You can suppress that warning by adding a `// cppcheck-suppress shadowFunction` comment above the function. For example:

```c
// cppcheck-suppress shadowFunction
STDLIB_MATH_BASE_NAPI_MODULE_FF_F( stdlib_base_gcdf )
```

<a name="uninitialized-variable"></a>

## I am facing a `Uninitialized variable` linting error in my C files, how can I fix it?

```bash
lib/node_modules/@stdlib/stats/base/dmeanvarpn/benchmark/c/benchmark.length.c:112:38: warning: Uninitialized variable: x [uninitvar]
  stdlib_strided_dmeanvarpn( len, 1, x, 1, out, 1 );
                                     ^
lib/node_modules/@stdlib/stats/base/dmeanvarpn/benchmark/c/benchmark.length.c:104:17: note: Assuming condition is false
 for ( i = 0; i < len; i++ ) {
                   ^
lib/node_modules/@stdlib/stats/base/dmeanvarpn/benchmark/c/benchmark.length.c:112:38: note: Uninitialized variable: x
  stdlib_strided_dmeanvarpn( len, 1, x, 1, out, 1 );
```
You can suppress that warning by adding a `// cppcheck-suppress uninitvar` comment above the function. For example:

```c
// cppcheck-suppress uninitvar
stdlib_strided_dmeanvarpn( len, 1, x, 1, out, 1 );
```

<a name="compilation-error"></a>

## I have the required packages in the expected paths, but I am still encountering an error like this while compiling the native add-on.

![image](https://github.com/user-attachments/assets/6cb40866-c33b-4878-ab20-126472a56b63)

In packages involving C implementations, you need a `manifest.json` file to inform [node-gyp][node-gyp] about the dependencies required for specific tasks. You should include only the necessary dependencies for compiling, benchmarking, and running examples. For example:

```json
{
  // Other sections above....

  "confs": [
    {
      "task": "build",
      "src": [
        "./src/main.c"
      ],
      "include": [
        "./include"
      ],
      "libraries": [],
      "libpath": [],
      "dependencies": [
        "@stdlib/math/base/napi/unary",
        "@stdlib/math/base/assert/is-nanf",
        "@stdlib/constants/float32/pinf"
      ]
    },
    {
      "task": "benchmark",
      "src": [
        "./src/main.c"
      ],
      "include": [
        "./include"
      ],
      "libraries": [],
      "libpath": [],
      "dependencies": [
        "@stdlib/math/base/assert/is-nanf",
        "@stdlib/constants/float32/pinf"
      ]
    },
    {
      "task": "examples",
      "src": [
        "./src/main.c"
      ],
      "include": [
        "./include"
      ],
      "libraries": [],
      "libpath": [],
      "dependencies": [
        "@stdlib/math/base/assert/is-nanf",
        "@stdlib/constants/float32/pinf"
      ]
    }
  ]
}
```

This `config` specifies that we need to include `@stdlib/math/base/napi/unary`, `@stdlib/math/base/assert/is-nanf`, and `@stdlib/constants/float32/pinf` for compiling the native add-on, while `@stdlib/math/base/assert/is-nanf` and `@stdlib/constants/float32/pinf` are required for running benchmarks and examples.

<a name="decimal-usage"></a>

## When should I use decimals in examples, benchmarks, and documentation, and when should I avoid them?

Decimals help us differentiate floating-point values from integers. For instance, in JavaScript, all numbers are treated as floating-point values, but it is still important to distinguish between integers and floating-point numbers for clarity. Consider the following C function:

```c
double stdlib_strided_dnanvariancetk( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX );
```

When calling this function in JavaScript, we expect the following usage:

```javascript
var dnanvariancetk = require( '@stdlib/stats/base/dnanvariancetk' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

// Use decimals for floating-point values, not for integers.
var v = dnanvariancetk( 4, 1.0, x, 1 );
```

Notice that we used `1.0` as the second argument because it is a double-precision floating-point number. However, we did not use a decimal point for the first and fourth arguments, as they represent integers.

<a name="pr-naming"></a>

## How should I name my pull request?

The best strategy is to go through other relevant PRs and follow their naming conventions. If not, use a concise and descriptive title that clearly conveys the purpose of your changes and follows the PR naming guidelines.

TODO: Can we add a link to the PR naming guidelines here?

<a name="stdlib-bot"></a>

## How do I call the stdlib bot on my PR?

Once you have created your PR, you can call the **stdlib-bot** to perform basic operations such as fixing lint errors, updating copyright years, or merging changes from the `develop` branch into your PR. Some commonly used commands:

- `/stdlib update-copyright-years` - Updates copyright header years.
- `/stdlib lint-autofix` - Auto-fixes lint errors.

To see other available bot commands, comment `/stdlib help` on your PR.

<a name="auto-push"></a>

## Why were many unrelated files automatically pushed to my PR when I committed my changes?

When you open a pull request or push changes to your feature branch, GitHub compares your feature branch against your `develop` branch and shows all the differences. If your feature branch contains outdated or extra changes, they will appear in the PR, even if they are unrelated to your work.

To fix this, ensure that your feature branch is based on the latest `develop` branch. You can do this by updating your local `develop` branch and then merging it into your feature branch:

```bash
$ git checkout develop
$ git pull upstream develop
$ git push origin develop
$ git checkout feature-branch
$ git merge develop
```

After merging, push your changes to the remote repository:

```bash
$ git push origin feature-branch # git push also works
```

> **Note**: When developing stdlib, we recommend using `merge` instead of `rebase` once a PR is open. Rebasing rewrites your branch history, which usually requires a force-push to update the remote branch. This can disrupt other contributors who are reviewing or collaborating on your PR. Since stdlib uses squash and merge for PRs, we don't require a clean, linear commit history. Merge commits are acceptable as long as your diff only contains relevant changes. If you want to learn more about rebasing/merging, you can refer to our [Git guide][git-guide].

Alternatively, you can call the **stdlib-bot** to merge changes from the `develop` branch into your PR. To do this, comment `/stdlib merge` on your PR.

<a name="freq-make-commands"></a>

## Frequently used `make` commands

We use [`GNU Make`][make] as our development utility and task runner for tasks such as generating fixtures, compiling native add-ons, running tests, examples, and benchmarks. Some of the most frequently used `make` commands that you will need in your workflow are:

### 1. Install all dependencies

```bash
$ make install
```

### 2. Initialize development environment

```bash
$ make init
```

### 3. Compile native addon

```bash
$ make install-node-addons NODE_ADDONS_PATTERN="math/base/special/abs"
```

### 4. Generate Test Fixtures

- **Julia**
```bash
$ make test-fixtures-julia TESTS_FIXTURES_FILTER=".*/path/to/package/.*"
```

- **Python**
```bash
$ make test-fixtures-python TESTS_FIXTURES_FILTER=".*/path/to/package/.*"
```

For more `make` commands, refer to the test fixtures [documentation][test-fixtures].

### 5. Run the tests

```bash
$ make TESTS_FILTER=".*/math/base/special/abs/.*" test
```

### 6. Run examples

```bash
$ make EXAMPLES_FILTER=".*/math/base/special/abs/.*" examples
```

For more `make` commands, refer to the [documentation][examples] on running examples.

### 7. Run benchmarks

```bash
$ make BENCHMARKS_FILTER=".*/math/base/special/abs/.*" benchmark
```

For more `make` commands, refer to the [documentation][benchmark] on running benchmarks.

<a name="other-links"></a>

## Other Links:

- [Style Guide][style-guide]
- [Git Cheatsheet][git-guide]
- [Other make commands][make-commands]

<section class="links">

[git]: http://git-scm.com/

[docker]: https://www.docker.com/

[vscode]: https://code.visualstudio.com/

[github-fork]: https://help.github.com/articles/fork-a-repo/

[git-guide]: https://github.com/stdlib-js/stdlib/blob/develop/docs/contributing/git_cheatsheet.md#integration

[development-guide]: https://github.com/stdlib-js/stdlib/blob/develop/docs/contributing/development.md

[contributing-guide]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[good-first-issues]: https://github.com/stdlib-js/stdlib/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Good%20First%20Issue%22

[manual-setup]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md#step-0-github

[devcontainer-setup]: https://github.com/stdlib-js/stdlib/blob/87cbd67623892f90ddeea94e1d4e01eeada417b5/docs/devcontainer_setup.md

[devcontainer-issue]: https://github.com/stdlib-js/stdlib/issues/4934

[install-link]: https://github.com/stdlib-js/stdlib/tree/develop/tools/make/lib/install#install

[ref-discussion]: https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205

[ref-comment]: https://github.com/stdlib-js/stdlib/blob/1f9cb760e3345cc7e08320a11f6a051873ef3586/lib/node_modules/%40stdlib/math/base/special/spence/test/test.native.js#L90

[python-fixtures]: https://github.com/stdlib-js/stdlib/blob/develop/lib/node_modules/%40stdlib/math/base/special/hyp2f1/test/fixtures/python/runner.py

[julia-fixtures]: https://github.com/stdlib-js/stdlib/blob/develop/lib/node_modules/%40stdlib/math/base/special/acosdf/test/fixtures/julia/runner.jl

[test-fixtures]: https://github.com/stdlib-js/stdlib/tree/develop/tools/make/lib/test-fixtures

[examples]: https://github.com/stdlib-js/stdlib/tree/develop/tools/make/lib/examples

[benchmark]: https://github.com/stdlib-js/stdlib/tree/develop/tools/make/lib/benchmark

[make]: https://www.gnu.org/software/make/

[node-gyp]: https://github.com/nodejs/node-gyp

[stdlib-gitter]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib-office-hours]: https://github.com/stdlib-js/meetings/issues

[style-guide]: https://github.com/stdlib-js/stdlib/tree/develop/docs/style-guides

[make-commands]: https://github.com/stdlib-js/stdlib/tree/develop/tools/make/lib

[markdown-len-ref]: https://github.com/stdlib-js/stdlib/blob/78e0cfd8b6c0429a443b07fd39fa9dd53bf44d23/lib/node_modules/%40stdlib/lapack/base/dgttrf/README.md?plain=1#L94

[javascript-len-ref]: https://github.com/stdlib-js/stdlib/blob/78e0cfd8b6c0429a443b07fd39fa9dd53bf44d23/lib/node_modules/%40stdlib/lapack/base/dgttrf/lib/base.js#L111

[javascript-params-ref]: https://github.com/stdlib-js/stdlib/blob/78e0cfd8b6c0429a443b07fd39fa9dd53bf44d23/lib/node_modules/%40stdlib/lapack/base/dgttrf/lib/base.js#L75

</section>

<!-- /.links -->
