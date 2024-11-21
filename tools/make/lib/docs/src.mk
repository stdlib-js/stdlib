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

# DEPENDENCIES #

ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	include $(TOOLS_MAKE_LIB_DIR)/docs/jsdoc.mk
else
ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	include $(TOOLS_MAKE_LIB_DIR)/docs/documentationjs.mk
endif
endif


# TARGETS #

# Generate source documentation.
#
# This target generates source HTML documentation from [JSDoc][1]-style comments.
#
# [1]: https://jsdoc.app/

src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	$(QUIET) $(MAKE) -f $(this_file) jsdoc-html
else
ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	$(QUIET) $(MAKE) -f $(this_file) documentationjs-html
endif
endif

.PHONY: src-docs


# View HTML documentation.
#
# This target opens source HTML documentation in a local web browser.

view-src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	$(QUIET) $(MAKE) -f $(this_file) view-jsdoc-html
else
ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	$(QUIET) $(MAKE) -f $(this_file) view-documentationjs-html
endif
endif

.PHONY: view-src-docs


# Clean source HTML documentation.
#
# This target cleans up an output directory by removing it entirely.

clean-src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	$(QUIET) $(MAKE) -f $(this_file) clean-jsdoc
else
ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	$(QUIET) $(MAKE) -f $(this_file) clean-documentationjs
endif
endif

.PHONY: clean-src-docs


# Rebuild source HTML documentation.
#
# This target removes any current documentation and regenerates source HTML documentation from [JSDoc][1]-style comments.
#
# [1]: https://jsdoc.app/

rebuild-src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	$(QUIET) $(MAKE) -f $(this_file) rebuild-jsdoc-html
else
ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	$(QUIET) $(MAKE) -f $(this_file) rebuild-documentationjs-html
endif
endif

.PHONY: rebuild-src-docs
