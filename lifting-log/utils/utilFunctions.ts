export function generateIdFromTimestamp(): string {
    const now = new Date();
    return now.getTime().toString();
}

export function sendLog(log:string){
    console.log(`[lift-log-log] : ${log}`)
}