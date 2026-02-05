export const CreatUserService = (id) => {
    return {
        id,
        name: `User${id}`,
        email: `user${id}@example.com`
    };
};