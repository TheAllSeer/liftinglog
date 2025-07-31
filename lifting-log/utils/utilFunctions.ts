export function generateIdFromTimestamp(): string {
    const now = new Date();
    return now.getTime().toString();
}
