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

# Packages

> A guide for creating a stdlib package.

## Introduction

A _package_ is the core unit of modularity in stdlib. Each package should be capable of being independently consumed and integrated within larger libraries and applications. As such, a package should form a consistent and complete interface having a minimal surface area and a singular focus.

The purpose of this guide is to help you develop and contribute packages to stdlib.

## Structure

Every package in stdlib has, at minimum, the following structure:

```text
benchmark/         benchmarks
docs/              documentation (excluding README)
examples/          examples
lib/               package implementation
test/              tests
package.json       package meta data
README.md          main package documentation
```

Additional folders may include

```text
bin/               command-line interface
etc/               configuration files
src/               source files requiring compilation
scripts/           supporting scripts for building and maintaining a package
```

Additional files may include

```text
datapackage.json   data package meta data
binding.gyp        GYP file for native add-ons
include.gypi       GYP include file
manifest.json      native add-on meta data
```

Which additional folders and files to include depends on the type of package and individual package needs.

### benchmark

[Benchmarks][stdlib-snippets] are intended to measure implementation performance for different conditions and inputs. While benchmarks may attempt to compare performance against reference implementations, their primary purpose is twofold: a) to aid in development by helping inform design decisions and b) to guard against performance regressions caused by future changes.

### docs

The [documentation][stdlib-snippets] folder includes all documentation beside the `README`. This includes REPL help text (**required**), CLI help text, and documentation assets, such as equation SVGs, plots, and other figures.

### examples

[Examples][stdlib-snippets] are intended to showcase package use cases and behavior. The main `index.js` file should more or less match the main example in the `README`. Other example files are free to demonstrate additional behavior, different option combinations, and other methods.

### lib

The [`lib`][stdlib-snippets] folder contains the package implementation. Every `lib` folder should have an `index.js` file, which defines the main package exports, which may be dynamically determined based on the host environment. Typically, the `index.js` does not contain the main implementation, but rather imports the implementation from a separate file (most commonly named `main.js`).

### test

The [`test`][stdlib-snippets] folder contains unit tests. Unit tests should cover **all** package functionality, including input argument validation, option combinations, and behavior under varying conditions. Unit tests are the most critical element of a package, providing the most direct means to verify intended behavior and to protect against future regressions.

## Development

Before developing a stdlib package, take a look around the project, noting the style and organization of documentation, tests, examples, benchmarks, and source implementations. Consistency is highly **prioritized** within stdlib. Thus, the more you are able to match and adhere to project conventions and style, the more likely your contribution will be accepted. While we have done our best to automate linting and style guidelines, such automation is not perfect and cannot adequately capture the inevitable exceptions and nuance to many rules. In short, the more you study existing practice, the better prepared you will be to contribute to stdlib.

To ease initial development, the project includes various [snippets][stdlib-snippets], which contain todo annotations indicating what should be changed within each file. We **recommend** consulting and using the [snippets][stdlib-snippets] **while** developing a package, as the [snippets][stdlib-snippets] will most likely reflect current best practice and conventions and often include hints to aid in development.

Once you are ready to begin creating a new package, we recommend the following order:

1.  **Write the `README`**. README first development helps you identify use cases, clarify intended behavior and edge cases, and refine package scope and intent.
2.  **Create the `package.json`**. The `package.json` file will include the package description, indicate whether the package has a command-line interface (CLI), and include keywords you think will help users identify the project.
3.  **Write examples**. The `README` should include a main example which can be immediately transferred to a main example file. Other examples may explore additional methods, edge cases, and uses.
4.  **Write the implementation**. While some will argue that tests should come before the implementation, our experience is that writing an implementation against the example is nearly as effective and requires less upfront investment when ideas are still being formed. We too often write tests and then write an implementation against those tests, only to realize that the approach is flawed, necessitating two refactorings, rather than one. Accordingly, our general recommendation is README/example driven development, but you are free to pursue the approach which bests suits your tastes and workflow.
5.  **Write benchmarks**. Benchmarks typically require less work than unit tests, but they often help flag potential performance cliffs and a need to rethink a particular approach and implementation. In our experience, writing benchmarks before tests helps minimize the number, and extent, of refactorings.
6.  **Write tests**. Tests are your opportunity to challenge and verify your assumptions and intended behavior. Tests should be thorough and complete and **always** achieve `100%` coverage. Tests should include edge cases and option combinations and confirm that the implementation provides adequate guards against unintended inputs.
7.  **Write the `repl.txt`**. After solidifying an implementation, write the REPL text according to the REPL text [guide][stdlib-repl-text]. The stdlib REPL will use this file to display relevant help information during a REPL session.
8.  **Write TypeScript declarations**. TypeScript declarations assist users who consume stdlib when writing TypeScript. An `index.d.ts` file should contain all declarations relevant to a package. All declarations should be accompanied by a `test.ts` file which tests type expectations (i.e., think of the `test.ts` as a set of unit tests for a package's TypeScript declarations). While JSDoc comments included in the implementation may provide some inspiration for defining TypeScript types, note that the correspondence is not 1-to-1. Be sure to consult other packages to see how JSDoc parameter types map to TypeScript types and vice versa.
9.  **Additional tasks**. Additional tasks may include implementing a command-line interface, ensuring that a command-line interface works as intended, generating equation SVGs, and writing build scripts to support package maintenance (e.g., if a package file needs to be regenerated when a data source updates).

Throughout the development process, you should use the following commands to run tasks:

```bash
$ make EXAMPLES_FILTER=".*/pattern/to/identify/your/package/.*" examples
$ make BENCHMARKS_FILTER=".*/pattern/to/identify/your/package/.*" benchmark
$ make TESTS_FILTER=".*/pattern/to/identify/your/package/.*" test
```

Once a package is complete and tested, you are ready to request that your contribution be reviewed and officially included in stdlib! Hurray! Woot woot!

<section class="links">

[stdlib-snippets]: https://github.com/stdlib-js/stdlib/tree/develop/tools/snippets

[stdlib-repl-text]: https://github.com/stdlib-js/stdlib/tree/develop/docs/repl_text.md

</section>

<!-- /.links -->
