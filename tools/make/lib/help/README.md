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

# Help

> Help commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for printing help information when using [`make`][make], such as the project [`make`][make] usage text, rules, and more.

This directory also contains [`make`][make] rules for helping debug the [`make`][make] environment and project rules (e.g., printing the values of environment variables, etc.).

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

#### list-variables

Prints a sorted list of `Makefile` variable names.

```bash
$ make list-variables
```

To remove duplicates, pipe to `uniq`. Note that the list of variables is **not** exhaustive, as the list does **not** include built-in variables.

* * *

### Debug

#### inspect.&lt;variable&gt;

Prints the runtime value of a `Makefile` variable.

```bash
$ make inspect.CC
```

```bash
$ make inspect.ROOT_DIR
```

#### assert.&lt;variable&gt;

Asserts that a `Makefile` variable is set.

```bash
$ make assert.CXX
```

If a variable is **not** set, the command exits with a non-zero exit code.

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
