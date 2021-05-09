// this file could contain usefull functions that could be used in other parts of the application, we may or may not need it
const withAuth = (req,res,next) => {
    if(!req.session.owner_id) {
        res.redirect('/login');
    }else {
        next();
    }
};

module.exports = withAuth;