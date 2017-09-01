
# TARGETS #

# Run fixture runners.
#
# This target runs scripts written in Python to generate test fixtures.

test-fixtures-python:
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		$(PYTHON) $$file || exit 1; \
	done

.PHONY: test-fixtures-python


# Run fixture runners.
#
# This target runs a list of scripts written in Python to generate fixtures.

test-fixtures-python-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		$(PYTHON) $$file || exit 1; \
	done

.PHONY: test-fixtures-python-files
