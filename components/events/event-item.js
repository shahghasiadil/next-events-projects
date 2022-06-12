import Link from "next/link";
import classes from './event-item.module.css'
import Button from "../ui/button";
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
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
                  <DateIcon/>
                      <time>{humanReadable}</time>
                 </div>
            </div>
            <div className={classes.address}>
                <AddressIcon/>
                <address>
                    {formattedAdress}
                </address>
            </div>
            <div className={classes.actions}>
            <Button link={exploreLink}> 
            <span>Explore Event</span>
            <span className={classes.icon}><ArrowRightIcon/></span>
            </Button>
            </div>
        </div>
    </li>
}
export default EventItem;