# Debug

> Debug commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for helping debug the [`make`][make] environment and project rules (e.g., printing the values of environment variables, etc.).

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### inspect.<variable>

Prints the runtime value of a `Makefile` variable.

```bash
$ make inspect.CC
```

```bash
$ make inspect.ROOT_DIR
```

#### assert.<variable>

Asserts that a `Makefile` variable is set.

```bash
$ make assert.CXX
```

If a variable is **not** set, the command exits with a non-zero exit code.

#### list-variables

Prints a sorted list of `Makefile` variable names.

```bash
$ make list-variables
```

To remove duplicates, pipe to `uniq`. Note that the list of variables is **not** exhaustive, as the list does **not** include built-in variables.

</section>

<!-- /.usage -->

<!-- Section to include notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make/

</section>

<!-- /.links -->
