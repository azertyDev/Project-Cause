// home route
const homeRoute = (req,res) => {
    app.get('', (req, res) => {
        res.redirect('/api/');
    });

    app.get('/api/', (req, res) => {
        res.status(200).json({
            message: 'Welcome to Project Cause',
        });
    });
};

export default homeRoute;
