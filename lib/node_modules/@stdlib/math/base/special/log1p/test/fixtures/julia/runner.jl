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
julia> x = range( -1000, stop = 1000, length = 2001 );
julia> gen( x, \"data.json\" );
```
"""
function gen( domain, name )
	x = collect( domain );
	y = log1p.( x );

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

# Negative small values:
x = range( -2.0^-29, stop = -2.0^-54, length = 500 );
gen( x, "small_negative.json" );

# Positive small values:
x = range( 2.0^-54, stop = 2.0^-29, length = 500 );
gen( x, "small_positive.json" );

# Negative tiny values:
x = range( -2.0^-54, stop = 0, length = 500 );
gen( x, "tiny_negative.json" );

# Positive tiny values:
x = range( 0, stop = 2.0^-54, length = 500 );
gen( x, "tiny_positive.json" );

# Negative medium values:
x = range( -0.41422, stop = -0.2929, length = 500 );
gen( x, "medium_negative.json" );

# Positive medium values:
x = range( 0.2929, stop = 0.41422, length = 500 );
gen( x, "medium_positive.json" );

# Negative large values:
x = range( -0.9999, stop = -0.41422, length = 500 );
gen( x, "large_negative.json" );

# Positive large values:
x = range( 0.41422, stop = 100, length = 500 );
gen( x, "large_positive.json" );

# Positive big values:
x = range( 2.0^30, stop = 2.0^52, length = 500 )
gen( x, "big_positive.json" );

# Positive huge values:
x = range( 1e200, stop = 1e300, length = 500 )
gen( x, "huge_positive.json" );
