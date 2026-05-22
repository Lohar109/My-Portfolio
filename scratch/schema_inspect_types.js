async function inspectQuery() {
  const query = `
    query {
      __type(name: "Query") {
        fields {
          name
          type {
            name
            kind
            ofType {
              name
              kind
            }
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
    const matchedUserField = payload.data?.__type?.fields?.find(f => f.name === 'matchedUser');
    console.log('matchedUser field description:', JSON.stringify(matchedUserField, null, 2));
    
    // Let's also inspect all types starting with Matched or User
    // By getting the return type name of matchedUser
    const returnTypeName = matchedUserField?.type?.name || matchedUserField?.type?.ofType?.name;
    console.log('Return type name:', returnTypeName);
    
    if (returnTypeName) {
      const typeQuery = `
        query {
          __type(name: "${returnTypeName}") {
            name
            fields {
              name
              type {
                name
                kind
                ofType {
                  name
                  kind
                }
              }
            }
          }
        }
      `;
      const typeResponse = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          origin: 'https://leetcode.com',
          referer: 'https://leetcode.com',
          'x-requested-with': 'XMLHttpRequest'
        },
        body: JSON.stringify({ query: typeQuery })
      });
      const typePayload = await typeResponse.json();
      console.log('Fields of ' + returnTypeName + ':', JSON.stringify(typePayload.data?.__type?.fields, null, 2));
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

inspectQuery();
