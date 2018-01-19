#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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
#/

# VARIABLES #

# Define a generic filename pattern:
FILES_PATTERN ?= *

# Define a generic filepath pattern:
FILES_FILTER ?= .*/.*


# Define a filename pattern for source files:
SOURCES_PATTERN ?= *.js

# Define a filename pattern for C source files:
C_SOURCES_PATTERN ?= *.c

# Define a filename pattern for C++ source files:
CPP_SOURCES_PATTERN ?= *.cpp

# Define a filename pattern for Fortran source files:
FORTRAN_SOURCES_PATTERN ?= *.f

# Define a filename pattern for Julia source files:
JULIA_SOURCES_PATTERN ?= *.jl

# Define a filename pattern for Python source files:
PYTHON_SOURCES_PATTERN ?= *.py

# Define a filename pattern for R source files:
R_SOURCES_PATTERN ?= *.R

# Define a filename pattern for WebAssembly source files:
WASM_SOURCES_PATTERN ?= *.wasm

# Define a filename pattern for WebAssembly source text files:
WAT_SOURCES_PATTERN ?= *.wat

# Define a filepath pattern for source files:
SOURCES_FILTER ?= .*/.*


# Define a filename pattern for test files:
TESTS_PATTERN ?= test*.js

# Define a filepath pattern for test files:
TESTS_FILTER ?= .*/.*


# Define a filename pattern for test fixtures:
TESTS_FIXTURES_PATTERN ?= *.*

# Define a filename pattern for C test fixtures:
C_TESTS_FIXTURES_PATTERN ?= *.c

# Define a filename pattern for C++ test fixtures:
CPP_TESTS_FIXTURES_PATTERN ?= *.cpp

# Define a filename pattern for Fortran test fixtures:
FORTRAN_TESTS_FIXTURES_PATTERN ?= *.f

# Define a filename pattern for Julia test fixtures:
JULIA_TESTS_FIXTURES_PATTERN ?= *.jl

# Define a filename pattern for Python test fixtures:
PYTHON_TESTS_FIXTURES_PATTERN ?= *.py

# Define a filename pattern for R test fixtures:
R_TESTS_FIXTURES_PATTERN ?= *.R

# Define a filepath pattern for test fixture files:
TESTS_FIXTURES_FILTER ?= .*/.*


# Define a filename pattern for benchmark files:
BENCHMARKS_PATTERN ?= benchmark*.js

# Define a filename pattern for C benchmark files:
C_BENCHMARKS_PATTERN ?= benchmark*.c

# Define a filename pattern for C++ benchmark files:
CPP_BENCHMARKS_PATTERN ?= benchmark*.cpp

# Define a filename pattern for Fortran benchmark files:
FORTRAN_BENCHMARKS_PATTERN ?= benchmark*.f

# Define a filename pattern for Julia benchmark files:
JULIA_BENCHMARKS_PATTERN ?= benchmark*.jl

# Define a filename pattern for Python benchmark files:
PYTHON_BENCHMARKS_PATTERN ?= benchmark*.py

# Define a filename pattern for R benchmark files:
R_BENCHMARKS_PATTERN ?= benchmark*.R

# Define a filepath pattern for benchmark files:
BENCHMARKS_FILTER ?= .*/.*


# Define a filename pattern for example files:
EXAMPLES_PATTERN ?= *.js

# Define a filename pattern for C example files:
C_EXAMPLES_PATTERN ?= *.c

# Define a filename pattern for C++ example files:
CPP_EXAMPLES_PATTERN ?= *.cpp

# Define a filename pattern for Fortran example files:
FORTRAN_EXAMPLES_PATTERN ?= *.f

# Define a filename pattern for Julia example files:
JULIA_EXAMPLES_PATTERN ?= *.jl

# Define a filename pattern for Python example files:
PYTHON_EXAMPLES_PATTERN ?= *.py

# Define a filename pattern for R example files:
R_EXAMPLES_PATTERN ?= *.R

# Define a filepath pattern for example files:
EXAMPLES_FILTER ?= .*/.*


# Define a filename pattern for C files:
C_PATTERN ?= *.c

# Define a filepath pattern for C files:
C_FILTER ?= .*/.*


# Define a filename pattern for C++ files:
CPP_PATTERN ?= *.cpp

# Define a filepath pattern for C++ files:
CPP_FILTER ?= .*/.*


# Define a filename pattern for Fortran files:
FORTRAN_PATTERN ?= *.f

