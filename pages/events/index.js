import EventList from "../../components/events/event-list";
import '..styles/global.css';
import{ getFeaturedEvents } from '../../dummy-data'
function eventPage(){
    const featutedEvents = getFeaturedEvents()
    return (
        <div>
            <EventList items={featutedEvents}/>
        </div>
    )
}

export default eventPage;