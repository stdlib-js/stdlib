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

# Git Commit Messages

> Guide for writing [Git][git] commit messages.

## Overview

Commits should be clearly documented for how they affect consumers of and contributors to this project. To this end, the project adheres to the [Conventional Commits][conventional-commits] specification, which details structured commit messages for clarifying the impact of each commit.

## Motivation

Contributors to this project should describe the changes they make. Detailed descriptions are valuable to various stakeholders, including other contributors, downstream consumers, library authors, individuals needing to deploy and/or integrate the project, and others. Commit authors are best positioned to accurately describe their work and its implications.

The closer to the change one captures information pertaining to a change's context, motivation, and impact, the easier such information will be to write and the more accurate such information will be. Many individuals consume the changes introduced by contributors, from pull request reviewers to library authors to end consumers of this project. The more a contributor can explain a change, the more readily a change can be understood and used, and the more efficient the development process will be.

Commit messages are the closest text to the change itself. The more information-rich a commit message is, the more useful it will be.

## Specification

This project adheres to the [Conventional Commits][conventional-commits] specification, with additional project-specific requirements. The project has very precise rules over how Git commit messages must be formatted. This format leads to a commit history which is easier to read and easier to consume as part of automated build processes.

Each commit message consists of three parts: a **header**, a **body** (optional), and a **footer** (optional). Each part **must** be separated from the other parts by a **blank line**.

```text
<header>

<body>

<footer>
```

