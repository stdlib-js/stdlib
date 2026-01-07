<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

<!-- lint disable expected-html-sections -->

# Guidelines for Using AI in stdlib Contributions

> Guidelines for using AI tools when contributing to the stdlib project.

As described in the our [contributing guidelines][contributing-guide] and [code of conduct][code-of-conduct], the stdlib community values respectful, authentic, empathic engagement across all channels.
Artificial Intelligence (AI) and Large Language Models (LLMs) tools are rapidly evolving, and this _living document_ provides guidance on the appropriate use of such tools when contributing to stdlib.

## Key Principles

1.  Maintainer capacity to review contributions is a finite, valuable resource. As such, _all_ contributions should strive to meet the rigorous guidelines and standards of the project. This will both maximize the chances of getting your pull request reviewed and merged, and minimize maintainer burden.
2.  All contributions are bound by the project's [licensing terms][stdlib-license] (the Apache License, Version 2.0), and must adhere to the [Developer's Certificate of Origin][contributing-dco].
3.  Contributing to stdlib requires human judgement and understanding of the project's structure and conventions. Contributors should be able to explain the reasoning behind their changes, and ensure that they meet the project's standards.
4.  If AI tools are used to assist with a contribution such that you're effectively copying and pasting or inserting output without changes, this must be **clearly disclosed**. Disclosure should include a description of how AI was used and what specific contributions it made. Include the AI tool used and the version (if applicable) in the git commit footer (per the [Conventional Commits footer spec][conventional-commits-spec]) using the tag `Assisted-by: ToolNamevX.X.X`.
5.  Do not use AI tools to resolve issues marked as **"Good First Issue"**. These issues are intended to help newcomers learn about the project and gain experience with the mechanics of contributing.

## Use Cases

-   Inline code-completions and suggestions.
-   Boilerplate code generation.
-   Learning about and exploring the codebase.
-   Explaining code or concepts.
-   Asking for suggestions or improvements (always using manual validation).
-   Setting up test fixtures.
-   Proofreading documentation or code comments.
-   Code review _after_ manual implementation.

## Dos and Don'ts

<!-- TODO: Add specific dos and don'ts for using AI tools when contributing to stdlib.  -->

## Attribution

This document was inspired by and borrows heavily from:

-   [ASF Generative Tooling Guidance][asf-generative-tooling-guidance]
-   [scikit-learn Automated Contributions Policy][scikit-learn-automated-contributions-policy]
-   [matplotlib Restrictions on Generative AI Usage][matplotlib-restrictions-on-generative-ai-usage]
-   Fedora Council's [AI-Assisted Contribution Policy][fedora-ai-contribution-policy]
-   [OpenInfra Foundation Policy for AI Generated Content][openinfra-ai-policy]

<section class="links">

[contributing-guide]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[code-of-conduct]: https://github.com/stdlib-js/stdlib/blob/develop/CODE_OF_CONDUCT.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stdlib/develop/LICENSE

[contributing-dco]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md#developers-certificate-of-origin-11

[conventional-commits-spec]: https://www.conventionalcommits.org/en/v1.0.0/

[asf-generative-tooling-guidance]: https://www.apache.org/legal/generative-tooling.html

[scikit-learn-automated-contributions-policy]: https://scikit-learn.org/stable/developers/contributing.html#automated-contributions-policy

[matplotlib-restrictions-on-generative-ai-usage]: https://matplotlib.org/devdocs/devel/contribute.html#restrictions-on-generative-ai-usage

[fedora-ai-contribution-policy]: https://docs.fedoraproject.org/en-US/council/policy/ai-contribution-policy/

[openinfra-ai-policy]: https://openinfra.org/legal/ai-policy

</section>

<!-- /.links -->
