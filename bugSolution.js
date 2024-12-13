```javascript
// Option 1: Using $regex with case-insensitive flag
const query1 = { name: { $regex: 'John', $options: 'i' } };

// Option 2: Using lowercase comparison (requires pre-processing or index considerations)
const query2 = { name: { $eq: 'john' } }; // Or converting the search term to lowercase before comparing

// Option 3: Using a case-insensitive index (Most Efficient): requires pre-planning
// For this, you must create a case-insensitive index before performing the query:
// db.collection('users').createIndex( { name: 'text' } ) // Example text index for case-insensitivity

db.collection('users').find( { $text: { $search: "john" } } );

// ... rest of the code to process the cursor ...
```