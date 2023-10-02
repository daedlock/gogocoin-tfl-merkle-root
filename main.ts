import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from 'fs'

function getAllocs() {
    let values = {}
    fs.readdirSync('data').forEach((file: string) => {
        if (file.endsWith('.csv') === false) {
            return
        }
        const data = fs.readFileSync(`data/${file}`);
        let allocs: any = []
        for (let line of data.toString().replace(/\r/g, "").split('\n')) {
            const [address, amount0, amount1, amount2, amount3, amount4, amount5] = line.split(',');
            if (address.startsWith('0x') === false) {
                continue
            };
            const leaf: any[] = [address, amount0, amount1, amount2, amount3, amount4, amount5]
            allocs.push(leaf)
            // console.log(leaf.join(","))
        }
        values[file] = allocs
    });

    return values

}
let values = getAllocs()
for (let [chain, allocs] of Object.entries(values) as any) {
    const tree = StandardMerkleTree.of(allocs, ["address", "uint256", "uint256", "uint256", "uint256", "uint256", "uint256"]);
    console.log(`[${chain}][allocSize=${allocs.length}] -> [${tree.root}]`)
}

