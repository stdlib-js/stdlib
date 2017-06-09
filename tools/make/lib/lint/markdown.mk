
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
	$(QUIET) $(MARKDOWN_LINT) $(MARKDOWN_LINT_FLAGS) $(MARKDOWN_FILES)

.PHONY: lint-markdown


# Lint.
#
# This target lints Markdown files according to a specified file list.

lint-markdown-files: $(NODE_MODULES)
	$(QUIET) $(MARKDOWN_LINT) $(MARKDOWN_LINT_FLAGS) $(FILES)

.PHONY: lint-markdown-files
