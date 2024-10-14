import os from 'os';

export const getEOL = () => {
    return JSON.stringify(os.EOL);
};

export const getCPUsInfo = async () => {
    const cpus = os.cpus();
    return cpus.map(cpu => ({
        model: cpu.model,
        speed: (cpu.speed / 1000)+' GHz'
    }));
};

export const getHomeDir = () => {
    return os.homedir();
};

export const getUsername = () => {
    return os.userInfo().username;
};

export const getArch = () => {
    return os.arch();
};
