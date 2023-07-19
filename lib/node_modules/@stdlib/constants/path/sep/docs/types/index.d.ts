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
* Platform-specific path segment separator.
*
* @example
* var IS_WINDOWS = require( `@stdlib/assert/is-windows` );
*
* var parts;
* if ( IS_WINDOWS ) {
*     parts = 'foo\\bar\\baz'.split( PATH_SEP );
*     // returns ['foo','bar','baz']
* } else {
*     parts = 'foo/bar/baz'.split( PATH_SEP );
*     // returns ['foo','bar','baz']
* }
*/
declare const PATH_SEP: string;


// EXPORTS //

export = PATH_SEP;
