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
* Tests if a value is an `EvalError` object.
*
* ## Notes
*
* -   This function should **not** be considered robust. While the function should always return `true` if provided an EvalError (or a descendant) object, false positives may occur due to the fact that the EvalError constructor inherits from Error and has no internal class of its own. Hence, EvalError impersonation is possible.
*
* @param value - value to test
* @returns boolean indicating whether a value is an `EvalError` object
*
* @example
* var bool = isEvalError( new EvalError( 'beep' ) );
* // returns true
*
* @example
* var bool = isEvalError( {} );
* // returns false
*/
declare function isEvalError( value: any ): boolean;


// EXPORTS //

export = isEvalError;
