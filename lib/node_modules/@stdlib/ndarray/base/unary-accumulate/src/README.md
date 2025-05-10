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

# Unary

> ndarray functions for accumulation callbacks.

## Notes

-   Each file contains a set of related ndarray functions. The file name matches the ndarray function name suffix for input and output ndarray dtypes.
-   The implemented functions which perform conversions are **not** exhaustive and that is intentional. Namely, functions which would perform "unsafe" callback argument and return value conversions are generally not included (e.g., converting `double` to `int32`). If users want to perform "unsafe" conversions, that should be a conscious decision. All the machinery (e.g., macros, typedefs, etc) is available for implementing ndarray functions which perform "unsafe" conversions, but we should not make this overly easy or be proactive in promoting "unsafe" conversion use.
