class UsersRepository{
    
    constructor(dao){
        this.dao = dao;
    }

    create = async (userInfo) => {
        try {
            const newUser = await this.dao.create(userInfo);
            return newUser;
        } catch (error) {
            throw new Error(error)
        }
    }

    find = async () => {
        try {
            const users = await this.dao.find();
            return users;
        } catch (error) {
            throw new Error(error)
        }
    }

    findOne = async (filter) => {
        try {
            const user = await this.dao.findOne(filter);
            return user;
        } catch (error) {
            throw new Error(error)
        }
    }

    updateOne = async (filter, update) => {
        try {
            const userUpdated = await this.dao.updateOne(filter, update);
            return userUpdated;
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = UsersRepository;