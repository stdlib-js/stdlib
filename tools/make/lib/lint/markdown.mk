
# DEPENDENCIES #

ifeq ($(MARKDOWN_LINTER), remark)
	include $(TOOLS_MAKE_LIB_DIR)/lint/remark.mk
endif


# TARGETS #

# Lint.
#
# This target lints all Markdown files.

lint-markdown: $(NODE_MODULES)
	$(QUIET) $(FIND_MARKDOWN_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(MARKDOWN_LINT) $(MARKDOWN_LINT_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-markdown


# Lint.
#
# This target lints Markdown files according to a specified file list. Note that we expect `$FILES` to be a Markdown file list.

lint-markdown-files: $(NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(MARKDOWN_LINT) $(MARKDOWN_LINT_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-markdown-files
