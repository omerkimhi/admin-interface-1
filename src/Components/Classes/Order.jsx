class Order{

    constructor(endHour,oederDate,orderId,price,reservationState,spaceId,startHour,userId){
        this.endHour= endHour;
        this.oederDate = oederDate;
        this.orderId= orderId;
        this.price = price;
        this.reservationState = reservationState;
        this.spaceId = spaceId;
        this.startHour=startHour
        this.userId=userId
    }
}
export default Order;