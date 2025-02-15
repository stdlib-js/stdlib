<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# Git

> Git commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for working with Git.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### commit

Provides an interactive prompt for creating a Git commit message in accordance with the project's [Git style guide][stdlib-style-guides-git].

<!-- run-disable -->

```bash
$ make commit
```

#### retry-commit

Retries a previous commit created using `make commit`.

<!-- run-disable -->

```bash
$ make retry-commit
```

This is particularly useful if a commit failed due to lint errors. An example workflow might proceed as follows:

<!-- run-disable -->

```bash
# Stage changed files and attempt to commit the changes:
$ git add . && make commit

# Suppose `make commit` fails due to lint errors, so we resolve the lint errors.

# Stage the changes and re-attempt the commit, without having to re-enter commit info:
$ git add . && make retry-commit
```

#### apply-git-notes

Applies Git notes from the `docs/git-notes` directory to their corresponding commits.

<!-- run-disable -->

```bash
$ make apply-git-notes
```

This is useful for fixing commit messages which contain errors or do not adhere to the project's [Git style guide][stdlib-style-guides-git] and to exclude certain commits from the changelog notes for specific packages.

</section>

<!-- /.usage -->

<!-- Section to include notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make/

[stdlib-style-guides-git]: https://github.com/stdlib-js/stdlib/blob/develop/docs/style-guides/git

</section>

<!-- /.links -->
