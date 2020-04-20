class Order{

    constructor(orderId,spaceId,userId,reservationDate,startHour,endHour,price,orderDate)
    {
        this.orderId = orderId;
        this.spaceId = spaceId;
        this.userId = userId;
        this.reservationDate = reservationDate;
        this.startHour = startHour;
        this.endHour = endHour;
        this.price = price;
        this.orderDate = orderDate;
        
    }

}
export default Order;