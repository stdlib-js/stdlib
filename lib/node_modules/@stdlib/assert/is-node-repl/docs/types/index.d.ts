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
* Returns a boolean indicating if the function is called from a Node.js REPL environment.
*
* ## Notes
*
* -   False positives are possible due to the existence of a userland package having the same module `id` (see [repl][repl-template-lib]) as the builtin Node.js `repl`.
*
* [repl-template-lib]: https://www.npmjs.com/package/repl
*
* @returns boolean indicating if the function is called from a Node.js REPL environment
*
* @example
* var bool = isNodeREPL();
* // returns <boolean>
*/
declare function isNodeREPL(): boolean;


// EXPORTS //

export = isNodeREPL;
