export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomnumber : number;
    roomType : string;
    amenities: string;
    Price: number;
    photos: String;
    checkInTime: Date;
    checkOutTime: Date;
    rating : number;
}

