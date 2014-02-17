var http = require('http');
http.IncomingMessage.prototype.getCookie = function (name) {
    cookies = {}
    this.headers.cookie && this.headers.cookie.split(';').forEach(function (cookie) {
        parts = cookie.split('=');
        cookies[parts[0].trim()] = (parts[1] || '').trim();
        return;
    });
    return cookies[name] || null;
}

http.IncomingMessage.prototype.getCookies = function () {
    cookies = {}
    this.headers.cookie && this.headers.cookie.split(';').forEach(function (cookie) {
        parts = cookie.split('=');
        cookies[parts[0].trim()] = (parts[1] || '').trim();
        return;
    });
    return cookies;
}


http.ServerResponse.prototype.setCookie = function (name, value, minutes, path, domain) {
    cookies = this.getHeader('Set-Cookie');
    if (typeof cookies != 'object')
        cookies = []

    exdate = new Date();
    if (!minutes) minutes = 30;
    exdate.setMinutes(exdate.getMinutes() + minutes);
    cookieText = name + '=' + value + ';expires=' + exdate.toUTCString() + ';'
    if (domain)
        cookieText += 'domain=' + domain + ';'
    if (path)
        cookieText += 'path=' + path + ';'

    cookies.push(cookieText)
    this.setHeader('Set-Cookie', cookies);
    return;
}
