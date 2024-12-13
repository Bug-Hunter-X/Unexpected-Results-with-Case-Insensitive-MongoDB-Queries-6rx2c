```javascript
const query = { name: /John/i }; // Case-insensitive search

// This query will return documents where the 'name' field contains 'John', 'john', 'JOHN', etc.

const cursor = db.collection('users').find(query);

// ... rest of the code to process the cursor ...
```