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

# init

> Initialization commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for initializing the project development environment (e.g., adding [Git][git] hooks, installing custom ESLint plugins, etc).

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### init

> This command should **always** be invoked in order to ensure the project development environment is properly initialized. Failure to do so will result in the failure of various development aids, including linting, task runners, and more.

Performs development initialization tasks.

<!-- run-disable -->

```bash
$ make init
```

* * *

### ESLint

#### init-eslint-rules-plugin

Initializes custom [ESLint][eslint] rules.

<!-- run-disable -->

```bash
$ make init-eslint-rules-plugin
```

#### init-eslint-plugins

Initializes custom [ESLint][eslint] plugins.

<!-- run-disable -->

```bash
$ make init-eslint-plugins
```

#### clean-eslint-rules-plugin

Removes custom [ESLint][eslint] rules.

<!-- run-disable -->

```bash
$ make clean-eslint-rules-plugin
```

#### clean-eslint-plugins

Removes custom [ESLint][eslint] plugins.

<!-- run-disable -->

```bash
$ make clean-eslint-plugins
```

* * *

### Git

#### init-git-hooks

> [Git hooks][git-hooks] are triggered before or after specific [Git][git] events, such as committing, pulling, and pushing. These triggers are important in facilitating development, as they automate linting, test running, and more.

Installs [Git hooks][git-hooks].

<!-- run-disable -->

```bash
$ make init-git-hooks
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

[git]: https://git-scm.com/

[git-hooks]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

[eslint]: https://eslint.org/

</section>

<!-- /.links -->
