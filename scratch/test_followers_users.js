async function testFollowersUsers() {
  const fields = ['users', 'totalNum', 'hasMore'];
  
  for (const field of fields) {
    const query = `
      query {
        followers(userSlug: "VaibhavL") {
          ${field} {
            __typename
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
      console.log(`Field "${field}" result:`, JSON.stringify(payload, null, 2));
    } catch (err) {
      console.error('Error:', err);
    }
  }
}

testFollowersUsers();
