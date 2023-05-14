const { readFile, writeFile } = require("fs").promises
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile("./content/first.txt", "utf8");
        const second = await readFile("./content/second.txt", "utf8");
        await writeFile(
            "./content/result-mind-greenade.txt",
            `THIS IS AWESOME: ${first} ${second}`,
            { flag: 'a' }
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
// }
