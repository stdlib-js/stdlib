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

# Define the command for finding notes:
FIND_NOTES ?= grep

# Define the command-line options:
FIND_NOTES_FLAGS ?= -Ern

# Define the search directory:
FIND_NOTES_DIR ?= $(ROOT_DIR)


# RULES #

#/
# Searches for annotated comments.
#
# ## Notes
#
# -   Annotated comments will be output along with their associated filename and line number.
#
# @param {string} KEYWORDS - pipe-delimited list of keywords identifying annotations
#
# @example
# make notes
#/
notes:
	$(QUIET) $(FIND_NOTES) $(FIND_NOTES_FLAGS) $(KEYWORDS) $(FIND_NOTES_DIR) \
		--exclude-dir "$(NODE_MODULES)" \
		--exclude-dir "$(BUILD_DIR)" \
		--exclude-dir "$(DIST_DIR)" \
		--exclude-dir "$(REPORTS_DIR)" \
		--exclude-dir "$(DEPS_TMP_DIR)" \
		--exclude-dir "$(DEPS_BUILD_DIR)" \
		--exclude-dir "$(DOCS_DIR)/**/$(NODE_MODULES_FOLDER)" \
		--exclude-dir "$(TOOLS_DIR)/snippets" \
		--exclude "$(ROOT_DIR)/.*" \
		--exclude "**/$(BUILD_FOLDER)/*" \
		--exclude "**/$(TMP_FOLDER)/*" \
		--exclude "**/$(DATA_FOLDER)/*" \
		--exclude "**/datasets/**/data.js" \
		--exclude "*.min.js" \
		--exclude "$(this_file)" \
		--exclude TODO.md

.PHONY: notes
