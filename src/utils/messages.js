const generateMessage = (text) => {
    return {
        text, 
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (url) => {
    return {
        url,
        createdAd: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}