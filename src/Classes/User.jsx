class User {

    constructor(userId, email, password, fullName, phoneNumber, photo, spaceOwner, visits, rank, registrationDate) {
        this.email = email;
        this.userId = userId;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.photo = photo;
        this.rank = rank;
        this.registrationDate=registrationDate;
        this.spaceOwner = spaceOwner;
        this.fullName = fullName;
        this.visits = visits;
        
      
    }
}
export default User;