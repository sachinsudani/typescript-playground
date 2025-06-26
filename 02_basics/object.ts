const User = {
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true,
};

function createUSer(user: { name: string, email: string, isActive: boolean }) { }
createUSer(User);

function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 };
}

export { }