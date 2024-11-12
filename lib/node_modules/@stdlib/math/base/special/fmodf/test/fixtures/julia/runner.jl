#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2024 The Stdlib Authors.
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
    gen( x, y, name )

Generate fixture data and write to file.

# Arguments

* `x`: first number
* `y`: second number
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000, stop = 1000, length = 2001 );
julia> y = range( 0, stop = 1000, length = 1001 );
julia> gen( x, y, \"data.json\" );
```
"""
function gen( x, y, name )
	z = Array{Float32}( undef, length( x ) );
	for i in eachindex(x)
		z[ i ] = Float32(rem( Float32(x[ i ]), Float32(y[ i ])) )
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("y", y),
		("expected", z)
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

# Subnormal results:
x = range(1.18e-38, stop = 1.0e-45, length = 2001)
y = range(1.18e-38, stop = 1.0e-45, length = 2001)
gen( x, y, "subnormal_results.json" );

# x small, y small:
x = rand( 5001 ) .* 100
y = rand( 5001 ) .* 100
gen( x, y, "small_small.json" );

# x small, y large:
x = rand( 5001 ) .* 100;
y = rand( 5001 ) .* 1.0e10;
gen( x, y, "small_large.json" );

# x large, y small:
x = rand( 5001 ) .* 1.0e10;
y = rand( 5001 ) .* 100;
gen( x, y, "large_small.json" );

# x positive, y negative:
x = range( 1.0, stop = 85.0, length = 1000 );
y = range( -85.0, stop = -1.0, length = 1000 );
gen( x, y, "positive_negative.json" );

# x negative, y positive:
x = range( -85.0, stop = -1.0, length = 1000 );
y = range( 1.0, stop = 85.0, length = 1000 );
gen( x, y, "negative_positive.json" );

# x negative, y negative:
x = range( -85.0, stop = -1.0, length = 1000 );
y = range( -85.0, stop = -1.0, length = 1000 );
gen( x, y, "negative_negative.json" );
