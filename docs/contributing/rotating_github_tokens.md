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

# Rotating GitHub Tokens

> A guide for rotating GitHub Personal Access Tokens (PATs) used by the stdlib project.

This document outlines the process for rotating GitHub Personal Access Tokens (PATs) used by the stdlib project.

## Frequency

Tokens should be rotated every 90 days to maintain security best practices.

## Procedure

1.  Sign into GitHub with the `stdlib-bot` account. Credentials are stored in BitWarden under the "GitHub stdlib-bot" item of the "stdlib" team vault.

2.  Go to <https://github.com/settings/personal-access-tokens> and <https://github.com/settings/tokens> to renew all tokens for 90 days.

3.  Note down all new token values.

4.  Update all the tokens in the "GitHub PAT Tokens" BitWarden item to their new values and update the "Expiration Date" custom field to the new expiration date.

5.  Update the respective tokens in the following repositories:
    -   <https://github.com/stdlib-js/stdlib/settings/secrets/actions>
    -   <https://github.com/stdlib-js/www-test-code-coverage/settings/secrets/actions>
    -   <https://github.com/stdlib-js/www-status/settings/secrets/actions>
    -   <https://github.com/stdlib-js/todo/settings/secrets/actions>

## Notes

-   Ensure the new tokens have the same scope/permissions as the previous ones.
-   Verify all GitHub Actions are working correctly after the token rotation.