The **header** is **mandatory** and must conform to the [commit message header](#commit-message-header) format.

The **body** is **mandatory** for all non-trivial commits. When present, the body must be at least 20 characters in length and must conform to the [commit message body](#commit-message-body) format.

The **footer** is **optional**. When present, the footer must conform to the [commit message footer](#commit-message-footer) format.

### Commit Message Header

```text
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─▶︎ Summary in imperative mood. Not capitalized. No period at the end.
  │       │
  │       └─▶︎ Commit Scope: noun describing section of the codebase
  │
  └─▶︎ Commit Type: bench|build|chore|deprecate|docs|feat|fix|perf|refactor|remove|revert|style|test|temp
```

The **type** and **short summary** fields are **mandatory**, and the **scope** field is **optional**.

#### type

The **type** field labels a commit and indicates the category of change introduced by a commit. The project uses the following commit types:

-   **bench**: benchmark-only changes, such as adding missing benchmarks or correcting existing benchmarks. This type has lower precedence than other types, and, thus, benchmarks accompanying other types of changes can be categorized according to those other types. 

-   **build**: anything to do with building and releasing the project, including changes to automation and continuous integration configuration files and scripts (e.g., GitHub actions, CircleCI, Azure, etc).

-   **chore**: neither a fix, a feature, nor a refactor; a repetitive mechanical task, such as updating package meta data or updating external dependencies.

-   **deprecate**: a change that deprecates an existing feature. This type correlates with `MINOR` in [Semantic Versioning][semver].

-   **docs**: documentation-only changes. Documentation changes include changes to the following: READMEs, JSDoc/Doxygen-style comments, annotations, source comments, and examples (including examples files). Note that changes to TypeScript declarations files are **not** documentation-only changes, as TypeScript declarations are part of a package's public API and are consumed by downstream project consumers.

-   **feat**: a new feature. This type typically correlates with `MINOR` in [Semantic Versioning][semver]; however, a new feature may introduce a breaking change and thus correlate with `MAJOR` in [Semantic Versioning][semver] (e.g., if an existing user-facing API is completely changed to support new behaviors and existing behaviors are not preserved).

-   **fix**: bug fixes, including changes to the behavior of existing features and including changes that remove or mitigate security vulnerabilities. This type correlates with `PATCH` in [Semantic Versioning][semver].

-   **perf**: a change that improves performance.

-   **refactor**: neither a fix nor a feature; a change that does not change behavior from the perspective of downstream consumers of the project. If refactoring improves performance, **perf** takes higher priority.

-   **remove**: removes a feature. This type correlates with `MAJOR` in [Semantic Versioning][semver].

-   **revert**: a change which undoes a previous change. The **short summary** must include the previous commit message short summary and the type label. For example, if the initial commit is

    ```text
    fix(tools): address race condition when iterating over files
    ```

    the revert commit **header** would be

    ```text
    revert: fix(tools): address race condition when iterating over files
    ```

-   **style**: a change which improves code style (e.g., whitespace, formatting, semicolons, etc) and does not affect the meaning of code.

-   **test**: test-only changes, such as adding missing tests or correcting existing tests. This type has lower precedence than other types, and, thus, tests accompanying other types of changes can be categorized according to those other types. 

-   **temp**: temporary, experimental, or exploratory changes that are not intended to be permanent. Occasionally, one may want to push changes to GitHub that are intended to be short-lived, such as when debugging continuous integration or ad-hoc debugging on live systems.

Breaking changes **must** include an exclamation point as part of the **type**. For example,

```text
feat!: refactor the `cabs` API to support complex number instances
```

Breaking changes correlate with `MAJOR` in [Semantic Versioning][semver].

Contributors should separate commits into consistent logical units (e.g., bug fixes should **not** be combined with new features). Some types of changes may be included in a combined commit, such as a new feature (**feat**) and its associated tests (**test**), benchmarks (**bench**), and documentation (**docs**); however, **refactor**, **style**, **chore**, and **temp** should be kept separate from more significant work.

If a commit mixes types, contributors should use the most important type label in the commit message. The priority order is generally:

1.  **revert**
2.  **feat**
3.  **fix**
4.  **remove**
5.  **deprecate**
6.  **perf**
7.  **docs**
8.  **test**
9.  **bench**
10. **build**
11. **refactor**
12. **style**
13. **chore**
14. **temp**

#### Scope

The [Conventional Commits][conventional-commits] specification includes support for an optional parenthesized scope following the commit type. A contributor may choose to include a scope in order to provide additional contextual information, if doing so helps clarify a commit. If provided, a scope **must** be a noun describing the section of the codebase affected by the commit.

#### Short Summary

The short summary **must** provide a succinct description of a change and adhere to the following conventions:

-   Use the [imperative][imperative-mood], present tense (e.g., "change", not "changed" or "changes").
-   Do **not** capitalize the first letter.
-   Do **not** include a period at the end.
-   Should be less than **72** characters.

A properly formed short summary should complete the following sentence:

```text
If applied, this commit will <short summary>
```

For example, given the commit message header

```text
feat!: refactor the `cabs` API to support complex number instances
```

the short summary completes the following sentence:

```text
If applied, this commit will refactor the `cabs` API to support complex number instances
```

A short summary should be short enough to fit on a single line. While this project does not enforce a hard limit on character length, if a short summary is longer than 72 characters, one should consider moving content to, and including more information in, the commit message body in order to more fully explain the change. In **no** circumstances should the short summary contain references to an external system that is not accessible to all members of the stdlib community (e.g., private repository issue trackers, Slack discussions, etc).

Do **not** include GitHub issue numbers in the short summary. Links to issue trackers should be included in the commit message body or in the commit message footer. In general, the short summary should only contain words.

### Commit Message Body

For significant changes to the codebase, the short summary is unlikely to provide enough information to fully understand the commit. Use the commit message body to more fully explain the motivation for the change and include comparisons of previous behavior with new behavior in order to illustrate the impact of the change. The commit message body should explain the _what_ and _why_, and not the _how_.

```text
# Do not...
docs: change Markdown heading style

Update various Markdown files to stop lint errors. Change the heading
style from `===` to `#`.
```

```text
# Do...
docs: change Markdown heading style

Change the heading style to ensure consistency with `remark` output.
This ensures that all Markdown files are all of the same style, thus
reducing the number of edge cases Markdown parsers need to consider.
```

The project does **not** enforce a hard limit on commit message body character length. Be generous. Including two paragraphs of explanation is not unreasonable. When writing the commit message body, a contributor should take a moment to consider what information she would want to know if someone else had authored the commit. The more information, the better.

Breaking changes especially should include detailed information about the impact of the change, implications, and alternatives, and should be accompanied by a `BREAKING CHANGE` footer.

In the commit message body, a contributor may include references and links to supporting information, such as public GitHub issues (although these may be better placed in the commit message footer). However, the body alone should be sufficient for understanding the commit. Links to private issues should **not** be included in the commit message body and should instead be included in the commit message footer using the [Git trailer format][git-trailer-format], as documented below in the [commit message footer](#commit-message-footer) format. In general, contributors should prefer linking to public issues, rather than private issues.

Commit message lines should be wrapped at **72** characters (except for long URLs).

### Commit Message Footer

The commit message footer may include information about breaking changes and deprecations and is the place to reference GitHub issues and related PRs (including any issues that a commit closes). For example,

```text
feat!: refactor the `cabs` API to support complex number instances

This commit removes support for providing an array-like object as the first
argument and instead refactors the API to only accept complex number instances.
The previous API was not ergonomic and proved awkward to work with when writing
ndarray loop iteration logic and over-complicated the interface from a user-
experience perspective.

BREAKING CHANGE: remove out argument support

Users should migrate by providing complex number instances to refactored APIs.

Fixes: #403
Private-ref: https://github.com/stdlib-js/todo/issues/987
Co-authored-by: Jane Doe <jane@doe.com>
Reviewed-by: John Doe <john@doe.com>
```

Breaking changes **must** have a `BREAKING CHANGE` token in the commit message body, followed by a colon `:` and short summary of the breaking change. If more detail is warranted, the short summary **must** be followed by a blank line and a detailed description, which may include migration instructions.

```text
BREAKING CHANGE: <short summary>

<detailed description + migration instructions>
```

Similarly, deprecations **must** have a `DEPRECATED` token in the commit message body, followed by a colon `:` and short summary of what is deprecated. If more detail is warranted, the short summary **must** be followed by a blank line and a detailed description, which should include a recommended update path.

```text
DEPRECATED: <short summary>

<detailed description + recommended update path>
```

A commit message footer may include other structured information using the [Git trailer format][git-trailer-format] (`token: value`). For example,

-   `Fixes:` link to a GitHub issue describing a bug that the commit fixes.
-   `Closes:` link to a GitHub issue or pull request that the commit closes.
-   `PR-URL:` link to the GitHub pull request responsible for the commit (e.g., upon squash and merge).
-   `Reviewed-by:` the name and e-mail of a commit reviewer (e.g., `Jane Doe <jane@doe.com>`).
-   `Co-authored-by:` the name and e-mail of a contributor who collaborated on the commit.
-   `Ref:` link to a public resource (e.g., commit SHA, external documentation, reference implementation, etc).
-   `Private-ref:` link to a private resource (e.g., issue tracker, pull request, discussion, etc) related to the commit. Private references should only be included in the commit message body using the `Private-ref` token.

Each token may be repeated; however, only one token is allowed per line. Tokens **must** begin with a capital letter followed by all lowercase letters, a colon `:`, and a space. A token **must** not include whitespace, and individual words **must** be separated by a hyphen `-` (e.g., `Reviewed-by`, not `Reviewed by`).

The only exceptions to the restrictions on token case and inclusion of whitespace are `BREAKING CHANGE`, which **must** be in uppercase and include a single whitespace character, and `DEPRECATED`, which **must** be in uppercase. Both `BREAKING CHANGE` and `DEPRECATED` **must** come before all other tokens.

## Revert Commits

If a commit reverts a previous commit, the commit type **must** be **revert**, followed by the header of the reverted commit. The commit message body should contain:

-   Information about the commit SHA being reverted in the following format:

    ```text
    This reverts commit <SHA>.
    ```

-   A clear description of the reason for reverting the previous commit.

For example,

```text
revert: chore: update README

This reverts commit b3befad91a6e39288ea53d540a4a483b0898fb49. The previous
guidance was too restrictive.
```

* * *

## Discussion

The [Conventional Commits][conventional-commits] specification requires contributors to categorize changes according to a limited number of commit types. Inevitably, situations will arise in which a relevant commit type is not obvious. While choosing an appropriate commit type is important, choosing a commit type is only the first step in writing a commit message. When in doubt, a contributor should choose the highest-priority type which is applicable, and then write a detailed commit message body explaining the full complexity of the change.

**squash! or fixup! vs temp**: use Git's [`squash!`][git-commit-squash] or [`fixup!`][git-commit-fixup] when a commit is temporary, but you intend to squash the commit into another commit. Use **temp** when a change is temporary, but you intend for the change to be preserved in the commit history.

**Merge commits**: Git generated commits, such as merge commits, do not follow the above guidelines, but this does not mean that these commits should be avoided. When analyzing commit history (e.g., as part of automation and changelog generation), Git generated commits will be ignored.

* * *

## License

This document may be reused under a [Creative Commons Attribution-ShareAlike License][license].

<section class="links">

[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/

[git]: https://git-scm.com/

[git-commit-squash]: https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---squashltcommitgt

[git-commit-fixup]: https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---fixupamendrewordltcommitgt

[git-trailer-format]: https://git-scm.com/docs/git-interpret-trailers

[imperative-mood]: https://en.wikipedia.org/wiki/Imperative_mood

[semver]: http://semver.org/

[license]: https://creativecommons.org/licenses/by-sa/4.0/

</section>

<!-- /.links -->
