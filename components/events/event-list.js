import EventItem from "./event-item";

function EventList(props){
    const {items} = props
    console.log(items)
    return <ul>
        { items.map(event => <EventItem
            key={event.id}
            id={event.id} 
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
        />)}
    </ul>;
}

export default EventList;