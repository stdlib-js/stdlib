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
* Returns an array of an object's own and inherited enumerable property names and symbols.
*
* ## Notes
*
* -   If provided `null` or `undefined`, the function returns an empty array.
*
* @param value - input object
* @returns a list of own and inherited enumerable property names and symbols
*
* @example
* var props = enumerablePropertiesIn( [] );
* // returns []
*/
declare function enumerablePropertiesIn( value: any ): Array<string|symbol>;


// EXPORTS //

export = enumerablePropertiesIn;
