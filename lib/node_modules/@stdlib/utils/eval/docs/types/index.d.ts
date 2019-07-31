/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/**
* Alias for `eval` global.
*
* ## Notes
*
* -   A reference to `eval` is treated differently by the compiler. For example, when evaluating code containing block-scoped declarations  (e.g., `let`, `const`, `function`, `class`), the compiler may throw an `error` complaining that block-scoped declarations are not yet supported outside of `strict mode`. One possible workaround is to include `"use strict";` in the evaluated code.
*
* @param str - code to evaluate
* @returns returned value if applicable
*
* @example
* var v = evil( '5*4*3*2*1' );
* // returns 120
*/
declare function evil( str: string ): any;


// EXPORTS //

export = evil;
