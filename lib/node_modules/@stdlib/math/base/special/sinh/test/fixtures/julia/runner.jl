#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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
julia> x = range( -708, stop = 709, length = 2001 );
julia> gen( x, \"data.json\" );
```
"""
function gen( domain, name )
	x = collect( domain );
	y = sinh.( x );

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
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Generate fixture data for decimal values:
x = range( -100, stop = 100, length = 2003 );
gen( x, "data.json" );

# Large negative values:
x = range( -709.0895, stop = -100, length = 2003 );
gen( x, "large_negative.json" );

# Large positive values:
x = range( 100, stop = 710.475, length = 2003 );
gen( x, "large_positive.json" );

# Tiny negative values:
x = range( -1e-200, stop = -1e-208, length = 2003 );
gen( x, "tiny_negative.json" );

# Tiny positive values:
x = range( 1e-300, stop = 1e-308, length = 2003 );
gen( x, "tiny_positive.json" );
