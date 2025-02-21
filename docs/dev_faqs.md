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

> frequently asked questions by first time contributors of stdlib.

<!-- lint disable no-heading-punctuation -->

## Introduction

We appreciate your interest in contributing to stdlib! Below, we’ve compiled answers to some frequently asked questions (FAQs) from first-time contributors. If you’re new to the project or encounter any challenges, this guide is a great place to begin.

## How can I set up my dev environment to contribute to stdlib?

The stdlib repository includes a preconfigured devcontainer, making it the easiest way to set up your development environment. It ensures proper linting, EditorConfig, and tooling are configured right from the start.

### Prerequisites

setting up the stdlib devcontainer **requires** the following prerequisites:


-   [Git][git]: version control
-   [Docker][docker]: containerization
-   [VS Code][vscode]: preferred IDE

### Download

To acquire the source code, first navigate to the parent directory into which you want to place the project [Git][git] repository

<!-- run-disable -->

```bash
$ cd /path/to/parent/destination/directory
```

Next, clone the repository.

<!-- run-disable -->

```bash
$ git clone https://github.com/stdlib-js/stdlib.git
```

If you are wanting to contribute to stdlib, first [fork][github-fork] the repository and amend the previous command.

<!-- run-disable -->

```bash
$ git clone https://github.com/<username>/stdlib.git
```

Open the repo in VS Code.

```bash
$ cd stdlib && code .
```

When prompted, Open the repo in the dev container.

