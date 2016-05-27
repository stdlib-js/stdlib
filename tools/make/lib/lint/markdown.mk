
# VARIABLES #

# Define the linter to use for Markdown files:
MARKDOWN_LINTER ?= remark


# DEPENDENCIES #

ifeq ($(MARKDOWN_LINTER), remark)
	include $(TOOLS_MAKE_LIB_DIR)/lint/remark.mk
endif


# TARGETS #

# Lint.
#
# This target lints all Markdown files.

lint-markdown: $(NODE_MODULES)
	$(MARKDOWN_LINT) $(MARKDOWN_LINT_FLAGS) $(MARKDOWN_FILES)

.PHONY: lint-markdown
