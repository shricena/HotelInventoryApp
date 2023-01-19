import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Taj Hotel';
  numberOfRooms = 10;
  hideRooms = false;


  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [{
    roomnumber: 1999,
    roomType: "SingleRoom",
    amenities: "WashingMachine,AC",
    Price: 500,
    photos: "link",
    checkInTime: new Date('11-Nov-2022'),
    checkOutTime: new Date('12-Nov-2022'),
    rating:4.5
  },
  {
    roomnumber: 3198,
    roomType: "SingleRoom1",
    amenities: "WashingMachine,AC",
    Price: 500,
    photos: "link",
    checkInTime: new Date('11-Nov-2022'),
    checkOutTime: new Date('12-Nov-2022'),
    rating:4.5
  },
  {
    roomnumber: 3198,
    roomType: "SingleRoom7",
    amenities: "WashingMachine,AC",
    Price: 500,
    photos: "link",
    checkInTime: new Date('11-Nov-2022'),
    checkOutTime: new Date('12-Nov-2022'),
    rating:4.5
  }]

  constructor() { }

  ngOnInit(): void {
  }
  // We have added
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
