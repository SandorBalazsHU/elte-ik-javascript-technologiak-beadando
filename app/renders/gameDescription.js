// Rendering a game page
//Endpoint-level middleware
function gameDescriptionRender(res) {
    res.render('gameDescription')
};

module.exports = {
    render: gameDescriptionRender
};