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

var indexOf = require( '@stdlib/utils-index-of' );
var policies = require( './../lib' );

var POLICIES = policies();

function isPolicy( str ) {
	if ( indexOf( POLICIES, str ) === -1 ) {
		return false;
	}
	return true;
}

var bool = isPolicy( 'none' );
console.log( bool );
// => true

bool = isPolicy( 'output' );
console.log( bool );
// => true

bool = isPolicy( 'promoted' );
console.log( bool );
// => true

bool = isPolicy( 'beep' );
console.log( bool );
// => false
