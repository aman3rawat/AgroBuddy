// const fs = require('node:fs/promises');

// module.exports = {
//     'insert': async (module, data) => {
//         try {
//             const path = path.resolve('json', module);
//             console.log(path);
//             const isDirExist = await fs.access(path);
//             if (!isDirExist) {
//                 await fs.mkdir(path);
//             }
//             const fileContent = JSON.parse(await fs.readFile(path));
//             fileContent[data.id] = JSON.stringify(data);
//             await fs.writeFile(JSON.stringify(fileContent));
//             return true;
//         } catch (error) {
//             console.log(error);
//             return false;
//         }
//     },
//     'delete': async (module, id) => {
//         try {
//             const path = path.resolve('json', module);
//             console.log(path);
//             const isDirExist = await fs.access(path);
//             if (!isDirExist) {
//                 await fs.mkdir(path);
//             }
//             const fileContent = JSON.parse(await fs.readFile(path));
//             fileContent[id] = undefined;
//             await fs.writeFile(JSON.stringify(fileContent));
//             return true;
//         } catch (error) {
//             console.log(error);
//             return false;
//         }
//     }
// }
