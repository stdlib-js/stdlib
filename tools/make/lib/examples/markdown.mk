
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/examples/markdown_javascript.mk


# TARGETS #

# Run examples.
#
# This target runs examples found in Markdown files.

markdown-examples: markdown-examples-javascript

.PHONY: markdown-examples
