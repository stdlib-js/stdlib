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
* Platform on which the current process is running.
*
* ## Notes
*
* Possible values:
*
* -   `'win32'`
* -   `'darwin'`
* -   `'linux'`
* -   `'freebsd'`
* -   `'sunos'`
*
* @example
* if ( PLATFORM === 'win32' ) {
*    console.log( 'Running on a PC...' );
* } else if ( PLATFORM === 'darwin' ) {
*    console.log( 'Running on a Mac...' );
* } else {
*    console.log( 'Running on something else...' );
* }
*/
declare const PLATFORM: string;


// EXPORTS //

export = PLATFORM;
