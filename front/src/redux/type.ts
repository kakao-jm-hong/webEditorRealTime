export type RootState = {
    loading: boolean;
    login: {
        modal: boolean;
        user: {
            asessToken: string | null;
            imgUrl: string | null;
            name: string;
        }
    };
};