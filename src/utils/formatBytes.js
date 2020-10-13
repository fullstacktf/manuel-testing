function formatBytes(megaBytes) {
    megaBytes = megaBytes.toString();
    if (megaBytes.length > 6) {
        return formatTerabytes(megaBytes);
    } else if (megaBytes.length > 3) {
        return formatGigabytes(megaBytes);
    } else {
        return `${megaBytes}MB`;
    }
}

const formatTerabytes = (megaBytes) => {
    const teraBytes = megaBytes.substring(0, megaBytes.length - 6) + "TB";
    const gigaBytes =
        megaBytes.substring(megaBytes.length - 6, megaBytes.length - 3) + "GB";
    megaBytes =
        megaBytes.substring(megaBytes.length - 3, megaBytes.length) + "MB";
    return `${teraBytes} ${gigaBytes} ${megaBytes}`;
};

const formatGigabytes = (megaBytes) => {
    const gigaBytes = megaBytes.substring(0, megaBytes.length - 3) + "GB";
    megaBytes =
        megaBytes.substring(megaBytes.length - 3, megaBytes.length) + "MB";
    return `${gigaBytes} ${megaBytes}`;
};

module.exports = formatBytes;
