
# VARIABLES #

# Define the source code documentation generator:
SRC_DOC_GENERATOR ?= jsdoc


# DEPENDENCIES #

ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	include $(TOOLS_MAKE_LIB_DIR)/docs/jsdoc.mk
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	include $(TOOLS_MAKE_LIB_DIR)/docs/documentationjs.mk
endif


# TARGETS #

# Generate source documentation.
#
# This target generates source HTML documentation from [JSDoc][1]-style comments.
#
# [1]: http://usejsdoc.org/

src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	$(QUIET) $(MAKE) -f $(this_file) jsdoc-html
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	$(QUIET) $(MAKE) -f $(this_file) documentationjs-html
endif

.PHONY: src-docs


# View HTML documentation.
#
# This target opens source HTML documentation in a local web browser.

view-src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	$(QUIET) $(MAKE) -f $(this_file) view-jsdoc-html
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	$(QUIET) $(MAKE) -f $(this_file) view-documentationjs-html
endif

.PHONY: view-src-docs


# Clean source HTML documentation.
#
# This target cleans up an output directory by removing it entirely.

clean-src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	$(QUIET) $(MAKE) -f $(this_file) clean-jsdoc
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	$(QUIET) $(MAKE) -f $(this_file) clean-documentationjs
endif

.PHONY: clean-src-docs


# Rebuild source HTML documentation.
#
# This target removes any current documentation and regenerates source HTML documentation from [JSDoc][1]-style comments.
#
# [1]: http://usejsdoc.org/

rebuild-src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	$(QUIET) $(MAKE) -f $(this_file) rebuild-jsdoc-html
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	$(QUIET) $(MAKE) -f $(this_file) rebuild-documentationjs-html
endif

.PHONY: rebuild-src-docs
