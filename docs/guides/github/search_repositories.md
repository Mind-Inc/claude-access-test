# search_repositories

Search for GitHub repositories.

## Parameters
```javascript
{
    query: string,    // Search query (required)
    page: number,     // Page number (optional, default: 1)
    perPage: number   // Results per page (optional, default: 30, max: 100)
}
```

## Usage Example
```javascript
// Basic search
const results = await search_repositories({
    query: "language:javascript stars:>1000"
});

// Paginated search
const page2 = await search_repositories({
    query: "org:microsoft",
    page: 2,
    perPage: 50
});
```

## Query Syntax
- `language:python` - Filter by language
- `stars:>1000` - Filter by stars
- `org:orgname` - Filter by organization
- `user:username` - Filter by user
- `is:public/private` - Filter by visibility

## Notes
- Results are paginated
- Maximum 100 results per page
- Complex queries supported

## Error Handling
- Handle rate limiting
- Validate query syntax
- Check result counts