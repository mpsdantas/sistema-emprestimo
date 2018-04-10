module.exports = application => {
    application.get('/', (req,res) => {render.index(res);});
};