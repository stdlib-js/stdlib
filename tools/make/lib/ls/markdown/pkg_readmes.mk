#/
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
#/

# VARIABLES #

# Define a filepath pattern for package README files:
MARKDOWN_PKG_READMES_FILTER ?= .*/.*

# Define the command flags for finding package README files:
FIND_MARKDOWN_PKG_READMES_FLAGS ?= \
	-type f \
	-name "README.md" \
	-regex "$(MARKDOWN_PKG_READMES_FILTER)" \
	$(FIND_MARKDOWN_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_MARKDOWN_PKG_READMES_FLAGS := -regextype posix-extended $(FIND_MARKDOWN_PKG_READMES_FLAGS)
endif

# Define a command for listing package README files:
FIND_MARKDOWN_PKG_READMES_CMD ?= find $(find_kernel_prefix) $(SRC_DIR) $(FIND_MARKDOWN_PKG_READMES_FLAGS)

# Define the list of package README files:
MARKDOWN_PKG_READMES_FILES ?= $(shell $(FIND_MARKDOWN_PKG_READMES_CMD))


# TARGETS #

#/
# Prints a list of all package README files.
#
# @param {string} [MARKDOWN_PKG_READMES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
#
# @example
# make list-markdown-pkg-readmes
#
# @example
# make list-markdown-pkg-readmes MARKDOWN_PKG_READMES_FILTER=".*/math/base/special/abs/.*"
#/
list-markdown-pkg-readmes:
	$(QUIET) find $(find_kernel_prefix) $(SRC_DIR) $(FIND_MARKDOWN_PKG_READMES_FLAGS) $(find_print_list)

.PHONY: list-markdown-pkg-readmes
