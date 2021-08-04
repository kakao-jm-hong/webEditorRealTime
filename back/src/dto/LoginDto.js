class LoginDto {
    id;
    nickname;
    userImage;

    constructor(info) {
        this.id = info.id;
        this.nickname = info.properties.nickname;
        this.userImage = info.kakao_account.profile.profile_image_url;
    }
}

module.exports = LoginDto;