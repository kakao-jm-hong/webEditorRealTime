class LoginDto {
    id;
    nickname;
    userImage;
    type;

    constructor(info) {
        this.id = info.id;
        this.nickname = info.properties.nickname;
        this.userImage = info.kakao_account.profile.profile_image_url;
        this.type = info.type;
    }
}

module.exports = LoginDto;