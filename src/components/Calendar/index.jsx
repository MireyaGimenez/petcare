import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./index.css";

export default function Calendar({ onClick, events }) {
  const handleDateClick = (dayChosen) => {
    onClick(dayChosen);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      dateClick={handleDateClick}
      selectable={true}
      eventDisplay="list-item"
      events={events}
      firstDay={1}
    />
  );
}
