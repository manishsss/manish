import {readFile,writeFile,readdir} from 'node:fs/promises';
// Produce a single-file preview that can be opened directly, without a server.
const html=await readFile('dist/index.html','utf8');
const assets=await readdir('dist/assets');
let js=await readFile(`dist/assets/${assets.find(p=>p.endsWith('.js'))}`,'utf8');
const css=await readFile(`dist/assets/${assets.find(p=>p.endsWith('.css'))}`,'utf8');
// Include Vite-managed images as well as public image files.
for(const file of assets.filter(name=>/\.(webp|png|jpe?g)$/.test(name))){
  const media=await readFile('dist/assets/'+file);
  const mime=file.endsWith('.png')?'image/png':file.endsWith('.webp')?'image/webp':'image/jpeg';
  js=js.replaceAll('/assets/'+file,'data:'+mime+';base64,'+media.toString('base64'));
}

const avatar=await readFile('public/avatar.jpg');
const icon=await readFile('public/profile/header-avatar.png');
js=js.replaceAll('/avatar.jpg',`data:image/jpeg;base64,${avatar.toString('base64')}`);
for(const folder of ['content','brands','profile','network']){
  const previewFiles=await readdir(`public/${folder}`).catch(()=>[]);
  for(const file of previewFiles.filter(name=>/\.(webp|png)$/.test(name))){
    const media=await readFile(`public/${folder}/${file}`);
    const mime=file.endsWith('.png')?'image/png':'image/webp';
    js=js.replaceAll(`/${folder}/${file}`,`data:${mime};base64,${media.toString('base64')}`);
  }
}
const preview=html.replace(/<script[^>]*src="[^"]+"[^>]*><\/script>/,'')
 .replace(/<link[^>]*rel="stylesheet"[^>]*>/,'')
 .replace('href="/profile/header-avatar.png"',`href="data:image/png;base64,${icon.toString('base64')}"`)
 .replace('</head>',`<style>${css}</style></head>`)
 .replace('</body>',()=>`<script type="module">${js.replaceAll('</script','<\\/script')}</script></body>`);
await writeFile('../Manish-portfolio-preview.html',preview);
console.log('Standalone preview exported.');
