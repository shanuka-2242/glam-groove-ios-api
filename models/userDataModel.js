const mongoose = require('mongoose')

const userInfoSchema = mongoose.Schema(
    {
        email: {
            type: String
        },
        password: {
            type: String
        },
    })

const UserInfoModel = mongoose.model('userinfos', userInfoSchema);

module.exports = UserInfoModel;