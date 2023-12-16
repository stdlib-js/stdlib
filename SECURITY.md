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

# Security

> Policy for reporting security vulnerabilities.

The maintainers of stdlib take very seriously the security of stdlib and its open source code repositories as managed through GitHub. Keeping our users safe is a top priority, and we welcome the contributions of external security researchers.

We appreciate your efforts to responsibly disclose your findings, and we will make every effort to acknowledge your contributions.

* * *

## Scope

If you believe that you have found a security issue in any software, service, or website governed by stdlib, we encourage you to notify us.

Please note, however, that projects governed by stdlib sometimes do unsafe things by design. For example, the stdlib REPL supports executing arbitrary code, certain API implementations may use code generation for performance optimization, and stdlib "base" APIs may eschew input validation and sanitation based on the assumption that all input arguments are correct and can be trusted. In general, any unsafe behavior should be explicitly documented, and, if documented, the behavior is **not** considered a security issue.

While there are no clearly delineated rules for determining whether a bug should be reported as a security issue or a "regular" issue, when in doubt, please err on the side of filing a security issue. If, after investigation, we subsequently determine that the issue is a regular issue, we will advise you to move the discussion to the [public issue tracker][stdlib-issues].

### Threat model

In the stdlib threat model, certain elements, such as the underlying operating system, are considered trusted. Vulnerabilities that require the compromise of trusted elements are outside the scope of the stdlib threat model.

Examples of trusted elements include the following:

-   The developers using stdlib and the infrastructure on which stdlib is used.
-   The operating system on which stdlib is used and its configuration, along with anything under control of the operating system.
-   The code stdlib is asked to run, including JavaScript and native code. Any provided code inherits all the privileges of the execution user.
-   The inputs provided to stdlib by the code it is asked to run. It is the responsibility of the consumer of stdlib to perform requisite input validations.

stdlib strives to avoid APIs and internal implementations which make it easy for downstream code to use stdlib APIs incorrectly and thereby enable vulnerabilities. While we do not consider these vulnerabilities to be in stdlib itself, we do ask that they be reported privately to stdlib. Having this information allows us to improve stdlib APIs and issue fixes in either regular or security releases depending on how much risk they pose to the stdlib community.

For an issue to be considered a stdlib security vulnerability, the issue must be a vulnerability within the context of the stdlib threat model. Stated otherwise, the issue cannot assume that a trusted element (such as the operating system) has been compromised.

Being able to cause the following through control of untrusted elements is likely to be considered a vulnerability:

-   Disclosure or loss of integrity or confidentiality of data protected through the correct use of stdlib APIs.
-   The unavailability of the host JavaScript runtime (e.g., due to unbounded performance degradation).

#### Examples of vulnerabilities

##### Incorrect access of indexable resource

stdlib provides APIs for accessing underlying memory, such as those for ndarray views which are backed by a binary buffer. If, for example, during correct usage of designated element accessors, a non-base ndarray API can be used to access memory which does not belong to an ndarray view (e.g., due to an index/pointer arithmetic bug), that is considered a vulnerability.

#### Examples of non-vulnerabilities

##### Prototype pollution attacks

stdlib trusts inputs provided to it by downstream code. It is thus the responsibility of the downstream code to sanitize appropriately. Any scenario that requires control over user input is **not** considered a vulnerability.

* * *

## How to submit a report

stdlib supports [privately reporting security vulnerabilities][github-security-advisories]. To report a security issue, please use the GitHub Security Advisory ["Report a Vulnerability"][stdlib-new-security-advisory] tab.

When submitting a report,

-   please provide detailed reports with reproducible steps and a clearly defined impact.
-   submit only one vulnerability per report.
-   do not engage in any form of social engineering (such as phishing, vishing, or smishing).
-   do not attempt to show CI/CD vulnerabilities by creating new pull requests to any of stdlib's repositories. Doing so will result in a [content report][github-content-report] to GitHub as an unsolicited exploit. The proper way to provide such reports is by creating a new repository, configured in the same manner as the repository about which you would like to submit a report, and, with a pull request to your own repository, showing the proof-of-concept.

**Please do NOT report security vulnerabilities through public GitHub issues, discussions, or pull requests, or any other public stdlib forum.**

* * *

## Process

After submitting a private security vulnerability report, your report will normally be acknowledged within **5 business days**, and you will receive a more detailed response to your report within **10 business days** indicating the next steps in handling your submission. Note, however, that the timelines may extend when stdlib maintainers are away on holiday (particularly at the end of the year), handling personal emergencies, encountering unforeseen adverse global events, or dealing with other contingent circumstances affecting their ability to respond.

