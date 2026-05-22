async function inspectSchema() {
  const query = `
    query {
      __type(name: "UserProfileNode") {
        fields {
          name
          type {
            name
            kind
          }
        }
      }
    }
  `;
  
  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        origin: 'https://leetcode.com',
        referer: 'https://leetcode.com',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: JSON.stringify({ query })
    });
    
    const payload = await response.json();
    console.log('UserProfileNode fields:', JSON.stringify(payload.data?.__type?.fields, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

inspectSchema();
