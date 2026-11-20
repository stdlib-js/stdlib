<!--

@license Apache-2.0

Copyright (c) 2017 The Stdlib Authors.

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

# ESLint

> [ESLint][eslint] configuration.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [ESLint][eslint] configuration files.

</section>

<!-- /.intro -->

<!-- Section to include notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

-   The repository uses ESLint 10 with the root `eslint.config.js`. File patterns select source, examples, tests, benchmarks, and TypeScript configurations.
-   Lint tooling requires Node.js `^20.19.0`, `^22.13.0`, or `>=24`, including the Node.js runtime used by editor integrations.
-   Run configuration integration tests from the repository root with `make test-javascript-files FILES="etc/eslint/test/test.js"`.
-   Run custom-rule tests with `make tools-test TESTS_FILTER=".*/eslint/rules/.*/test/test.js"`.

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[eslint]: https://eslint.org/

</section>

<!-- /.links -->
