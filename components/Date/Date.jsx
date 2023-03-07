/** Date Component w/ date-fns
 * view the format() options @ https://date-fns.org/v2.16.1/docs/format
 * 
 * Component logic parses the argument string
 * exports a time element wrapping a date-fns formatted string
 * 
 * 
 */
import { parseISO, format } from 'date-fns';


export default function Date({ dateString }) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}