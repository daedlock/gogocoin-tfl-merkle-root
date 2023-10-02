import { ethers } from 'ethers'
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";

import fs from 'fs'
function getAllocs() {
    let values = {}
    fs.readdirSync('data').forEach((file) => {
        if (file.endsWith('.csv') === false) return
        const data = fs.readFileSync(`data/${file}`);
        let allocs = []
        for (let line of data.toString().replace(/\r/g, "").split('\n')) {
            const [address, amount0, amount1, amount2, amount3, amount4, amount5] = line.split(',');
            if (address.startsWith('0x') === false) continue;
            allocs.push([address, amount0, amount1, amount2, amount3, amount4, amount5])
        }
        values[file] = allocs
    });

    return values

}
async function main() {
    let values = getAllocs()
    for (let [chain, allocs] of Object.entries(values)) {
        const tree = StandardMerkleTree.of(allocs, ["address", "uint256", "uint256", "uint256", "uint256", "uint256", "uint256"]);
        console.log(`[${chain}][allocSize=${allocs.length}] -> [${tree.root}]`)
        console.log(allocs[0])
    }

}

main()