After the initial reply to your report, stdlib maintainers will strive to keep you informed of progress made toward implementing a fix and making a full announcement. During the course of our investigation, we may ask for additional information or guidance concerning the reported issue.

Please note that it is of the utmost importance that you read carefully and follow the guidelines outlined in the stdlib security policy to ensure that the ecosystem as a whole is not disrupted due to improperly reporting vulnerabilities.

stdlib does **not** support any reporting outside of the process outlined in this document.

* * *

## Disclosure policy

Our disclosure policy is as follows:

-   Once a security vulnerability is reported, the report is assigned a primary handler. This person will coordinate the fix and release process.

-   The problem is then validated against the **latest** release version (e.g., if a package published to npm, the latest `<major>.<minor>.x` release). Due to limited maintainer bandwidth, security vulnerabilities discovered in older `<major>.x.x` release lines are considered out-of-scope and will not receive security updates. Users are advised that only vulnerabilities affecting the **latest** release line will receive patches.

-   Depending on the outcome of validation, the primary handler will communicate to the individual who submitted the potential vulnerability one of the following possible responses:

    -   **Acceptance**: what was reported is a considered a new vulnerability.
    -   **Rejection**: what was reported is not considered a new vulnerability.
    -   **Needs more information**: we need more information in order to evaluate what was reported.

-   Once a vulnerability is accepted, code is then audited to find any potential similar problems.

-   Fixes are subsequently prepared for the latest `<major>.<minor>.x` release line.

-   After fix preparation, the primary handler will coordinate with stdlib maintainers to define a release date for the publication of the vulnerability.

-   The changes are pushed to the affected public repositories and, where relevant, new builds are published to npm.

-   The private security vulnerability report is then made public.

Note that the above process can take time (up to and beyond **90** days depending on the complexity of the fix), especially when coordination is required with maintainers of other projects. We thus ask that you provide us with a reasonable amount of time to resolve reported vulnerabilities prior to any public disclosure or third party reporting. We will make every effort to handle the security report in as timely a manner as possible.

We further ask that you please allow us to follow the release process described above so that we can ensure that disclosures are handled in a consistent manner.

* * *

## Safe harbor

stdlib supports safe harbor for security researchers who

-   make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our services.
-   only interact with accounts they own or with explicit permission of the account holder. Upon encountering Personally Identifiable Information (PII), researchers are asked to contact us immediately, to not proceed with access, and to immediately delete any locally stored information.
-   provide us with a reasonable amount of time to resolve vulnerabilities prior to public or third party disclosure.

We will consider activities which are conducted in a manner consistent with the above policy to constitute authorized conduct and will not pursue civil action or initiate a complaint with law enforcement.

**Please submit a vulnerability report before engaging in conduct which may be inconsistent with or unaddressed by the above policy.**

* * *

## Comments on this policy

If you have suggestions on how the stdlib security process could be improved, please submit a [pull request][stdlib] or [file an issue][stdlib-issues] to discuss.

Thank you for helping make stdlib safe for everyone! ❤️

* * *

## Attribution

This policy document draws from the following security policies:

-   [npm][npm-security-policy]
-   [Electron][electron-security-policy]
-   [Node.js][nodejs-security-policy]
-   [remark][remark-security-policy]
-   [fastify][fastify-security-policy]

## License

This document may be reused under a [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license][cc-by-sa-4.0].

## Copyright

Copyright © The Stdlib [Authors][stdlib-authors].

<section class="links">

[github-security-advisories]: https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability

[github-content-report]: https://docs.github.com/en/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam#reporting-an-issue-or-pull-request

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-issues]: https://github.com/stdlib-js/stdlib/issues

[stdlib-new-security-advisory]: https://github.com/stdlib-js/stdlib/security/advisories/new

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[npm-security-policy]: https://github.com/npm/cli/blob/86ac76caa4a8bd5d1acb1777befdbc4d9ebc8a1a/SECURITY.md

[electron-security-policy]: https://github.com/electron/electron/blob/95d094d75bddb99c83d2902fbc9a4335632a41cf/SECURITY.md

[nodejs-security-policy]: https://github.com/nodejs/node/blob/fa183786ef1dba08b960e7a64ec9b093a9b8b59d/SECURITY.md

[remark-security-policy]: https://github.com/remarkjs/.github/blob/8070442fde16e2c81f80bd65caab6d3a8cc090f4/security.md

[fastify-security-policy]: https://github.com/fastify/fastify/blob/e3a07eaa444d0e769802195816d4e1718c2fc9ea/SECURITY.md

[cc-by-sa-4.0]: https://creativecommons.org/licenses/by-sa/4.0/

</section>
