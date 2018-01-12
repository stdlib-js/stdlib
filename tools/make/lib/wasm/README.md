# WebAssembly

> WebAssembly commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for managing WebAssembly.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### wasm

Compiles WebAssembly artifacts.

<!-- run-disable -->

```bash
$ make wasm
```

The command supports the following environment variables:

-   **PKGS_WASM_PATTERN**: package pattern; e.g., `**/math/base/special/**/package.json`.

If unable to compile WebAssemby artifacts, the command prints an error message and tries compiling WebAssembly artifacts for the next package.

#### clean-wasm

Removes all compiled and generated WebAssembly files.

<!-- run-disable -->

```bash
$ make clean-wasm
```

The command supports the following environment variables:

-   **PKGS_WASM_PATTERN**: package pattern; e.g., `**/math/base/special/**/package.json`.

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
