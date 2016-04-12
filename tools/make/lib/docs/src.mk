
# VARIABLES #

SRC_DOC_GENERATOR ?= jsdoc


# DEPENDENCIES #

ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	include $(TOOLS_MAKE_DIR)/lib/docs/jsdoc.mk
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	include $(TOOLS_MAKE_DIR)/lib/docs/documentationjs.mk
endif


# TARGETS #

# Generate source documentation.
#
# This target generates source HTML documentation from [JSDoc][1]-style comments.
#
# [1]: http://usejsdoc.org/

src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	@$(MAKE) -f $(THIS_FILE) jsdoc-html
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	@$(MAKE) -f $(THIS_FILE) documentationjs-html
endif


# View HTML documentation.
#
# This target opens source HTML documentation in a local web browser.

view-src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	@$(MAKE) -f $(THIS_FILE) view-jsdoc-html
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	@$(MAKE) -f $(THIS_FILE) view-documentationjs-html
endif


# Clean source HTML documentation.
#
# This target cleans up an output directory by removing it entirely.

clean-src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	@$(MAKE) -f $(THIS_FILE) clean-jsdoc
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	@$(MAKE) -f $(THIS_FILE) clean-documentationjs
endif


# Rebuild source HTML documentation.
#
# This target removes any current documentation and regenerates source HTML documentation from [JSDoc][1]-style comments.
#
# [1]: http://usejsdoc.org/

rebuild-src-docs:
ifeq ($(SRC_DOC_GENERATOR), jsdoc)
	@$(MAKE) -f $(THIS_FILE) rebuild-jsdoc-html
else ifeq ($(SRC_DOC_GENERATOR), documentationjs)
	@$(MAKE) -f $(THIS_FILE) rebuild-documentationjs-html
endif


.PHONY: src-docs view-src-docs clean-src-docs rebuild-src-docs
