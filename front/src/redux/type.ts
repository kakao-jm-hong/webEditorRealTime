export type RootState = {
    loading: boolean;
    login: {
        modal: boolean;
        user: {
            id: string;
            nickname: string;
            userImage: string;
            type: string;
        }
    };

};