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
* Tests if a value is generator object-like.
*
* @param value - value to test
* @returns boolean indicating whether value is generator object-like
*
* @example
* var gen = {
*     'next': function noop() {},
*     'return': function noop() {},
*     'throw': function noop() {}
* };
* var bool = isGeneratorObjectLike( gen );
* // returns true
*
* @example
* function* generateID() {
*     var idx = 0;
*     while ( idx < idx+1 ) {
*         yield idx;
*         idx += 1;
*     }
* }
* var bool = isGeneratorObjectLike( generateID() );
* // returns true
*
* @example
* var bool = isGeneratorObjectLike( {} );
* // returns false
*
* @example
* var bool = isGeneratorObjectLike( null );
* // returns false
*/
declare function isGeneratorObjectLike( value: any ): boolean;


// EXPORTS //

export = isGeneratorObjectLike;
