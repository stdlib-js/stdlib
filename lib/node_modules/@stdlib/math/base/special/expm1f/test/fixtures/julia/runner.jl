#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import JSON

"""
	gen( domain, name )

Generate fixture data and write to file.

# Arguments

* `domain`: domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -87.0f0, stop = -1.0f0, length = 1000 );
julia> gen( x, "medium_negative.json" );
```
"""
function gen( domain, name )
	x = collect( domain );
	y = expm1.( Float32.( x ) );

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("expected", y)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Generate fixture data for medium negative values:
x = range( -87.0f0, stop = -1.0f0, length = 1000 );
gen( x, "medium_negative.json" );

# Generate fixture data for medium positive values:
x = range( 1.0f0, stop = 87.0f0, length = 1000 );
gen( x, "medium_positive.json" );

# Generate fixture data for small negative values:
x = range( -1.0f0, stop = -2.0f0^-25, length = 1000 );
gen( x, "small_negative.json" );

# Generate fixture data for small positive values:
x = range( 2.0f0^-25, stop = 1.0f0, length = 1000 );
gen( x, "small_positive.json" );

# Generate fixture data for tiny values:
x = range( -2.0f0^-25, stop = 2.0f0^-25, length = 1000 );
gen( x, "tiny.json" );
