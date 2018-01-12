# Help

> Help commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for printing help information when using [`make`][make], such as the project [`make`][make] usage text, rules, and more.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### help

Prints a `Makefile` help message, which includes a list of common commands.

```bash
$ make help
```

#### list-rules

Prints a sorted list of `Makefile` rules.

```bash
$ make list-rules
```

The list of rules is **not** exhaustive, as the list does **not** include rules which have not been explicitly declared PHONY targets and does **not** include rules declared via variables.

#### list-stats-rules

Prints a sorted list of `Makefile` rules for computing project statistics.

```bash
$ make list-stats-rules
```

The list of rules is **not** exhaustive, as the list does **not** include rules which have not been explicitly declared PHONY targets and does **not** include rules declared via variables.

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
