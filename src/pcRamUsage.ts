import * as os from 'os';

setInterval(() => {
    const { platform, arch, totalmem, freemem } = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;

    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: parseInt(tRam.toString(), 10),
        FreeRAM: parseInt(fRam.toString(), 10),
        Usage: `${usage.toFixed(2)}%`,
    };

    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000);

export class stats {
}