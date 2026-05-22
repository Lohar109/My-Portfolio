async function testRootFields() {
  const query = `
    query {
      userFollowers {
        username
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
    console.log('Query errors:', JSON.stringify(payload.errors, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

testRootFields();
