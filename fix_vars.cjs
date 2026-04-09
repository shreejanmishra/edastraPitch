const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'graphs');
const targetFiles = [
    'edastra_traction_preseed_proof.html',
    'edastra_success_map.html',
    'edastra_content_economics_visual.html',
    'edastra_content_unit_economics.html',
    'edastra_content_unit_economics-2.html',
    'vr_content_economics_slide.html',
    'edastra_vr_economics.html',
    'edastra_fund_allocation_burn.html'
];

targetFiles.forEach(file => {
    const filepath = path.join(dir, file);
    if (!fs.existsSync(filepath)) return;
    
    let content = fs.readFileSync(filepath, 'utf8');

    // Replace old variable usages with new standardized ones
    content = content.replace(/var\(--gold-l\)/g, 'var(--mid)');
    content = content.replace(/var\(--gold\)/g, 'var(--deep)');
    content = content.replace(/var\(--cream\)/g, 'var(--txt)');
    
    // Some pages used `--navy` as their primary dark background
    // We already replaced the root --navy from dark (#0A1628) to the new navy (#103A5A)
    // But since the theme is now light, anything that had background: var(--navy); should probably be white
    // and color: var(--navy) is fine.
    content = content.replace(/background:\s*var\(--navy\)/g, 'background: var(--white)');
    
    // In edastra_content_unit_economics-2.html, there are some explicit RGBA values used for backgrounds that map to cream/gold
    // Let's replace rgba(245,240,232,...) which was cream
    content = content.replace(/rgba\(245,\s*240,\s*232,\s*([\d.]+)\)/g, 'rgba(16, 58, 90, $1)'); // map to navy
    // Let's replace rgba(201,168,76,...) which was gold
    content = content.replace(/rgba\(201,\s*168,\s*76,\s*([\d.]+)\)/g, 'rgba(42, 127, 181, $1)'); // map to deep

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Fixed variables in ${file}`);
});
