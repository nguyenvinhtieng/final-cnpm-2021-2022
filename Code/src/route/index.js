const MainRouter = require('./main');
const AdminRouter = require('./admin')
const MeRouter = require('./me');
const StaffRouter = require('./staff');
function route(app) {
    app.use('/admin', AdminRouter);
    app.use('/me', MeRouter);
    app.use('/staff', StaffRouter);
    app.use('/', MainRouter);
}

module.exports = route;