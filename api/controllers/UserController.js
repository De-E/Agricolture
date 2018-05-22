
module.exports = {
    
    login: async function(req, res)
    {
        var user = await User.find({fullName: "raffaele"});
        /*user = {
            name: "raffaele",
            job: ["ingegnere", "sviluppatore"],
        }*/
        return res.json(user);
    },
    
};
