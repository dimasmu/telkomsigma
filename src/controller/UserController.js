const models = require('../../models');
const Axios = require('axios');

//Models
const User = models.pegawai;
const Aplikasi = models.aplikasi;
const Role = models.role;

const getUser = async (req, res) => {
    const getDataUer = await User.findAll({
        attributes: [
            ['user_name', 'username'],
            ['full_name', 'fullname']
        ],
        include: [{
            attributes: ['id_aplikasi', 'nama_aplikasi'],
            model: Aplikasi,
            as: 'aplikasi',
            include: [{
                attributes: ['id_role', 'nama_role'],
                model: Role,
                as: 'roles',
            }]
        }]
    });
    return getDataUer;
}

module.exports = {
    async getuser(req, res) {
        try {
            const getDataUer = await getUser();
            return res.status(200).json({
                data: getDataUer
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message
            })
        }
    },

    async renderUser(req, res) {
        // const getDataUer = await getUser();
        // config
        const httpConfig = {
            method: 'get',
            url: 'https://raw.githubusercontent.com/damaryosaaji/freeapi/main/user.json'
        }
        await Axios(httpConfig).then(async (response) => {
            if (response && response.data) {
                if (response.status === 200) {
                    result = {
                        data: response.data,
                        status: true
                    };
                } else {
                    result = {
                        message: ((response != null && response.data) ? response.data : (response != null && response.status != null ? response.status + '-' + response.statusText : "Empty response")),
                        status: false
                    };
                }
            }
        }).catch(error => {
            result = {
                status: false,
                statusText: error.response.statusText,
                error: error.message
            }
        });
        res.render('user',{data : result});
        // res.status(200).json({
        //     data: result
        // })
    }
}