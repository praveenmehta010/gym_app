import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useAuth } from "../context/AuthContext"; // ✔️ Correct hook import
import { toast } from "react-hot-toast";

const BookingPage = () => {
  const { user } = useAuth(); // ✔️ Use the hook, not context directly
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings([
      {
        id: "1",
        title: "Yoga with Arjun",
        start: "2025-07-07T10:00:00",
        end: "2025-07-07T11:00:00",
      },
    ]);
  }, []);

  const handleSlotSelect = (info) => {
    const title = prompt("Enter booking title:");
    if (title) {
      const newBooking = {
        id: Date.now().toString(),
        title,
        start: info.startStr,
        end: info.endStr,
      };
      setBookings((prev) => [...prev, newBooking]);
      toast.success("Slot booked!");
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book a Session with a Trainer</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        selectable={true}
        events={bookings}
        select={handleSlotSelect}
        height="auto"
      />
    </div>
  );
};

export default BookingPage;



