<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Unary

> Strided array functions for unary callbacks.

## Notes

-   Each file contains a single strided array function. The file name matches the strided array function name suffix.
-   The implemented functions which perform conversions are **not** exhaustive and that is intentional. Namely, functions which would perform "unsafe" callback argument and return value conversions are not included (e.g., converting an `int32` to `int16` or `double` to `int32`). If users want to perform "unsafe" conversions, that should be a conscious decision. All the machinery (e.g., macros, typedefs, etc) is available for implementing strided array functions which perform "unsafe" conversions, but we should not make this overly easy or be proactive in promoting "unsafe" conversion use.
