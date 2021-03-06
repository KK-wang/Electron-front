import request from "@/utils/request";
export function viewBrowseLog(username) {
    return request({
        url: '/viewBrowseLogs',
        method: 'get',
        params: {
            username
        }
    });
}

export function removeBrowseLog(data) {
    return request({
        url: '/removeBrowseLog',
        method: 'post',
        data: data
    });
}
