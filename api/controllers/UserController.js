
module.exports = {

    login: async function(req, res)
    {
        var userRecord = await User.find().where({emailAddress: req.emailAddress, });
        if (!userRecord) {
            return res.notFound();
        }

        if (req.password == userRecord.password)
        {
            return res.ok();
        }else{
            return res.end();
        }
        
    },
};
