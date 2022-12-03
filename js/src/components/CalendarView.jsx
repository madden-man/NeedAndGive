import './calendar.css';

const CalendarView = () => (
  <div className="cal">
    <div className="cal__toolbar">toolbar</div>
    <div className="cal__monthly">some content!</div>
    <iframe
      title="google-calendar"
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F09300&ctz=America%2FDenver&src=bWFpbC5jaGFwbWFuLmVkdV92anNtZTBmZ2dmYTNncnI4NnUwb2ZxaG82a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
      style={{ border: 'solid 1px #777' }}
      width="800"
      height="600"
      frameBorder="0"
      scrolling="no"
    ></iframe>
    <iframe
      title="ccb-calendar"
      src="https://denverchurch.ccbchurch.com/w_calendar.php"
      width="100%"
      height="1100"
    ></iframe>
    {/* <CalendarPicker /> */}
  </div>
);
export default CalendarView;
