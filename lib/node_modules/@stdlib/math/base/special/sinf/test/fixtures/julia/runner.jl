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
	gen( domain, name )

Generate fixture data and write to file.

# Arguments

* `domain`: domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000.0, stop = 1000.0, length = 2001 );
julia> gen( x, \"data.json\" );
```
"""
function gen( domain, name )
	x = collect( domain );
	y = sin.( x );

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

# Negative medium sized values:
x = Float32.( range( -256.0*pi, stop = 0.0, length = 4000 ) );
gen( x, "medium_negative.json" );

# Positive medium sized values:
x = Float32.( range( 0.0, stop = 256.0*pi, length = 4000 ) );
gen( x, "medium_positive.json" );

# Negative large values:
x = Float32.( range( -2.0^20*(pi/2.0), stop = -2.0^60*(pi/2.0), length = 4000 ) );
gen( x, "large_negative.json" );

# Positive large values:
x = Float32.( range( 2.0^20*(pi/2.0), stop = 2.0^60*(pi/2.0), length = 4000 ) );
gen( x, "large_positive.json" );

# Negative huge values:
x = Float32.( range( -2.0^60*(pi/2.0), stop = -2.0^120*(pi/2.0), length = 4000 ) );
gen( x, "huge_negative.json" );

# Positive huge values:
x = Float32.( range( 2.0^60*(pi/2.0), stop = 2.0^120*(pi/2.0), length = 4000 ) );
gen( x, "huge_positive.json" );
