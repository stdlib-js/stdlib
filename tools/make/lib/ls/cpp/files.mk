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

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_cpp_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_CPP_FLAGS ?= \
	-type f \
	-name "$(CPP_PATTERN)" \
	-regex "$(CPP_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(DOCS_DIR)/**/$(NODE_MODULES_FOLDER)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(DIST_DIR)/*" \
	-not -path "$(DEPS_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(BUILD_FOLDER)/*"

ifneq ($(OS), Darwin)
	FIND_CPP_FLAGS := -regextype posix-extended $(FIND_CPP_FLAGS)
endif

# Define a command for listing C++ files:
FIND_CPP_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_CPP_FLAGS)

# Define the list of files:
CPP_FILES ?= $(shell $(FIND_CPP_CMD))


# TARGETS #

# List all C++ files.
#
# This target prints a list of all C++ files.

list-cpp-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_CPP_FLAGS) $(find_print_cpp_list)

.PHONY: list-cpp-files
