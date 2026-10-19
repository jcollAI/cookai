import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import handler from './api/search.js';
const root=process.cwd();
http.createServer(async(req,res)=>{const url=new URL(req.url,'http://localhost');if(url.pathname==='/api/search'){req.query=Object.fromEntries(url.searchParams);res.status=n=>{res.statusCode=n;return res};res.json=j=>{res.setHeader('Content-Type','application/json');res.end(JSON.stringify(j))};return handler(req,res);}try{const filename=path.resolve(root,'.'+(url.pathname==='/'?'/index.html':url.pathname));if(!filename.startsWith(root+path.sep))throw Error();const data=await readFile(filename);res.setHeader('Content-Type',({'html':'text/html','js':'application/javascript','css':'text/css'})[filename.split('.').pop()]||'text/plain');res.end(data);}catch{res.statusCode=404;res.end('Not found');}}).listen(3000,'0.0.0.0',()=>console.log('CookAI http://localhost:3000'));
