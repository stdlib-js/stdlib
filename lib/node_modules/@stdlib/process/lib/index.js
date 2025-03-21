/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name ARGV
* @memberof ns
* @readonly
* @type {Array}
* @see {@link module:@stdlib/process/argv}
*/
setReadOnly( ns, 'ARGV', require( '@stdlib/process/argv' ) );

/**
* @name chdir
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/process/chdir}
*/
setReadOnly( ns, 'chdir', require( '@stdlib/process/chdir' ) );

/**
* @name cwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/process/cwd}
*/
setReadOnly( ns, 'cwd', require( '@stdlib/process/cwd' ) );

/**
* @name ENV
* @memberof ns
* @readonly
* @type {Object}
* @see {@link module:@stdlib/process/env}
*/
setReadOnly( ns, 'ENV', require( '@stdlib/process/env' ) );

/**
* @name EXEC_PATH
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/process/exec-path}
*/
setReadOnly( ns, 'EXEC_PATH', require( '@stdlib/process/exec-path' ) );

/**
* @name getegid
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/process/getegid}
*/
setReadOnly( ns, 'getegid', require( '@stdlib/process/getegid' ) );

/**
* @name geteuid
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/process/geteuid}
*/
setReadOnly( ns, 'geteuid', require( '@stdlib/process/geteuid' ) );

/**
* @name getgid
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/process/getgid}
*/
setReadOnly( ns, 'getgid', require( '@stdlib/process/getgid' ) );

/**
* @name getuid
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/process/getuid}
*/
setReadOnly( ns, 'getuid', require( '@stdlib/process/getuid' ) );

/**
* @name NODE_VERSION
* @memberof ns
* @readonly
* @type {(string|null)}
* @see {@link module:@stdlib/process/node-version}
*/
setReadOnly( ns, 'NODE_VERSION', require( '@stdlib/process/node-version' ) );

/**
* @name stdin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/process/read-stdin}
*/
setReadOnly( ns, 'stdin', require( '@stdlib/process/read-stdin' ) );

/**
* @name umask
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/process/umask}
*/
setReadOnly( ns, 'umask', require( '@stdlib/process/umask' ) );


// EXPORTS //

module.exports = ns;
