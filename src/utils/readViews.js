// import fs from 'fs';
// import path from 'path-browserify';

// const viewsDir = path.join(__dirname, '../views'); // views 文件夹的路径
export const readViewsDir = (modules) => {
  const parentFiles = []
  for (const path in modules) {
    if (Object.hasOwnProperty.call(modules, path)) {
      const parentPath = path.replace('/index.vue', '').split('/').pop()
      if (!parentFiles.includes(parentPath)) {
        parentFiles.push(parentPath)
      }
    }
  }
  return parentFiles
}

// const { promisify } = require('util');
// const readdir = promisify(fs.readdir);
// const dirs = [];

// export async function readViewsDir() {
//   try {
//     const files = await readdir(viewsDir);
//     for (const dir of files) {
//       const indexPath = path.join(viewsDir, dir, 'index.vue');
//       try {
//         const data = await fs.promises.readFile(indexPath, 'utf8');
//         dirs.push(dir);
//         console.log(`${dir} 文件夹下的 index.vue 文件内容：\n${data}\n`);
//       } catch (err) {
//         if (err.code === 'ENOENT') {
//           console.log(`${dir} 文件夹下没有 index.vue 文件`);
//         } else {
//           throw err;
//         }
//       }
//     }
//     console.log(dirs);
//   } catch (err) {
//     throw err;
//   }
// }
