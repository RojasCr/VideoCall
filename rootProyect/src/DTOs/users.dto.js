class UsersClassDto{
    create = (userInfo) => {
        return {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            userName: userInfo.userName,
            email: userInfo.email,
            age: userInfo.age,
            password: userInfo.password,
            phoneNumber: userInfo.phoneNumber,
            profilePhoto: userInfo.profilePhoto
        }
    }

    info = (userInfo) => {
        return {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            userName: userInfo.userName,
            email: userInfo.email,
            age: userInfo.age,
            phoneNumber: userInfo.phoneNumber,
            profilePhoto: userInfo.profilePhoto
        }
    }
}

const UsersDto = new UsersClassDto();

module.exports = UsersDto;