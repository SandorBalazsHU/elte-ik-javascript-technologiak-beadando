// Rendering a game page
//Endpoint-level middleware
function gameRender(res) {
    res.render('game')
};

module.exports = {
    render: gameRender
};