![image](https://github.com/user-attachments/assets/233c08d2-57ec-46c4-8e12-ecb3ca608f83)

Kindly be patient as the post create script may take some time to install all the required languages and dependencies.

![image](https://github.com/user-attachments/assets/8cd011e8-ec41-4216-be1c-d10ce5824928)

Close the terminal and wait for other dependencies to install.

![image](https://github.com/user-attachments/assets/06dbea2a-fb02-446a-a527-2f0626272811)

![image](https://github.com/user-attachments/assets/f7199eb5-f0a4-4fa2-aeba-856279b95c9f)

Close the terminal after the installation is completed.

![image](https://github.com/user-attachments/assets/267cd367-2eff-4d8b-8fb6-721cf5b066e2)

If you see this when you open the terminal then the devcontainer installation was successful!

![image](https://github.com/user-attachments/assets/598259d3-7ce2-4e86-8147-78ba634701a7)

## How can I install cppcheck?

We use `cppcheck` in our project to perform linting on C/C++ code, to install `cppcheck` as per our project conventions

```bash
$ make deps-install-cppcheck
```

## I am seeing different return values in the JavaScript and C implementation for the same implementation.

First, verify that your implementation is actually the same and doesn't contain a bug. Second, check whether your compiler is performing certain optimizations which may affect accuracy. A common optimization is rearranging terms. To check, compile the add-on and disable the optimization. E.g., `CFLAGS="-ffp-contract=on" make install-node-addons NODE_ADDONS_PATTERN="math/base/special/foo"` . Then run the tests. If they succeed, adjust the tolerance and add a note to the C tests indicating that the tolerance is higher relative to the JS implementation due to compiler optimizations. If they fail, raise an issue with maintainers to get feedback.

## What can I do if the Markdown linting on my commits is failing due to my headings exceeding the maximum permissible length?

Consider whether we can make the heading shorter by renaming variables (e.g., `strideX` to `sx`). Second, disable the lint rule at the top-level. E.g., `<!-- lint disable maximum-heading-length -->`.

## I have opened a pull request to stdlib, where can I go to seek feedback on it?

Consider joining our [Gitter channel][stdlib-gitter]! We are very proud to say that we have a very active community where people ask each other for help and others answer each other's questions. One of the maintainers will soon review your pull request and provide feedback. You can also discuss things during our [weekly office hours meeting][stdlib-office-hours]!

## I need to generate fixtures for my tests. How can I do that, and what are the best references to take inspiration from?

Tests are a very important part of any standard library package. We take our goal of achieving 100% test coverage very seriously, and we expect your work to be backed by tests. Often, you may need to generate fixtures to test your implementation against an existing implementation from a reliable source. You can use Julia, R, Python, etc., to generate fixtures. To get an idea of how we do it, see these reference scripts for generating fixtures: [Example python fixture script][python fixtures],  [Example julia fixture script][julia fixtures].

## I am facing a `Shadowed declaration` linting error in my C files, how to get rid of that?

```bash
STDLIB_MATH_BASE_NAPI_MODULE_FF_F( stdlib_base_gcdf ) ^
/home/runner/work/stdlib/stdlib/lib/node_modules/@stdlib/math/base/special/gcdf/include/stdlib/math/base/special/gcdf.h:32:7:
note: Shadowed declaration float stdlib_base_gcdf( const float a, const float b );
```

You can suppress that warning by adding a `// cppcheck-suppress shadowFunction` comment over the function, for eg.

```c
// cppcheck-suppress shadowFunction
STDLIB_MATH_BASE_NAPI_MODULE_FF_F( stdlib_base_gcdf )
```

## I am facing a `Uninitialized variable` linting error in my C files, how to get rid of that?

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
You can suppress that warning by adding a `// cppcheck-suppress uninitvar` comment over the function, for eg.

```c
// cppcheck-suppress uninitvar
stdlib_strided_dmeanvarpn( len, 1, x, 1, out, 1 );
```
## I have the required packages in the expected paths but I'm still facing an error like this while compiling the native addon.

![image](https://github.com/user-attachments/assets/6cb40866-c33b-4878-ab20-126472a56b63)

In packages revolving around C implementations, you need to have a `manifest.json` file which tells [node-gyp][node-gyp] what dependencies to include for specific tasks. you need to include only the required dependencies for compiling, benchmarking and running examples for eg:

```json
{
  "options": {
    "task": "build"
  },
  "fields": [
    {
      "field": "src",
      "resolve": true,
      "relative": true
    },
    {
      "field": "include",
      "resolve": true,
      "relative": true
    },
    {
      "field": "libraries",
      "resolve": false,
      "relative": false
    },
    {
      "field": "libpath",
      "resolve": true,
      "relative": false
    }
  ],
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

This config specifies that we need to include `@stdlib/math/base/napi/unary`, `@stdlib/math/base/assert/is-nanf`, `@stdlib/constants/float32/pinf` for compiling the native addon and `@stdlib/math/base/assert/is-nanf`, `@stdlib/constants/float32/pinf` for running benchmarks and examples

## Frequently used `make` commands

We use [`GNU Make`][make] as our development utility and task runner for things like generating fixtures, compiling native addons, running tests, examples, benchmarks etc. Some of the most frequently used make commands which you will need in your workflow are:

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

### 4. Generate Julia Fixtures

```bash
$ make test-fixtures-julia TESTS_FIXTURES_FILTER=".*/path/to/package/.*"
```

### 5. Run the tests

```bash
$ make TESTS_FILTER=".*/math/base/special/abs/.*" test
```

### 6. Run examples

```bash
$ make EXAMPLES_FILTER=".*/math/base/special/abs/.*" examples
```

### 7. Run benchmarks

```bash
$ make BENCHMARKS_FILTER=".*/math/base/special/abs/.*" benchmark
```

<section class="links">

[git]: http://git-scm.com/

[docker]: https://www.docker.com/

[vscode]: https://code.visualstudio.com/

[github-fork]: https://help.github.com/articles/fork-a-repo/

[python fixtures]: https://github.com/stdlib-js/stdlib/blob/develop/lib/node_modules/%40stdlib/math/base/special/hyp2f1/test/fixtures/python/runner.py

[julia fixtures]: https://github.com/stdlib-js/stdlib/blob/develop/lib/node_modules/%40stdlib/math/base/special/acosdf/test/fixtures/julia/runner.jl

[make]: https://www.gnu.org/software/make/

[node-gyp]: https://github.com/nodejs/node-gyp

[stdlib-gitter]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib-office-hours]: https://github.com/stdlib-js/meetings

</section>

<!-- /.links -->
