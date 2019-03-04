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
* Tests if a value is a UNC path.
*
* @param value - value to test
* @returns boolean indicating if a value is a UNC path
*
* @example
* var bool = isUNCPath( '\\\\server\\share\\foo\\bar\\baz' );
* // returns true
*
* @example
* var bool = isUNCPath( '/foo/bar/baz' );
* // returns false
*/
declare function isUNCPath( value: any ): boolean;


// EXPORTS //

export = isUNCPath;
