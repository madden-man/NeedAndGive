import { CalendarView } from '../components/CalendarView.tsx';
import { NeedAndGive } from '../components/NeedAndGive.tsx';
import './home.css';

export const Home = () =>
    <div className="page">
        <h2>Welcome to Need and Give!</h2>
        <CalendarView />
        <NeedAndGive />
    </div>;
