// Rendering a 404 page
//Endpoint-level middleware
function error404render(res) {res.render('404')};

module.exports = {
    render: error404render
};