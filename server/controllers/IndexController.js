const home = (req, res) => {
    res.json({
        estado: true,
        message: "Home"
    })
}

module.exports = {
    home
}