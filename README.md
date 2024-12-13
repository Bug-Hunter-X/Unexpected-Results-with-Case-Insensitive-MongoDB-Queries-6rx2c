# Unexpected Results with Case-Insensitive MongoDB Queries in MongoDB

This repository demonstrates a common issue encountered when performing case-insensitive searches in MongoDB using regular expressions.  Improperly constructed queries can lead to unexpected results if the case-sensitivity of the data is not carefully managed.

The `bug.js` file showcases a query that might inadvertently return more results than expected due to case insensitivity, while `bugSolution.js` provides a corrected version to ensure accurate and controlled case handling.  This solution provides several examples of more robust case-insensitive search techniques.

## Contributing

Feel free to open issues or pull requests to improve this example or add additional scenarios.