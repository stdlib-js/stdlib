/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import ARGV = require( '@stdlib/process/argv' );
import chdir = require( '@stdlib/process/chdir' );
import cwd = require( '@stdlib/process/cwd' );
import ENV = require( '@stdlib/process/env' );
import EXEC_PATH = require( '@stdlib/process/exec-path' );
import getegid = require( '@stdlib/process/getegid' );
import geteuid = require( '@stdlib/process/geteuid' );
import getgid = require( '@stdlib/process/getgid' );
import getuid = require( '@stdlib/process/getuid' );
import NODE_VERSION = require( '@stdlib/process/node-version' );
import stdin = require( '@stdlib/process/read-stdin' );
import umask = require( '@stdlib/process/umask' );

/**
* Interface describing the `process` namespace.
*/
interface Namespace {
	/**
	* An array containing command-line arguments passed when launching the calling process.
	*
	* @example
	* console.log( ns.ARGV );
	* // => [...]
	*/
	ARGV: typeof ARGV;

	/**
	* Changes the current working directory.
	*
	* ## Notes
	*
	* -   If unable to set the current working directory (e.g., due to a non-existent path), the function returns an error; otherwise, the function returns `null`.
	*
	* @param path - desired working directory
	* @returns error object or `null`
	*
	* @example
	* var err = ns.chdir( __dirname );
	* if ( err ) {
	*     throw err;
	* }
	*/
	chdir: typeof chdir;

	/**
	* Returns the current working directory of the process.
	*
	* @returns current working directory of the process
	*
	* @example
	* var dir = ns.cwd();
	* // returns '/path/to/current/working/directory'
	*/
	cwd: typeof cwd;

	/**
	* An object containing the user environment.
	*
	* @example
	* console.dir( ns.ENV );
	*/
	ENV: typeof ENV;

	/**
	* Absolute pathname of the executable which started the current Node.js process.
	*
	* @example
	* if ( ns.EXEC_PATH ) {
	*     console.log( 'Executable: %s', ns.EXEC_PATH );
	* } else {
	*     console.log( 'Not running in Node.js.' );
	* }
	*/
	EXEC_PATH: typeof EXEC_PATH;

	/**
	* Returns the effective numeric group identity of the calling process.
	*
	* ## Notes
	*
	* -   The function only returns an effective group identity on POSIX platforms. For all other platforms (e.g., Windows and Android), the function returns `null`.
	*
	* @returns effective numeric group identity or null
	*
	* @example
	* var gid = ns.getegid();
	*/
	getegid: typeof getegid;

	/**
	* Returns the effective numeric user identity of the calling process.
	*
	* ## Notes
	*
	* -   The function only returns an effective user identity on POSIX platforms. For all other platforms (e.g., Windows and Android), the function returns `null`.
	*
	* @returns effective numeric user identity or null
	*
	* @example
	* var uid = ns.geteuid();
	*/
	geteuid: typeof geteuid;

	/**
	* Returns the numeric group identity of the calling process.
	*
	* ## Notes
	*
	* -   The function only returns a group identity on POSIX platforms. For all other platforms (e.g., Windows and Android), the function returns `null`.
	*
	* @returns numeric group identity or null
	*
	* @example
	* var gid = ns.getgid();
	*/
	getgid: typeof getgid;

	/**
	* Returns the numeric user identity of the calling process.
	*
	* ## Notes
	*
	* -   The function only returns a user identity on POSIX platforms. For all other platforms (e.g., Windows and Android), the function returns `null`.
	*
	* @returns numeric user identity or null
	*
	* @example
	* var uid = ns.getuid();
	*/
	getuid: typeof getuid;

	/**
	* Node version.
	*
	* @example
	* var semver = require( `semver` );
	*
	* if ( semver.lt( ns.NODE_VERSION, '1.0.0' ) ) {
	*    console.log( 'Running on a pre-io.js version...' );
	* }
	* else if ( semver.lt( ns.NODE_VERSION, '4.0.0' ) ) {
	*    console.log( 'Running on an io.js version...' );
	* }
	* else {
	*    console.log( 'Running on a post-io.js version...' );
	* }
	*/
	NODE_VERSION: typeof NODE_VERSION;

	/**
	* Reads data from `stdin`.
	*
	* @param encoding - string encoding. If set, data will be returned as an encoded `string`
	* @param clbk - callback to be invoked upon reading all data from `stdin`
	*
	* @example
	* function onRead( error, data ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( data.toString() );
	*     // => '...'
	* }
	*
	* ns.stdin( onRead );
	*
	* @example
	* function onRead( error, data ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( data );
	*     // => '...'
	* }
	*
	* ns.stdin( 'utf8', onRead );
	*/
	stdin: typeof stdin;

	/**
	* Get/set the process mask.
	*
	* @param options - options
	* @param options.symbolic - boolean indicating whether to return a mask using symbolic notation
	* @throws must provide valid options
	* @returns process mask
	*
	* @example
	* var mask = ns.umask();
	* // returns <number>
	*/
	umask: typeof umask;
}

/**
* Standard library process utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
