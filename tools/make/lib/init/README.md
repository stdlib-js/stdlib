# init

> Initialization commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for initializing the project developer environment (e.g., add [Git][git] hooks, installing custom ESLint plugins, etc).

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

> This command should **always** be invoked in order to ensure the project development is properly initialized. Failure to do so will result in the failure of various development aids, including linting, task runners, and more.

Performs development initialization tasks.

```bash
$ make init
```

* * *

### ESLint

#### init-stdlib-custom-eslint-rules-plugin

Initializes custom [ESLint][eslint] rules.

```bash
$ make init-stdlib-custom-eslint-rules-plugin
```

#### init-stdlib-custom-eslint-plugins

Initializes custom [ESLint][eslint] plugins.

```bash
$ make init-stdlib-custom-eslint-plugins
```

#### clean-stdlib-custom-eslint-rules-plugin

Removes custom [ESLint][eslint] rules.

```bash
$ make clean-stdlib-custom-eslint-rules-plugin
```

#### clean-stdlib-custom-eslint-plugins

Removes custom [ESLint][eslint] plugins.

```bash
$ make clean-stdlib-custom-eslint-plugins
```

* * *

### Git

#### init-git-hooks

> [Git hooks][git-hooks] are triggered before or after specific [Git][git] events, such as committing, pulling, and pushing. These triggers are important in facilitating development, as they automate linting, test running, and more.

Installs [Git hooks][git-hooks].

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

[eslint]: http://eslint.org/

</section>

<!-- /.links -->
