import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
const values = [
    ["0x7F09a4CF9B38Dc19C1f10A3965Fdc5687175E28c", "1", "1", "15403039451", "46209118354", "1", "1"],
    ["0xa86059823717fe4cc998699044b66be2e4dc67c5", "1", "1", "1259812177", "3779436532", "1", "1"],
    ["0xa263d382c6ed6a2f7af33e8afb1923d0025fdfa0", "1", "1", "605236456", "1815709369", "1", "1"],
    ["0x1f67aab1c90a356861815b244ffe4812d0297ab8", "1", "1", "601998242", "1805994728", "1", "1"],
    ["0x3f7c10cbbb1ea1046a80b738b9eaf3217410c7f6", "1", "1", "529265984", "1587797953", "1", "1"],
    ["0x3f5f6350b598a6031e6f6a6b028727bebee16915", "1", "1", "514237395", "1542712187", "1", "1"],
    ["0x2852970031ed4d9eeb879e423d1fe24305b57e0c", "1", "1", "503169032", "1509507098", "1", "1"],
    ["0x9fe1e2f4e3a068d243f042ccfab3f08832ee5398", "1", "1", "462515032", "1387545097", "1", "1"],
    ["0xD120723f9182Af7621580880Fe5D0263B0ec6340", "1", "1", "439052593", "1317157780", "1", "1"],
    ["0xc662f758476dcf1a77ce61f04ab937b2638d0ab2", "1", "1", "378747791", "1136243375", "1", "1"],
    ["0xca4ad39f872e89ef23eabd5716363fc22513e147", "1", "1", "373568773", "1120706321", "1", "1"],
    ["0xeba5dbb930fe06c865f3ad1fa572bf12619619ef", "1", "1", "286978715", "860936146", "1", "1"],
]

const tree = StandardMerkleTree.of(values, ["address", "bool", "bool", "uint128", "uint", "bool", "bool"]);

console.log(tree.root)
