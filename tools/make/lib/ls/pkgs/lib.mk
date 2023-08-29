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

# Define the command flags:
FIND_LIB_PACKAGES_FLAGS ?= \
	-type f \
	-name "$(PACKAGES_PATTERN)" \
	-regex "$(PACKAGES_FILTER)" \
	$(FIND_LIB_PACKAGES_EXCLUDE_FLAGS) \
	-exec dirname {} \;

ifneq ($(OS), Darwin)
	FIND_LIB_PACKAGES_FLAGS := -regextype posix-extended $(FIND_LIB_PACKAGES_FLAGS)
endif

# Define a command for listing packages:
FIND_LIB_PACKAGES_CMD ?= find $(find_kernel_prefix) $(SRC_DIR) $(FIND_LIB_PACKAGES_FLAGS)

# Define the list of packages:
LIB_PACKAGES ?= $(shell $(FIND_LIB_PACKAGES_CMD))

# Define the default number of random packages
RANDOM_SELECTION_SIZE ?= 100


# RULES #

#/
# Prints a list of all packages.
#
# @param {string} [PACKAGES_PATTERN='package.json'] - filename pattern for identifying packages
# @param {string} [PACKAGES_FILTER='.*/.*'] - filepath pattern for finding packages
#
# @example
# make list-lib-pkgs
#
# @example
# make list-lib-pkgs PACKAGES_FILTER='.*/math/base/special/.*'
#/
list-lib-pkgs:
	$(QUIET) find $(find_kernel_prefix) "$(SRC_DIR)" $(FIND_LIB_PACKAGES_FLAGS) | xargs printf '%s\n'

.PHONY: list-lib-pkgs

#/
# Prints a random list of packages.
#
# @param {string} [PACKAGES_PATTERN='package.json'] - filename pattern for identifying packages
# @param {string} [PACKAGES_FILTER='.*/.*'] - filepath pattern for finding packages
# @param {string} [RANDOM_SELECTION_SIZE=100] - number of packages
#
# @example
# make list-random-lib-pkgs
#
# @example
# make list-random-lib-pkgs RANDOM_SELECTION_SIZE=10
#/
list-random-lib-pkgs:
	@if command -v shuf > /dev/null; then \
		make list-lib-pkgs | shuf -n $(RANDOM_SELECTION_SIZE) ; \
	else \
		make list-lib-pkgs | sort -R | head -n $(RANDOM_SELECTION_SIZE) ; \
	fi

.PHONY: list-random-lib-pkgs
