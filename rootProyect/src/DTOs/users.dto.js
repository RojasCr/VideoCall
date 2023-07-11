class UsersClassDto{
    create = (userInfo) => {
        return {
            name: userInfo.name,
            lastName: userInfo.lastName,
            userName: userInfo.userName,
            email: userInfo.email,
            password: userInfo.password,
            phoneNumber: userInfo.phoneNumber,
            profilePhoto: userInfo.profilePhoto
        }
    }

    info = (userInfo) => {
        return {
            name: userInfo.name,
            lastName: userInfo.lastName,
            userName: userInfo.userName,
            email: userInfo.email,
            phoneNumber: userInfo.phoneNumber,
            profilePhoto: userInfo.profilePhoto
        }
    }
}

const UsersDto = new UsersClassDto();

module.exports = UsersDto;