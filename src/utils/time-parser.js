import { format, formatDistanceStrict } from 'date-fns';

const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};

const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};

export default { formatEventStart, formatEventDuration };
