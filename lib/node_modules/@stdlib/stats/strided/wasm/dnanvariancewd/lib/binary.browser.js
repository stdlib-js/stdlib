/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// MODULES //

var base64ToUint8Array = require( '@stdlib/string/base/base64-to-uint8array' );


// MAIN //

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEVA2AAAGAEf3x/fwF8YAV/fH9/fwF8Ag8BA2VudgZtZW1vcnkCAAADBAMAAQIHXQMRX193YXNtX2NhbGxfY3RvcnMAAB1zdGRsaWJfc3RyaWRlZF9kbmFudmFyaWFuY2V3ZAABJXN0ZGxpYl9zdHJpZGVkX2RuYW52YXJpYW5jZXdkX25kYXJyYXkAAgrtAQMDAAELHAAgACABIAIgA0EBIABrIANsQQAgA0EATBsQAgvJAQIFfAJ/RAAAAAAAAPh/IQgCQAJAIABBAEwNACADRSAAQQFGcg0BA0AgACALRkUEQCACIARBA3RqKwMAIgcgB2EEQCAHIAahIgkgByAGIAkgCkEBaiIKt6OgIgahoiAFoCEFCyALQQFqIQsgAyAEaiEEDAELCyAKtyABoSIBRAAAAAAAAAAAZQ0AIAUgAaMhCAsgCA8LRAAAAAAAAAAARAAAAAAAAPh/IAEgALhjG0QAAAAAAAD4fyACIARBA3RqKwMAIgEgAWEbCw==' );


// EXPORTS //

module.exports = wasm;
