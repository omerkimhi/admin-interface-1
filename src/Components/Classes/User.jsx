class User {

    constructor(userId, email, password, fullName, phoneNumber, photo, spaceOwner, visits, rank) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.photo = photo;
        this.spaceOwner = spaceOwner;
        this.visits = visits
        this.rank = rank;
    }
}
export default User;