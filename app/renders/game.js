// Rendering a 404 page
//Endpoint-level middleware
function gameRender(res) {res.render('game')};

module.exports = {
    render: gameRender
};