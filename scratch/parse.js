import fs from 'fs';

const html = fs.readFileSync('scratch/contrib.html', 'utf8');

const totalMatch = html.match(/id="js-contribution-activity-description"[^>]*>([\s\S]*?)contributions\s+in\s+the\s+last\s+year/);
let totalContributions = 1336;
if (totalMatch) {
  totalContributions = Number(totalMatch[1].replace(/[^0-9]/g, ''));
}

console.log('Parsed total contributions:', totalContributions);
