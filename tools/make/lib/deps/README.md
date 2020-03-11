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

# deps

> Commands for managing external libraries.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for installing, removing, and managing the project's external library dependencies.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### Boost

##### install-deps-boost

Installs [Boost][boost].

```bash
$ make install-deps-boost
```

##### clean-deps-boost

Removes an installed [Boost][boost] distribution.

```bash
$ make clean-deps-boost
```

##### clean-deps-boost-tests

Removes compiled [Boost][boost] installation tests.

```bash
$ make clean-deps-boost-tests
```

* * *

#### Cephes

##### install-deps-cephes

Installs [Cephes][cephes].

```bash
$ make install-deps-cephes
```

##### clean-deps-cephes

Removes an installed [Cephes][cephes] distribution.

```bash
$ make clean-deps-cephes
```

##### clean-deps-cephes-tests

Removes compiled [Cephes][cephes] installation tests.

```bash
$ make clean-deps-cephes-tests
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

[boost]: http://www.boost.org/

[cephes]: http://www.moshier.net/#Cephes

</section>

<!-- /.links -->
