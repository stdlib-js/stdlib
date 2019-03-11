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
* Tests if a value is an array containing a circular reference.
*
* @param value - value to test
* @returns boolean indicating whether value is an array containing a circular reference
*
* @example
* var arr = [ 1, 2, 3 ];
* arr.push( arr );
* var bool = isCircularArray( arr );
* // returns true
*
* @example
* var obj = {
*   'a': 'beep',
*   'b': {
*     'c': 'boop'
*   }
* };
* obj.b.self = obj;
* var bool = isCircularArray( obj );
* // returns false
*
* @example
* var bool = isCircularArray( [] );
* // returns false
*
* @example
* var bool = isCircularArray( null );
* // returns false
*/
declare function isCircularArray( value: any ): boolean;


// EXPORTS //

export = isCircularArray;