# Define a filepath pattern for Fortran files:
FORTRAN_FILTER ?= .*/.*


# Define a filename pattern for JavaScript files:
JAVASCRIPT_PATTERN ?= *.js

# Define a filepath pattern for JavaScript files:
JAVASCRIPT_FILTER ?= .*/.*


# Define a filename pattern for Julia files:
JULIA_PATTERN ?= *.jl

# Define a filepath pattern for Julia files:
JULIA_FILTER ?= .*/.*


# Define a filename pattern for Markdown files:
MARKDOWN_PATTERN ?= *.md

# Define a filepath pattern for Markdown files:
MARKDOWN_FILTER ?= .*/.*


# Define a filename pattern for Python files:
PYTHON_PATTERN ?= *.py

# Define a filepath pattern for Python files:
PYTHON_FILTER ?= .*/.*


# Define a filename pattern for R files:
R_PATTERN ?= *.R

# Define a filepath pattern for R files:
R_FILTER ?= .*/.*


# Define a filename pattern for SVG equation files:
SVG_EQUATIONS_PATTERN ?= equation*.svg

# Define a filepath pattern for SVG equation files:
SVG_EQUATIONS_FILTER ?= .*/.*


# Define a filename pattern for WebAssembly files:
WASM_PATTERN ?= *.wasm

# Define a filepath pattern for WebAssembly files:
WASM_FILTER ?= .*/.*


# Define a filename pattern for WebAssembly text files:
WAT_PATTERN ?= *.wat

# Define a filepath pattern for WebAssembly text files:
WAT_FILTER ?= .*/.*


# Define a filepath pattern for packages:
PACKAGES_FILTER ?= .*/.*


# Common exclude flags:
FIND_COMMON_EXCLUDE_FLAGS ?= \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(DOCS_DIR)/**/$(NODE_MODULES_FOLDER)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(DEPS_DIR)/*" \
	-not -path "$(DIST_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(TMP_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(BUILD_FOLDER)/*" \
	-not -path "$(ROOT_DIR)/**/$(TMP_FOLDER)/*"

# Benchmark exclude flags:
FIND_BENCHMARKS_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(TOOLS_PKGS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(BENCHMARKS_FIXTURES_FOLDER)/*"

# Examples exclude flags:
FIND_EXAMPLES_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(TOOLS_PKGS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(EXAMPLES_FIXTURES_FOLDER)/*"

# Files exclude flags:
FIND_FILES_EXCLUDE_FLAGS ?= $(FIND_COMMON_EXCLUDE_FLAGS)

# Markdown exclude flags:
FIND_MARKDOWN_EXCLUDE_FLAGS ?= \
	-not -path "$(ROOT_DIR)/.git/*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(DOCS_DIR)/**/$(NODE_MODULES_FOLDER)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(TMP_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(BUILD_FOLDER)/*" \
	-not -path "$(ROOT_DIR)/**/$(TMP_FOLDER)/*"

# Sources exclude flags:
FIND_SOURCES_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(TOOLS_PKGS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(EXAMPLES_FOLDER)/*" \
	-not -path "$(ROOT_DIR)/**/$(TESTS_FOLDER)/*" \
	-not -path "$(ROOT_DIR)/**/$(BENCHMARKS_FOLDER)/*" \
	-not -path "$(ROOT_DIR)/**/$(DOCUMENTATION_FOLDER)/*" \
	-not -path "$(ROOT_DIR)/**/$(SCRIPTS_FOLDER)/*"

# SVG equations exclude flags:
FIND_SVG_EQUATIONS_EXCLUDE_FLAGS ?= $(FIND_COMMON_EXCLUDE_FLAGS)

# Tests exclude flags:
FIND_TESTS_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(TOOLS_PKGS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(TESTS_FIXTURES_FOLDER)/*"

# Tests directories exclude flags:
FIND_TESTS_DIRS_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(TOOLS_PKGS_DIR)/*"

# Text fixtures exclude flags:
FIND_TESTS_FIXTURES_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(TOOLS_PKGS_DIR)/*"

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.
ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_list := -exec printf '%s\n' {} \;


# DEPENDENCIES #

# Note: keep in alphabetical order
include $(TOOLS_MAKE_LIB_DIR)/ls/c/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/cpp/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/files.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/fortran/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/javascript/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/julia/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/markdown/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/pkgs/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/python/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/r/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/svg_equations.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/tests_directories.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/wasm/Makefile
