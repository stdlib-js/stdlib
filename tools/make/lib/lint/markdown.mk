
# VARIABLES #

# Define the linter to use for Markdown files:
MARKDOWN_LINTER ?= remark


# DEPENDENCIES #

ifeq ($(MARKDOWN_LINTER), remark)
	include $(TOOLS_MAKE_DIR)/lib/lint/remark.mk
endif


# TARGETS #

# Lint.
#
# This target lints all Markdown files.

lint-markdown: node_modules
	$(MARKDOWN_LINTER_BIN) $(MARKDOWN_LINTER_FLAGS) $(MARKDOWN_FILES)


.PHONY: lint-markdown
