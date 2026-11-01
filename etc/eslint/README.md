<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

-   Run `make lint-json lint-yaml` to lint project JSON files, GitHub YAML configuration, and `.codecov.yml`. Both targets are included in `make lint`; use `AUTOFIX=true` to apply supported fixes.
-   JSON must use strict JSON syntax. The configuration enforces two-space indentation, except for tab-indented `cli_opts.json`, and the canonical root key order for `package.json`.
-   JSON test fixtures and imported or generated files under `data/` are excluded. Test fixtures can intentionally contain invalid documents; data files retain their source formats. Build output and external dependencies use the shared ESLint ignores.
-   YAML files require the stdlib Apache-2.0 header, including a four-digit copyright year and `The Stdlib Authors.`. Empty mapping values are allowed in GitHub Actions workflows to support event declarations such as `workflow_dispatch:`.
-   Run `NODE_PATH=./lib/node_modules node etc/eslint/test/test.js` for configuration regression tests and `node lib/node_modules/@stdlib/_tools/eslint/rules/yaml-license-header/test/test.js` for license-rule tests. CI runs both suites and the complete JSON/YAML lint targets.

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[eslint]: https://eslint.org/

</section>

<!-- /.links -->
