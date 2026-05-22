async function testFollowers() {
  const query = `
    query {
      followers {
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
    console.log('Followers query result:', JSON.stringify(payload, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

testFollowers();
