import os from 'os';

export class PcRamUsage {
    private static convertToMB(bytes: number): number {
        return bytes / 1024 / 1024;
    }

    private static calculateUsage(freeMemory: number, totalMemory: number): number {
        return ( freeMemory / totalMemory ) * 100;
    }

    private static formatUsage(usage: number): string {
        return `${usage.toFixed(2)}%`;
    }

    private static getSystemStats(): any {
        const { platform, arch, totalmem, freemem } = os;
        const totalRAM = PcRamUsage.convertToMB(totalmem());
        const freeRAM = PcRamUsage.convertToMB(freemem());
        const usage = PcRamUsage.calculateUsage(freeRAM, totalRAM);

        return {
            OS: platform(),
            Arch: arch(),
            TotalRAM: parseInt(totalRAM.toString(), 10),
            FreeRAM: parseInt(freeRAM.toString(), 10),
            Usage: PcRamUsage.formatUsage(usage)
        };
    }

    public static monitorStatus(interval: number): void {
        setInterval(() => {
            const stats = PcRamUsage.getSystemStats();
            console.clear();
            console.table(stats);
        }, interval);
    }
}

PcRamUsage.monitorStatus(1000);

//export { pcRamUsage };