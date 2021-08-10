const generateMessage = (username, text) => {
    return {
        username,
        text, 
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAd: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}