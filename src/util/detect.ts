// Detect if user is using a Safari browser or safari mobile
export const isSafari = () => {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
        if (ua.indexOf("chrome") > -1) {
            return false;
        } else {
            return true;
        }
        return false;
    }
};

// Detect if mobile is being used
export const isMobile = () => {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
        return true;
    }
    return false;
};
