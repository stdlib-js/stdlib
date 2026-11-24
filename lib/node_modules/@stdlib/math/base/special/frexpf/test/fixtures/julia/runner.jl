#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2025 The Stdlib Authors.
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
	gen( x, name )

Generate fixture data and write to file.

# Arguments

* `x`: domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000, stop = 1000, length = 2001 );
julia> gen( x, \"data.json\" );
```
"""
function gen( x, name )
	y = Array{Any}( undef, length(x) );
	for i in eachindex(x)
		y[ i ] = frexp( x[i] );
	end

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

# Small values:
x = Float32.( range( 1e-20, stop = 1e-38, length = 1007 ) );
gen( x, "x_1e-20_1e-38.json" );

# Medium values:
x = Float32.( range( -1e3, stop = 1e3, length = 1007 ) );
gen( x, "x_-1e3_1e3.json" );

# Large values:
x = Float32.( range( 1e20, stop = 1e38, length = 1007 ) );
gen( x, "x_1e20_1e38.json" );

# Subnormal values:
x = Float32.( range( 1e-40, stop = 1e-45, length = 1007 ) );
gen( x, "x_1e-40_1e-45.json" );
