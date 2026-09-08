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

-   **PKGS_WASM_PATTERN**: package pattern; e.g., `blas/base/daxpy-wasm`.
-   **SIMD_BACKEND**: optional SIMD backend for supported packages; `highway` or empty (default).

Highway builds require WebAssembly SIMD support and do not automatically fall back to a scalar module. Clean the affected package before rebuilding with different compiler flags.

Backend-specific source files and preprocessor definitions belong in the kernel's library manifest. Declare a `defines` field, with `resolve` and `relative` set to `false`, in each manifest along the dependency chain. The build script passes the resolved definitions to supporting package Makefiles through `DEFINES`; consumers do not need to name their dependencies' backend macros.

If unable to compile WebAssemby artifacts, the command prints an error message and tries compiling WebAssembly artifacts for the next package.

#### clean-wasm

Removes all compiled and generated WebAssembly files.

<!-- run-disable -->

```bash
$ make clean-wasm
```

The command supports the following environment variables:

-   **PKGS_WASM_PATTERN**: package pattern; e.g., `blas/base/daxpy-wasm`.

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
