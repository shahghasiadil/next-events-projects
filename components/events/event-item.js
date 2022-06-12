import Link from "next/link";
import classes from './event-item.module.css'
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
        <div>
            <div>
                  <h1>{title}</h1>
                  <div>
                      <time>{humanReadable}</time>
                 </div>
            </div>
            <div>
                <addres>
                    {formattedAdress}
                </addres>
            </div>
            <div>
            <Link href={exploreLink}> Explore Event</Link>
            </div>
        </div>
    </li>
}
export default EventItem;