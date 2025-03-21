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
* @namespace net
*/
var net = {};

/**
* @name tempHttpServer
* @memberof net
* @readonly
* @type {Function}
* @see {@link module:@stdlib/net/disposable-http-server}
*/
setReadOnly( net, 'tempHttpServer', require( '@stdlib/net/disposable-http-server' ) );

/**
* @name httpServer
* @memberof net
* @readonly
* @type {Function}
* @see {@link module:@stdlib/net/http-server}
*/
setReadOnly( net, 'httpServer', require( '@stdlib/net/http-server' ) );

/**
* @name simpleHttpServer
* @memberof net
* @readonly
* @type {Function}
* @see {@link module:@stdlib/net/simple-http-server}
*/
setReadOnly( net, 'simpleHttpServer', require( '@stdlib/net/simple-http-server' ) );


// EXPORTS //

module.exports = net;
