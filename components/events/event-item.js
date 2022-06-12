import Link from "next/link";
import classes from './event-item.module.css'
import Button from "../ui/button";
function EventItem(props){
    const {title, image, date, location, id} = props
    const humanReadable = new Date(date).toLocaleDateString('en-US', {
         day:'numeric',
         month:'long',
         year:'numeric'
    });

    const exploreLink = `/events/${id}`
    const formattedAdress = location.replace(', ','\n')
    return <li className={classes.item}>
        <img src={'/'+ image } alt={title}/>
        <div className={classes.contents}>
            <div className={classes.summary}>
                  <h1>{title}</h1>
                  <div className={classes.date}>
                      <time>{humanReadable}</time>
                 </div>
            </div>
            <div className={classes.address}>
                <address>
                    {formattedAdress}
                </address>
            </div>
            <div className={classes.actions}>
            <Button href={exploreLink}> Explore Event</Button>
            </div>
        </div>
    </li>
}
export default EventItem;